// 앱 상태
let appState = {
    currentSubjectIndex: 0,
    currentSlideIndex: 0,
    bookmarks: [],
    notes: {},
    quizResults: {}
};

// DOM 요소
const subjectList = document.getElementById('subjectList');
const slideList = document.getElementById('slideList');
const currentSlide = document.getElementById('currentSlide');
const currentIndexSpan = document.getElementById('currentIndex');
const totalSlidesSpan = document.getElementById('totalSlides');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const quizBtn = document.getElementById('quizBtn');
const noteInput = document.getElementById('noteInput');
const saveNoteBtn = document.getElementById('saveNoteBtn');
const notesList = document.getElementById('notesList');
const addBookmarkBtn = document.getElementById('addBookmarkBtn');
const bookmarksList = document.getElementById('bookmarksList');
const progressStats = document.getElementById('progressStats');
const themeToggle = document.getElementById('themeToggle');
const quizModal = document.getElementById('quizModal');
const closeQuizBtn = document.getElementById('closeQuizBtn');
const imageModal = document.getElementById('imageModal');
const closeImageBtn = document.getElementById('closeImageBtn');
const quizContainer = document.getElementById('quizContainer');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

// 초기화
function init() {
    loadFromStorage();
    renderSubjects();
    loadSlide(appState.currentSubjectIndex, appState.currentSlideIndex);
    setupEventListeners();
    updateThemeIcon();
}

// 저장소에서 로드
function loadFromStorage() {
    const saved = localStorage.getItem('electricalAppState');
    if (saved) {
        const parsed = JSON.parse(saved);
        appState = { ...appState, ...parsed };
    }
}

// 저장소에 저장
function saveToStorage() {
    localStorage.setItem('electricalAppState', JSON.stringify({
        currentSubjectIndex: appState.currentSubjectIndex,
        currentSlideIndex: appState.currentSlideIndex,
        bookmarks: appState.bookmarks,
        notes: appState.notes,
        quizResults: appState.quizResults
    }));
}

// 과목 렌더링
function renderSubjects() {
    subjectList.innerHTML = '';
    subjects.forEach((subject, index) => {
        const btn = document.createElement('button');
        btn.className = `subject-btn ${index === appState.currentSubjectIndex ? 'active' : ''}`;
        btn.textContent = subject.subject;
        btn.onclick = () => switchSubject(index);
        subjectList.appendChild(btn);
    });
}

// 과목 전환
function switchSubject(index) {
    appState.currentSubjectIndex = index;
    appState.currentSlideIndex = 0;
    saveToStorage();
    renderSubjects();
    renderSlideList();
    loadSlide(index, 0);
}

// 슬라이드 목록 렌더링
function renderSlideList() {
    slideList.innerHTML = '';
    const currentSubject = subjects[appState.currentSubjectIndex];
    const totalSlides = currentSubject.slides.length;
    totalSlidesSpan.textContent = totalSlides;

    currentSubject.slides.forEach((slide, index) => {
        const li = document.createElement('li');
        li.className = `slide-item ${index === appState.currentSlideIndex ? 'active' : ''}`;
        li.innerHTML = `<span>${index + 1}.</span> ${slide.title}`;
        li.onclick = () => loadSlide(appState.currentSubjectIndex, index);
        slideList.appendChild(li);
    });
}

