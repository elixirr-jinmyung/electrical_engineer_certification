#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re

# 메뉴 함수들
menu_functions = '''
// ===== 메뉴 기능 =====

// 메뉴 토글
function toggleMenuModal() {
    const menuModal = document.getElementById('menuModal');
    menuModal.style.display = menuModal.style.display === 'flex' ? 'none' : 'flex';
}

// 메뉴 옵션 표시
function showMenuOption(option) {
    const subModal = document.getElementById('menuSubModal');
    const subContent = document.getElementById('menuSubContent');
    
    if (option === 'export') {
        subContent.innerHTML = `
            <h3>📥 데이터 내보내기</h3>
            <p style="color: var(--text-secondary); margin: 1rem 0;">저장된 메모와 즐겨찾기를 다운로드하세요.</p>
            <div style="display: flex; gap: 0.8rem;">
                <button onclick="exportToExcel(); toggleMenuSubModal();" class="btn-submit" style="flex: 1;">📊 Excel</button>
                <button onclick="exportToJSON(); toggleMenuSubModal();" class="btn-submit" style="flex: 1; background: var(--accent-secondary);">📄 JSON</button>
            </div>
        `;
    } else if (option === 'shortcuts') {
        subContent.innerHTML = `
            <h3>⌨️ 키보드 단축키</h3>
            <div style="margin: 1.5rem 0;">
                <div class="shortcut-item">
                    <kbd>←</kbd> <span>이전 슬라이드</span>
                </div>
                <div class="shortcut-item">
                    <kbd>→</kbd> <span>다음 슬라이드</span>
                </div>
                <div class="shortcut-item">
                    <kbd>ESC</kbd> <span>모달 닫기</span>
                </div>
            </div>
        `;
    } else if (option === 'reset') {
        subContent.innerHTML = `
            <h3 style="color: var(--accent-secondary);">🗑️ 데이터 초기화</h3>
            <p style="color: var(--text-secondary); margin: 1.5rem 0;">⚠️ 모든 메모, 즐겨찾기가 삭제됩니다. 되돌릴 수 없습니다.</p>
            <div style="display: flex; gap: 0.8rem;">
                <button onclick="confirmReset()" class="btn-submit" style="flex: 1; background: var(--accent-secondary);">확인</button>
                <button onclick="toggleMenuSubModal()" class="btn-submit" style="flex: 1; background: var(--bg-secondary); color: var(--text-primary);">취소</button>
            </div>
        `;
    } else if (option === 'info') {
        const totalSlides = subjects.reduce((sum, s) => sum + s.slides.length, 0);
        const totalNotes = Object.values(appState.notes).reduce((sum, n) => sum + n.length, 0);
        subContent.innerHTML = `
            <h3>ℹ️ 앱 정보</h3>
            <div style="margin: 1.5rem 0;">
                <p><strong>⚡ 전기산업기사 필기</strong></p>
                <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6;">
                    전기산업기사 필기시험 대비 학습 앱입니다.<br>
                    메모, 즐겨찾기, 퀴즈 등의 기능으로<br>
                    효율적인 학습을 지원합니다.
                </p>
                <p style="margin-top: 1rem; color: var(--text-secondary); font-size: 0.85rem;">v1.0 | © 2026</p>
                <div style="margin-top: 1.5rem; padding: 1rem; background: var(--bg-secondary); border-radius: 8px;">
                    <p style="font-size: 0.85rem; margin: 0.5rem 0;">
                        <strong>과목:</strong> ${subjects.length}개<br>
                        <strong>총 슬라이드:</strong> ${totalSlides}개<br>
                        <strong>메모:</strong> ${totalNotes}개<br>
                        <strong>즐겨찾기:</strong> ${appState.bookmarks.length}개
                    </p>
                </div>
            </div>
        `;
    }
    
    subModal.style.display = 'flex';
}

function toggleMenuSubModal() {
    const subModal = document.getElementById('menuSubModal');
    subModal.style.display = 'none';
}

function confirmReset() {
    if (confirm('정말 모든 데이터를 삭제하시겠습니까?')) {
        appState = {
            currentSubjectIndex: 0,
            currentSlideIndex: 0,
            bookmarks: [],
            notes: {},
            quizResults: {}
        };
        localStorage.removeItem('electricalAppState');
        toggleMenuSubModal();
        toggleMenuModal();
        alert('데이터가 초기화되었습니다.');
        location.reload();
    }
}
'''

menu_listeners = '''
    // 메뉴 이벤트 리스너
    const menuToggle = document.getElementById('menuToggle');
    const menuModal = document.getElementById('menuModal');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const closeSubMenuBtn = document.getElementById('closeSubMenuBtn');

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenuModal);
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', toggleMenuModal);
    }

    if (closeSubMenuBtn) {
        closeSubMenuBtn.addEventListener('click', toggleMenuSubModal);
    }

    // 메뉴 모달 외부 클릭 시 닫기
    if (menuModal) {
        menuModal.addEventListener('click', (e) => {
            if (e.target === menuModal) {
                toggleMenuModal();
            }
        });
    }

    // 메뉴 서브 모달 외부 클릭 시 닫기
    const menuSubModal = document.getElementById('menuSubModal');
    if (menuSubModal) {
        menuSubModal.addEventListener('click', (e) => {
            if (e.target === menuSubModal) {
                toggleMenuSubModal();
            }
        });
    }
'''

# 파일 읽기
with open('c:\\Users\\jinmy\\Desktop\\electrical_engineer_certification\\app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# setupEventListeners() 함수의 끝에 메뉴 리스너 추가
pattern = r"(    // 테마 복구\n    if \(localStorage\.getItem\('theme'\) === 'dark'\) \{\n        document\.body\.classList\.add\('dark-mode'\);\n    \}\n)\}\n\n// 데이터 내보내기"
replacement = r"\1" + menu_listeners + "\n}\n\n" + menu_functions + "\n// 데이터 내보내기"

content = re.sub(pattern, replacement, content)

# 파일 저장
with open('c:\\Users\\jinmy\\Desktop\\electrical_engineer_certification\\app.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('✅ app.js 수정 완료: 메뉴 함수 및 리스너 추가')