// 슬라이드 로드 및 표시
function loadSlide(subjectIndex, slideIndex) {
    const subject = subjects[subjectIndex];
    const slide = subject.slides[slideIndex];

    appState.currentSubjectIndex = subjectIndex;
    appState.currentSlideIndex = slideIndex;
    saveToStorage();

    // 슬라이드 내용 렌더링
    let html = `<h2>${slide.title}</h2>`;

    if (slide.content) {
        html += `<div>${slide.content}</div>`;
    }

    if (slide.formulas && slide.formulas.length > 0) {
        html += '<h3>공식</h3>';
        slide.formulas.forEach(formula => {
            // MathJax 렌더링을 위해 $$ ... $$ 형식으로 감싸기
            html += `<div class="formula">$$${formula}$$</div>`;
        });
    }

    if (slide.keywords && slide.keywords.length > 0) {
        html += '<div class="keywords"><strong>키워드:</strong><br>';
        slide.keywords.forEach(keyword => {
            html += `<span class="keyword-tag">${keyword}</span>`;
        });
        html += '</div>';
    }

    currentSlide.innerHTML = html;
    currentIndexSpan.textContent = slideIndex + 1;

    // 수식 렌더링 (MathJax) - 향상된 타입셋팅
    if (window.MathJax) {
        MathJax.typesetPromise([currentSlide]).then(() => {
            // MathJax 렌더링 후 추가 스타일 적용
            const formulas = currentSlide.querySelectorAll('.formula');
            formulas.forEach(formula => {
                if (formula.querySelector('mjx-container')) {
                    formula.style.display = 'flex';
                    formula.style.justifyContent = 'center';
                    formula.style.alignItems = 'center';
                }
            });
        }).catch(err => console.log('MathJax error:', err));
    }

    // UI 업데이트
    renderSlideList();
    updateNavigationButtons();
    loadNoteForSlide();
    updateBookmarkButton();
    updateProgressStats();

    // 키워드 태그 클릭 이벤트
    const keywordTags = currentSlide.querySelectorAll('.keyword-tag');
    keywordTags.forEach(tag => {
        tag.style.cursor = 'pointer';
        tag.addEventListener('click', (e) => {
            const keyword = tag.textContent;
            searchByKeyword(keyword);
        });
        tag.addEventListener('mouseover', () => {
            tag.style.opacity = '0.8';
        });
        tag.addEventListener('mouseout', () => {
            tag.style.opacity = '1';
        });
    });

    // 이미지 클릭 확대 기능
    const images = currentSlide.querySelectorAll('img');
    images.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', (e) => {
            if (img.src && img.alt) {
                const imageModal = document.getElementById('imageModal');
                const expandedImage = document.getElementById('expandedImage');
                const expandedImageCaption = document.getElementById('expandedImageCaption');
                expandedImage.src = img.src;
                expandedImage.alt = img.alt;
                expandedImageCaption.textContent = img.alt;
                imageModal.style.display = 'flex';
                imageModal.classList.add('show');
            }
        });
    });
}

// 키워드 검색 함수
function searchByKeyword(keyword) {
    let foundCount = 0;
    const results = [];

    // 모든 과목의 모든 슬라이드에서 키워드 검색
    subjects.forEach((subject, subIdx) => {
        subject.slides.forEach((slide, slideIdx) => {
            if (slide.keywords && slide.keywords.includes(keyword)) {
                results.push({
                    subjectName: subject.subject,
                    subjectIndex: subIdx,
                    slideTitle: slide.title,
                    slideIndex: slideIdx
                });
                foundCount++;
            }
        });
    });

    // 검색 결과를 모달로 표시
    if (foundCount === 0) {
        alert(`"${keyword}" 키워드를 다른 슬라이드에서 찾을 수 없습니다.`);
        return;
    }

    // 검색 결과 모달 생성
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.style.zIndex = '2000';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <h2>🔍 "${keyword}" 키워드 검색 결과</h2>
            <p style="margin-bottom: 1.5rem; color: var(--text-secondary);">총 <strong>${foundCount}</strong>개의 슬라이드에서 찾았습니다.</p>
            <div style="display: flex; flex-direction: column; gap: 0.8rem; max-height: 60vh; overflow-y: auto;">
                ${results.map((result, idx) => `
                    <div style="
                        background: linear-gradient(135deg, rgba(0,102,255,0.1), rgba(0,212,255,0.08));
                        border: 1px solid rgba(0,102,255,0.2);
                        border-radius: 10px;
                        padding: 0.9rem;
                        cursor: pointer;
                        transition: all 0.2s;
                    "
                    onmouseover="this.style.background='linear-gradient(135deg, rgba(0,102,255,0.2), rgba(0,212,255,0.15))'; this.style.transform='translateX(4px)';"
                    onmouseout="this.style.background='linear-gradient(135deg, rgba(0,102,255,0.1), rgba(0,212,255,0.08))'; this.style.transform='translateX(0)';"
                    onclick="navigateToSlide(${result.subjectIndex}, ${result.slideIndex}); document.querySelector('.modal').remove();">
                        <div style="font-weight: 600; color: var(--accent); margin-bottom: 0.4rem;">${result.subjectName}</div>
                        <div style="color: var(--text-secondary); font-size: 0.9rem;">${result.slideTitle}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // 모달 닫기 버튼
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
    });

    // 모달 외부 클릭 시 닫기
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// 슬라이드로 이동하는 함수
function navigateToSlide(subjectIndex, slideIndex) {
    loadSlide(subjectIndex, slideIndex);
}

function updateNavigationButtons() {
    const totalSlides = subjects[appState.currentSubjectIndex].slides.length;
    prevBtn.disabled = appState.currentSlideIndex === 0;
    nextBtn.disabled = appState.currentSlideIndex === totalSlides - 1;
}

// 이전 슬라이드
function goToPrevSlide() {
    if (appState.currentSlideIndex > 0) {
        loadSlide(appState.currentSubjectIndex, appState.currentSlideIndex - 1);
    }
}

// 다음 슬라이드
function goToNextSlide() {
    const totalSlides = subjects[appState.currentSubjectIndex].slides.length;
    if (appState.currentSlideIndex < totalSlides - 1) {
        loadSlide(appState.currentSubjectIndex, appState.currentSlideIndex + 1);
    }
}

// 메모 로드
function loadNoteForSlide() {
    const slideId = getSlideId();
    const note = appState.notes[slideId] || '';
    noteInput.value = note;
    renderNotesList();
}

// 메모 저장
function saveNote() {
    const slideId = getSlideId();
    const text = noteInput.value.trim();
    
    if (text) {
        if (!appState.notes[slideId]) {
            appState.notes[slideId] = [];
        }
        
        const note = {
            id: Date.now(),
            text: text,
            timestamp: new Date().toLocaleString('ko-KR')
        };
        
        appState.notes[slideId].push(note);
        noteInput.value = '';
        saveToStorage();
        renderNotesList();
        alert('메모가 저장되었습니다.');
    }
}

// 메모 목록 렌더링
function renderNotesList() {
    const slideId = getSlideId();
    const notes = appState.notes[slideId] || [];
    
    notesList.innerHTML = '';
    if (notes.length === 0) {
        notesList.innerHTML = '<p style="color: var(--text-secondary); font-size: 0.9rem;">아직 메모가 없습니다.</p>';
        return;
    }
    
    notes.forEach(note => {
        const item = document.createElement('div');
        item.className = 'note-item';
        item.innerHTML = `
            <div class="note-item-text">${escapeHtml(note.text)}</div>
            <div class="note-item-time">${note.timestamp}</div>
            <button class="btn-secondary" style="font-size: 0.8rem; padding: 0.3rem;" 
                onclick="deleteNote('${slideId}', ${note.id})">삭제</button>
        `;
        notesList.appendChild(item);
    });
}

// 메모 삭제
function deleteNote(slideId, noteId) {
    if (appState.notes[slideId]) {
        appState.notes[slideId] = appState.notes[slideId].filter(n => n.id !== noteId);
        saveToStorage();
        renderNotesList();
    }
}

// 즐겨찾기 추가/제거
function toggleBookmark() {
    const slideId = getSlideId();
    const index = appState.bookmarks.indexOf(slideId);
    
    if (index > -1) {
        appState.bookmarks.splice(index, 1);
    } else {
        appState.bookmarks.push(slideId);
    }
    
    saveToStorage();
    updateBookmarkButton();
    renderBookmarksList();
}

// 즐겨찾기 버튼 업데이트
function updateBookmarkButton() {
    const slideId = getSlideId();
    const isBookmarked = appState.bookmarks.includes(slideId);
    addBookmarkBtn.textContent = isBookmarked ? '⭐ 즐겨찾기 제거' : '⭐ 즐겨찾기 추가';
    addBookmarkBtn.style.backgroundColor = isBookmarked ? 'var(--accent)' : 'var(--bg-primary)';
    addBookmarkBtn.style.color = isBookmarked ? 'white' : 'var(--text-primary)';
}

// 즐겨찾기 목록 렌더링
function renderBookmarksList() {
    bookmarksList.innerHTML = '';
    
    if (appState.bookmarks.length === 0) {
        bookmarksList.innerHTML = '<li style="color: var(--text-secondary); font-size: 0.9rem; padding: 0.5rem;">즐겨찾기한 슬라이드가 없습니다.</li>';
        return;
    }
    
    appState.bookmarks.forEach(slideId => {
        const [subIdx, slideIdx] = slideId.split('-').map(Number);
        const slide = subjects[subIdx].slides[slideIdx];
        
        const li = document.createElement('li');
        li.className = 'bookmark-item';
        li.textContent = `${subjects[subIdx].subject} - ${slide.title}`;
        li.onclick = () => loadSlide(subIdx, slideIdx);
        bookmarksList.appendChild(li);
    });
}

// 진행도 업데이트
function updateProgressStats() {
    progressStats.innerHTML = '';
    
    let totalSlides = 0;
    let visitedSlides = new Set();
    
    subjects.forEach((subject, subIdx) => {
        totalSlides += subject.slides.length;
        
        subject.slides.forEach((slide, slideIdx) => {
            const slideId = `${subIdx}-${slideIdx}`;
            if (appState.bookmarks.includes(slideId) || appState.notes[slideId]) {
                visitedSlides.add(slideIdx);
            }
        });
    });
    
    subjects.forEach((subject, subIdx) => {
        const visitedCount = subject.slides.filter((_, idx) => {
            const slideId = `${subIdx}-${idx}`;
            return appState.bookmarks.includes(slideId) || appState.notes[slideId];
        }).length;
        
        const progress = subject.slides.length > 0 ? (visitedCount / subject.slides.length) * 100 : 0;
        
        const item = document.createElement('div');
        item.className = 'progress-item';
        item.innerHTML = `
            <div class="progress-label">${subject.subject}</div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%"></div>
            </div>
            <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.3rem;">
                ${visitedCount} / ${subject.slides.length}
            </div>
        `;
        progressStats.appendChild(item);
    });
}

// 퀴즈 표시
function showQuiz() {
    const subject = subjects[appState.currentSubjectIndex];
    const subjectQuizzes = quizzes.filter(q => q.subject === subject.subject);
    
    if (subjectQuizzes.length === 0) {
        alert('이 과목의 퀴즈가 아직 준비되지 않았습니다.');
        return;
    }
    
    quizContainer.innerHTML = '';
    let correctAnswers = 0;
    let allAnswered = false;
    
    const form = document.createElement('form');
    
    subjectQuizzes.forEach((q, index) => {
        const div = document.createElement('div');
        div.className = 'question-item';
        
        const questionText = document.createElement('div');
        questionText.className = 'question-text';
        questionText.textContent = `${index + 1}. ${q.question}`;
        div.appendChild(questionText);
        
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';
        
        q.options.forEach((option, optIndex) => {
            const label = document.createElement('label');
            label.className = 'option';
            label.innerHTML = `
                <input type="radio" name="q${index}" value="${optIndex}">
                ${option}
            `;
            optionsDiv.appendChild(label);
        });
        
        div.appendChild(optionsDiv);
        form.appendChild(div);
    });
    
    const submitBtn = document.createElement('button');
    submitBtn.type = 'button';
    submitBtn.className = 'btn-submit';
    submitBtn.textContent = '제출';
    submitBtn.onclick = () => submitQuiz(form, subjectQuizzes);
    
    form.appendChild(submitBtn);
    quizContainer.appendChild(form);
    
    quizModal.classList.add('show');
}

// 퀴즈 제출
function submitQuiz(form, quizzes) {
    const formData = new FormData(form);
    let correctCount = 0;
    
    quizzes.forEach((q, index) => {
        const selected = formData.get(`q${index}`);
        const isCorrect = parseInt(selected) === q.correct;
        
        if (isCorrect) correctCount++;
        
        const options = form.querySelectorAll(`input[name="q${index}"]`);
        options.forEach((option, optIndex) => {
            const optionLabel = option.closest('.option');
            if (optIndex === q.correct) {
                optionLabel.classList.add('correct');
                optionLabel.disabled = true;
            } else if (selected && parseInt(selected) === optIndex && optIndex !== q.correct) {
                optionLabel.classList.add('incorrect');
                optionLabel.disabled = true;
            }
            option.disabled = true;
        });
        
        if (q.explanation) {
            const explanationDiv = document.createElement('div');
            explanationDiv.className = 'explanation';
            explanationDiv.innerHTML = `<strong>📚 해설:</strong> ${q.explanation}`;
            form.querySelectorAll('.question-item')[index].appendChild(explanationDiv);
        }
    });
    
    // MathJax 렌더링 (해설에 공식이 있을 경우)
    if (window.MathJax) {
        MathJax.typesetPromise([quizContainer]).catch(err => console.log('MathJax error:', err));
    }
    
    const submitBtn = form.querySelector('.btn-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = `✓ 채점 완료: ${correctCount} / ${quizzes.length} 맞음`;
}

// 슬라이드 ID 생성
function getSlideId() {
    return `${appState.currentSubjectIndex}-${appState.currentSlideIndex}`;
}

// HTML 이스케이프
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// 테마 토글
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    updateThemeIcon();
}

function updateThemeIcon() {
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    
    if (!isDark && localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }
}

// 이벤트 리스너 설정
function setupEventListeners() {
    prevBtn.addEventListener('click', goToPrevSlide);
    nextBtn.addEventListener('click', goToNextSlide);
    quizBtn.addEventListener('click', showQuiz);
    saveNoteBtn.addEventListener('click', saveNote);
    addBookmarkBtn.addEventListener('click', toggleBookmark);
    themeToggle.addEventListener('click', toggleTheme);
    closeQuizBtn.addEventListener('click', () => quizModal.classList.remove('show'));
    
    // 이미지 모달 닫기
    closeImageBtn.addEventListener('click', () => {
        imageModal.style.display = 'none';
        imageModal.classList.remove('show');
    });
    
    // 이미지 모달 바깥쪽 클릭 시 닫기
    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            imageModal.style.display = 'none';
            imageModal.classList.remove('show');
        }
    });
    
    // Escape 키로 이미지 모달 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && imageModal.style.display === 'flex') {
            imageModal.style.display = 'none';
            imageModal.classList.remove('show');
        }
    });
    
    // 탭 전환
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            e.target.classList.add('active');
            const tabId = e.target.dataset.tab;
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // 키보드 단축키
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goToPrevSlide();
        if (e.key === 'ArrowRight') goToNextSlide();
    });
    
    // 테마 복구
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// 앱 시작
document.addEventListener('DOMContentLoaded', init);
