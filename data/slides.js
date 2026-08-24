const subjects = [
  {
    "subject": "전기자기학",
    "slides": [
      {
        "title": "벡터의 기초",
        "content": "<p>전기자기학은 벡터량(전계, 자계 등)을 다루므로 벡터 연산이 필수적입니다.</p><ul><li><b>스칼라</b>: 크기만 가지는 양 (전위, 전하량, 전기저항)</li><li><b>벡터</b>: 크기와 방향을 가지는 양 (전계, 자계, 힘)</li><li>벡터의 내적(스칼라곱): 두 벡터가 이루는 각도의 코사인 성분을 곱함 → 일, 전력 등 스칼라 결과</li><li>벡터의 외적(벡터곱): 두 벡터에 모두 수직인 벡터 생성 → 토크, 자기력 등</li></ul><svg viewBox='0 0 300 150' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='130' x2='150' y2='30' stroke='#2563eb' stroke-width='3' marker-end='url(#arrow)'/><line x1='20' y1='130' x2='220' y2='110' stroke='#dc2626' stroke-width='3' marker-end='url(#arrow)'/><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='5' refY='5' orient='auto'><path d='M0,0 L10,5 L0,10 Z' fill='#333'/></marker></defs><text x='150' y='25' fill='#2563eb'>A</text><text x='220' y='105' fill='#dc2626'>B</text></svg>",
        "formulas": [
          "\\vec{A} \\cdot \\vec{B} = |A||B|\\cos\\theta",
          "\\vec{A} \\times \\vec{B} = |A||B|\\sin\\theta \\, \\hat{n}"
        ],
        "keywords": [
          "벡터",
          "스칼라",
          "내적",
          "외적"
        ]
      },
      {
        "title": "기울기, 발산, 회전",
        "content": "<p>벡터 미분연산자 <b>나블라(∇)</b>를 이용하여 장(field)의 변화를 표현합니다.</p><table><tr><th>연산</th><th>기호</th><th>대상→결과</th><th>물리적 의미</th></tr><tr><td>기울기(gradient)</td><td>grad V = ∇V</td><td>스칼라→벡터</td><td>전위 변화율(전계)</td></tr><tr><td>발산(divergence)</td><td>div E = ∇·E</td><td>벡터→스칼라</td><td>단위체적당 발산량(전하밀도)</td></tr><tr><td>회전(curl)</td><td>rot H = ∇×H</td><td>벡터→벡터</td><td>소용돌이 정도(전류밀도)</td></tr></table><p>가우스 정리(발산정리)와 스토크스 정리는 면적분과 체적/선적분을 연결합니다.</p>",
        "formulas": [
          "E = -\\nabla V",
          "\\nabla \\cdot \\vec{D} = \\rho",
          "\\nabla \\times \\vec{H} = \\vec{J}",
          "\\oint_S \\vec{A}\\cdot d\\vec{S} = \\int_V (\\nabla \\cdot \\vec{A})\\,dv"
        ],
        "keywords": [
          "기울기",
          "발산",
          "회전",
          "가우스정리",
          "스토크스정리"
        ]
      },
      {
        "title": "쿨롱의 법칙",
        "content": "<p>두 점전하 사이에 작용하는 힘은 전하량의 곱에 비례하고 거리의 제곱에 반비례합니다.</p><ul><li>같은 부호: 반발력(척력), 다른 부호: 인력</li><li>진공(공기) 중의 유전율: ε₀ = 8.855×10⁻¹² F/m</li><li>비례상수 k = 1/(4πε₀) ≈ 9×10⁹</li></ul><svg viewBox='0 0 300 100' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='50' r='15' fill='#dc2626'/><text x='55' y='55' fill='white'>+Q1</text><circle cx='240' cy='50' r='15' fill='#dc2626'/><text x='232' y='55' fill='white'>+Q2</text><line x1='80' y1='50' x2='120' y2='50' stroke='#333' stroke-width='2' marker-end='url(#a2)'/><line x1='220' y1='50' x2='180' y2='50' stroke='#333' stroke-width='2' marker-end='url(#a2)'/><defs><marker id='a2' markerWidth='10' markerHeight='10' refX='5' refY='5' orient='auto'><path d='M0,0 L10,5 L0,10 Z' fill='#333'/></marker></defs><text x='140' y='30' font-size='12'>r</text></svg>",
        "formulas": [
          "F = \\frac{Q_1 Q_2}{4\\pi\\varepsilon_0 r^2} = 9\\times10^9 \\frac{Q_1 Q_2}{r^2}\\,[N]"
        ],
        "keywords": [
          "쿨롱의법칙",
          "유전율",
          "정전력"
        ]
      },
      {
        "title": "전계의 세기",
        "content": "<p>전계(전장)의 세기는 단위 정전하(+1C)가 받는 힘으로 정의됩니다.</p><ul><li>점전하에 의한 전계는 전하로부터 방사상으로 뻗어나감</li><li>전계의 단위: V/m 또는 N/C</li><li>여러 전하가 있을 때는 각 전하에 의한 전계를 벡터 합(중첩의 원리)으로 계산</li></ul>",
        "formulas": [
          "E = \\frac{F}{Q} = \\frac{Q}{4\\pi\\varepsilon_0 r^2}\\,[V/m]",
          "\\vec{F} = Q\\vec{E}"
        ],
        "keywords": [
          "전계",
          "전장",
          "중첩의원리"
        ]
      },
      {
        "title": "전기력선의 성질",
        "content": "<p>전기력선은 전계를 시각적으로 표현하는 가상의 선입니다.</p><ul><li>정(+)전하에서 나와 부(−)전하로 들어감</li><li>전기력선의 접선 방향이 그 점에서의 전계 방향</li><li>전기력선은 서로 교차하지 않음</li><li>도체 표면에 수직으로 출입</li><li>도체 내부에는 전기력선이 없음(전계=0)</li><li>Q[C]에서 나오는 전기력선의 수: Q/ε₀ 개</li></ul><img src=\"images/전기자기학/05.jpg\" alt=\"막대자석 주위 철가루가 자기력선(자계) 패턴을 따라 배열된 실제 사진 - 전기력선과 유사한 개념을 시각적으로 보여줌 (저작자: Berndt Meyer, 출처: Wikimedia Commons, 라이선스: CC BY-SA 3.0)\" style=\"max-width:100%;border-radius:8px;margin-top:1rem;\">",
        "formulas": [
          "N = \\frac{Q}{\\varepsilon_0}"
        ],
        "keywords": [
          "전기력선",
          "전기력선의성질"
        ]
      },
      {
        "title": "가우스의 법칙",
        "content": "<p>임의의 폐곡면을 통과하는 전기력선의 총수는 그 폐곡면 내부 전하량의 1/ε₀ 배입니다.</p><ul><li>대칭성이 좋은 전하 분포에서 전계를 쉽게 구할 수 있음</li><li>적분형과 미분형(맥스웰 방정식 중 하나)이 있음</li></ul>",
        "formulas": [
          "\\oint_S \\vec{E}\\cdot d\\vec{S} = \\frac{Q}{\\varepsilon_0}",
          "\\nabla \\cdot \\vec{E} = \\frac{\\rho}{\\varepsilon_0}"
        ],
        "keywords": [
          "가우스법칙",
          "폐곡면"
        ]
      },
      {
        "title": "가우스 법칙의 응용 - 구도체",
        "content": "<p>반지름 a인 대전 구도체(전하 Q)의 전계 분포:</p><table><tr><th>위치</th><th>전계</th></tr><tr><td>구 외부 (r>a)</td><td>E = Q/(4πε₀r²)</td></tr><tr><td>구 표면 (r=a)</td><td>E = Q/(4πε₀a²)</td></tr><tr><td>구 내부 (r&lt;a), 도체인 경우</td><td>E = 0</td></tr></table><p>만약 전하가 구 전체에 균일하게 분포된 절연체라면 내부는 r에 비례하여 증가합니다.</p>",
        "formulas": [
          "E_{out} = \\frac{Q}{4\\pi\\varepsilon_0 r^2}",
          "E_{in}(\\text{균일분포}) = \\frac{Qr}{4\\pi\\varepsilon_0 a^3}"
        ],
        "keywords": [
          "구도체",
          "가우스응용"
        ]
      },
      {
        "title": "가우스 법칙의 응용 - 원통, 평면",
        "content": "<p><b>무한 직선(원통) 도체</b>: 선전하밀도 λ[C/m]일 때, 축으로부터 거리 r에서의 전계</p><p><b>무한 평면 도체</b>: 면전하밀도 σ[C/m²]일 때</p><ul><li>도체 표면(한쪽만 전기력선): E = σ/ε₀</li><li>절연체 평면(양쪽 대칭): E = σ/(2ε₀)</li></ul>",
        "formulas": [
          "E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}",
          "E_{도체표면} = \\frac{\\sigma}{\\varepsilon_0}",
          "E_{평면판} = \\frac{\\sigma}{2\\varepsilon_0}"
        ],
        "keywords": [
          "원통도체",
          "평면도체",
          "선전하밀도",
          "면전하밀도"
        ]
      },
      {
        "title": "전위와 전위차",
        "content": "<p>전위는 단위 정전하를 무한원점에서 그 점까지 이동시키는 데 필요한 일입니다.</p><ul><li>전위는 스칼라량, 단위는 V(volt)</li><li>전계가 강한 곳에서 약한 곳(고전위→저전위)으로 전하 이동 시 일을 함</li><li>전위차 = 두 점 사이 전위의 차</li></ul>",
        "formulas": [
          "V = -\\int_\\infty^r \\vec{E}\\cdot d\\vec{l} = \\frac{Q}{4\\pi\\varepsilon_0 r}",
          "V_{AB} = V_A - V_B = -\\int_B^A \\vec{E}\\cdot d\\vec{l}"
        ],
        "keywords": [
          "전위",
          "전위차"
        ]
      },
      {
        "title": "등전위면",
        "content": "<p>전위가 같은 점들을 이은 면을 등전위면이라 합니다.</p><ul><li>등전위면과 전기력선은 항상 수직으로 교차</li><li>등전위면끼리는 서로 교차하지 않음</li><li>등전위면에서 전하 이동 시 일 = 0 (전계와 이동방향이 수직이므로)</li><li>전기력선이 조밀할수록 등전위면 간격이 좁고 전계가 강함</li></ul><svg viewBox='0 0 200 150' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='75' r='10' fill='#dc2626'/><circle cx='100' cy='75' r='30' fill='none' stroke='#16a34a' stroke-dasharray='4' /><circle cx='100' cy='75' r='55' fill='none' stroke='#16a34a' stroke-dasharray='4'/><line x1='100' y1='75' x2='100' y2='10' stroke='#2563eb'/><line x1='100' y1='75' x2='35' y2='75' stroke='#2563eb'/><line x1='100' y1='75' x2='165' y2='75' stroke='#2563eb'/></svg>",
        "formulas": [],
        "keywords": [
          "등전위면",
          "전기력선수직"
        ]
      },
      {
        "title": "전기 쌍극자",
        "content": "<p>크기가 같고 부호가 반대인 두 전하 +Q, −Q가 매우 짧은 거리 δ만큼 떨어져 있는 것을 전기 쌍극자라고 합니다.</p><ul><li>전기 쌍극자 모멘트: M = Qδ [C·m]</li><li>전위는 거리의 제곱에 반비례(단극자는 1승에 반비례보다 빠르게 감소)</li><li>전계는 거리의 세제곱에 반비례</li></ul>",
        "formulas": [
          "M = Q\\delta",
          "V = \\frac{M\\cos\\theta}{4\\pi\\varepsilon_0 r^2}",
          "E = \\frac{M}{4\\pi\\varepsilon_0 r^3}\\sqrt{1+3\\cos^2\\theta}"
        ],
        "keywords": [
          "전기쌍극자",
          "쌍극자모멘트"
        ]
      },
      {
        "title": "도체계와 정전용량 개념",
        "content": "<p>정전용량 C는 도체에 전하를 얼마나 저장할 수 있는지를 나타내는 양입니다.</p><ul><li>C = Q/V, 단위: F(패럿)</li><li>도체의 모양과 크기, 주위 유전체의 유전율에 의해 결정 (전하량/전압에 무관)</li><li>고립 구도체의 정전용량: C = 4πε₀a (a는 반지름)</li></ul>",
        "formulas": [
          "C = \\frac{Q}{V}\\,[F]",
          "C_{구} = 4\\pi\\varepsilon_0 a"
        ],
        "keywords": [
          "정전용량",
          "콘덴서기초"
        ]
      },
      {
        "title": "평행판 콘덴서",
        "content": "<p>두 평행 도체판 사이에 유전체를 채운 콘덴서입니다.</p><ul><li>극판 면적 S, 간격 d, 유전율 ε</li><li>정전용량은 면적에 비례, 간격에 반비례</li></ul><svg viewBox='0 0 200 120' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='20' width='120' height='10' fill='#2563eb'/><rect x='40' y='90' width='120' height='10' fill='#dc2626'/><line x1='60' y1='30' x2='60' y2='90' stroke='#333' marker-end='url(#a3)'/><line x1='100' y1='30' x2='100' y2='90' stroke='#333' marker-end='url(#a3)'/><line x1='140' y1='30' x2='140' y2='90' stroke='#333' marker-end='url(#a3)'/><defs><marker id='a3' markerWidth='8' markerHeight='8' refX='4' refY='4' orient='auto'><path d='M0,0 L8,4 L0,8 Z' fill='#333'/></marker></defs><text x='165' y='60' font-size='12'>d</text></svg>",
        "formulas": [
          "C = \\frac{\\varepsilon S}{d}\\,[F]"
        ],
        "keywords": [
          "평행판콘덴서"
        ]
      },
      {
        "title": "구형 및 동심원통 콘덴서",
        "content": "<p><b>동심구 콘덴서</b>: 내구 반지름 a, 외구 반지름 b</p><p><b>동축 원통(케이블) 콘덴서</b>: 내반지름 a, 외반지름 b, 길이 l</p>",
        "formulas": [
          "C_{동심구} = \\frac{4\\pi\\varepsilon ab}{b-a}",
          "C_{동축원통} = \\frac{2\\pi\\varepsilon l}{\\ln(b/a)}"
        ],
        "keywords": [
          "동심구콘덴서",
          "동축원통콘덴서"
        ]
      },
      {
        "title": "콘덴서의 직렬 접속",
        "content": "<p>콘덴서를 직렬로 연결하면 합성 정전용량의 역수가 각 정전용량 역수의 합이 됩니다 (저항의 병렬 접속과 유사).</p><ul><li>각 콘덴서에 걸리는 전하량은 동일</li><li>전압은 정전용량에 반비례하여 분배</li></ul>",
        "formulas": [
          "\\frac{1}{C} = \\frac{1}{C_1}+\\frac{1}{C_2}+\\cdots",
          "V_1 = \\frac{C_2}{C_1+C_2}V"
        ],
        "keywords": [
          "콘덴서직렬접속"
        ]
      },
      {
        "title": "콘덴서의 병렬 접속",
        "content": "<p>콘덴서를 병렬로 연결하면 합성 정전용량은 각 정전용량의 합입니다 (저항의 직렬 접속과 유사).</p><ul><li>각 콘덴서에 걸리는 전압은 동일</li><li>전하량은 정전용량에 비례하여 분배</li></ul>",
        "formulas": [
          "C = C_1+C_2+\\cdots",
          "Q_1 = \\frac{C_1}{C_1+C_2}Q"
        ],
        "keywords": [
          "콘덴서병렬접속"
        ]
      },
      {
        "title": "정전에너지",
        "content": "<p>콘덴서에 전하를 충전하는 과정에서 저장되는 에너지입니다.</p><ul><li>에너지는 전계 내에 분포되어 있다고 볼 수 있음 (에너지 밀도 개념)</li><li>단위체적당 에너지: w = (1/2)εE²</li></ul>",
        "formulas": [
          "W = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C} = \\frac{1}{2}QV",
          "w = \\frac{1}{2}\\varepsilon E^2\\,[J/m^3]"
        ],
        "keywords": [
          "정전에너지",
          "에너지밀도"
        ]
      },
      {
        "title": "유전체와 분극",
        "content": "<p>유전체(부도체)에 전계를 가하면 내부 원자/분자가 미세하게 변형되어 분극이 발생합니다.</p><ul><li>분극의 세기 P: 단위체적당 쌍극자 모멘트</li><li>유전체 내부에서는 분극에 의해 전계가 다소 감소함</li><li>비유전율 εs = ε/ε₀ (진공은 1, 일반 유전체는 1보다 큼)</li></ul>",
        "formulas": [
          "P = \\varepsilon_0(\\varepsilon_s - 1)E",
          "D = \\varepsilon_0 E + P = \\varepsilon_0\\varepsilon_s E"
        ],
        "keywords": [
          "유전체",
          "분극",
          "비유전율"
        ]
      },
      {
        "title": "전속밀도와 경계조건",
        "content": "<p>전속밀도 D는 매질에 무관하게 전하량에만 의존하는 양입니다.</p><ul><li>서로 다른 유전체 경계면에서:<br>① 전속밀도의 법선(수직) 성분은 연속 (D1n = D2n)<br>② 전계의 접선(수평) 성분은 연속 (E1t = E2t)</li><li>굴절 법칙: 유전율이 큰 쪽으로 전기력선이 굴절(법선에서 멀어짐)</li></ul>",
        "formulas": [
          "D = \\varepsilon E",
          "D_{1n}=D_{2n}",
          "E_{1t}=E_{2t}",
          "\\frac{\\tan\\theta_1}{\\tan\\theta_2} = \\frac{\\varepsilon_1}{\\varepsilon_2}"
        ],
        "keywords": [
          "전속밀도",
          "경계조건",
          "굴절법칙"
        ]
      },
      {
        "title": "영상법 - 접지 도체와 점전하",
        "content": "<p>무한 평면 접지 도체 근처에 점전하가 있을 때, 도체 대신 반대 부호의 가상 전하(영상전하)로 치환하여 전계를 계산하는 방법입니다.</p><ul><li>접지 도체면으로부터 거리 h에 +Q가 있으면, 영상전하는 대칭 위치에 −Q</li><li>도체 표면에 유도되는 힘은 항상 흡인력(인력)</li></ul><svg viewBox='0 0 200 140' xmlns='http://www.w3.org/2000/svg'><rect x='0' y='68' width='200' height='6' fill='#555'/><circle cx='100' cy='30' r='10' fill='#dc2626'/><text x='95' y='35' fill='white' font-size='10'>+Q</text><circle cx='100' cy='110' r='10' fill='#2563eb' fill-opacity='0.5' stroke='#2563eb' stroke-dasharray='3'/><text x='90' y='115' font-size='10'>-Q(영상)</text></svg>",
        "formulas": [
          "F = -\\frac{Q^2}{4\\pi\\varepsilon_0(2h)^2}"
        ],
        "keywords": [
          "영상법",
          "접지도체",
          "영상전하"
        ]
      },
      {
        "title": "전류와 옴의 법칙(미분형)",
        "content": "<p>전류밀도 J는 단위 단면적당 흐르는 전류입니다.</p><ul><li>도전율 k(또는 σ)와 전계의 곱으로 표현되는 미분형 옴의 법칙</li><li>저항률(고유저항) ρ = 1/k</li></ul>",
        "formulas": [
          "J = kE = \\frac{E}{\\rho}\\,[A/m^2]",
          "I = \\int_S \\vec{J}\\cdot d\\vec{S}"
        ],
        "keywords": [
          "전류밀도",
          "옴의법칙미분형",
          "도전율"
        ]
      },
      {
        "title": "저항과 정전용량의 관계",
        "content": "<p>같은 형태의 도체에서 저항 R과 정전용량 C는 서로 반비례 관계를 가지며, 그 곱은 매질의 특성으로 결정됩니다.</p><ul><li>이 관계를 이용하면 정전용량을 알 때 저항을 쉽게 구할 수 있음</li></ul>",
        "formulas": [
          "RC = \\rho\\varepsilon = \\frac{\\varepsilon}{k}",
          "R = \\frac{\\rho l}{S}"
        ],
        "keywords": [
          "저항",
          "정전용량관계",
          "고유저항"
        ]
      },
      {
        "title": "줄의 법칙과 전력",
        "content": "<p>저항에 전류가 흐를 때 열이 발생하는 현상을 줄열이라고 합니다.</p><ul><li>단위 시간당 발생하는 열에너지가 전력(P)</li><li>전력량은 전력을 시간에 대해 적분한 값</li></ul>",
        "formulas": [
          "P = I^2R = \\frac{V^2}{R} = VI\\,[W]",
          "H = 0.24 I^2 R t\\,[cal]"
        ],
        "keywords": [
          "줄의법칙",
          "전력",
          "줄열"
        ]
      },
      {
        "title": "비오-사바르 법칙",
        "content": "<p>전류가 흐르는 도선 주위에 생기는 자계를 구하는 기본 법칙입니다.</p><ul><li>미소 전류요소 Idl에 의해 거리 r만큼 떨어진 점에 생기는 자계 dH를 계산</li><li>자계의 방향은 전류 방향과 관측점 방향의 외적으로 결정(오른나사 법칙)</li></ul>",
        "formulas": [
          "dH = \\frac{I\\,dl \\sin\\theta}{4\\pi r^2}\\,[AT/m]"
        ],
        "keywords": [
          "비오사바르법칙",
          "자계"
        ]
      },
      {
        "title": "앙페르의 법칙(주회적분법칙)",
        "content": "<p>폐회로를 따라 자계를 선적분한 값은 그 폐회로를 관통하는 전류의 총합과 같습니다.</p><ul><li>대칭성이 좋은 전류 분포에서 자계를 쉽게 구할 수 있음 (가우스 법칙의 자기적 대응)</li><li>오른손 법칙: 엄지가 전류 방향이면 나머지 손가락이 자계 방향</li></ul>",
        "formulas": [
          "\\oint \\vec{H}\\cdot d\\vec{l} = I",
          "\\nabla \\times \\vec{H} = \\vec{J}"
        ],
        "keywords": [
          "앙페르법칙",
          "주회적분법칙",
          "오른손법칙"
        ]
      },
      {
        "title": "무한 직선 도체의 자계",
        "content": "<p>무한히 긴 직선 도체에 전류 I가 흐를 때, 도체로부터 거리 r인 점에서의 자계 세기입니다.</p><ul><li>자계는 도체를 중심으로 동심원 형태로 분포</li><li>거리에 반비례하여 감소</li></ul><svg viewBox='0 0 180 150' xmlns='http://www.w3.org/2000/svg'><line x1='90' y1='10' x2='90' y2='140' stroke='#333' stroke-width='4'/><circle cx='90' cy='75' r='30' fill='none' stroke='#2563eb'/><circle cx='90' cy='75' r='55' fill='none' stroke='#2563eb'/><text x='95' y='15' font-size='11'>I</text></svg>",
        "formulas": [
          "H = \\frac{I}{2\\pi r}\\,[AT/m]"
        ],
        "keywords": [
          "직선도체자계",
          "무한직선"
        ]
      },
      {
        "title": "원형 코일 중심의 자계",
        "content": "<p>반지름 a인 원형 코일(N회 감음)의 중심에서의 자계 세기입니다.</p>",
        "formulas": [
          "H = \\frac{NI}{2a}\\,[AT/m]"
        ],
        "keywords": [
          "원형코일",
          "코일중심자계"
        ]
      },
      {
        "title": "솔레노이드와 환상 솔레노이드",
        "content": "<p><b>무한장 솔레노이드</b>: 내부는 균일한 자계, 외부는 자계 0</p><p><b>환상 솔레노이드(토로이드)</b>: 자속이 외부로 누설되지 않아 효율적</p><ul><li>n: 단위 길이당 권수, N: 전체 권수, l: 평균 자로 길이</li></ul><img src=\"images/전기자기학/28.gif\" alt=\"솔레노이드 내부/외부 자기장 분포 애니메이션 - 전류가 흐를 때 내부에 균일한 자계가 형성되는 원리를 시각화 (저작자: Geek3, 출처: Wikimedia Commons, 라이선스: CC BY-SA 4.0)\" style=\"max-width:100%;border-radius:8px;margin-top:1rem;\">",
        "formulas": [
          "H_{솔레노이드} = nI\\,[AT/m]",
          "H_{환상솔레노이드} = \\frac{NI}{2\\pi a} = \\frac{NI}{l}"
        ],
        "keywords": [
          "솔레노이드",
          "환상솔레노이드",
          "토로이드"
        ]
      },
      {
        "title": "자성체의 종류와 투자율",
        "content": "<table><tr><th>구분</th><th>비투자율 μs</th><th>예</th></tr><tr><td>상자성체</td><td>μs&gt;1 (약간 큼)</td><td>알루미늄, 백금</td></tr><tr><td>반자성체(역자성체)</td><td>μs&lt;1 (약간 작음)</td><td>구리, 비스무트</td></tr><tr><td>강자성체</td><td>μs≫1 (매우 큼)</td><td>철, 니켈, 코발트</td></tr></table><p>투자율 μ = μ₀μs, 진공의 투자율 μ₀ = 4π×10⁻⁷ H/m</p>",
        "formulas": [
          "\\mu = \\mu_0\\mu_s",
          "B = \\mu H"
        ],
        "keywords": [
          "자성체",
          "투자율",
          "강자성체",
          "상자성체"
        ]
      },
      {
        "title": "자기회로의 옴의 법칙",
        "content": "<p>자기회로는 전기회로와 유사하게 해석할 수 있습니다 (기자력-전압, 자속-전류, 자기저항-전기저항 대응).</p><table><tr><th>전기회로</th><th>자기회로</th></tr><tr><td>기전력 V</td><td>기자력 NI</td></tr><tr><td>전류 I</td><td>자속 Φ</td></tr><tr><td>저항 R=l/(kS)</td><td>자기저항 Rm=l/(μS)</td></tr></table>",
        "formulas": [
          "\\Phi = \\frac{NI}{R_m}",
          "R_m = \\frac{l}{\\mu S}"
        ],
        "keywords": [
          "자기회로",
          "자기저항",
          "기자력"
        ]
      },
      {
        "title": "전자유도 - 패러데이 법칙",
        "content": "<p>코일을 관통하는 자속이 시간에 따라 변화하면 코일에 기전력이 유도됩니다.</p><ul><li>유도기전력의 크기는 자속의 시간 변화율과 코일 권수에 비례</li><li>(−)부호는 렌츠의 법칙에 의한 방향을 의미</li></ul><img src=\"images/전기자기학/31.gif\" alt=\"솔레노이드의 변화하는 자기장이 옆의 도선 고리에 전류를 유도하는 전자유도 애니메이션 (저작자: Ponor, 출처: Wikimedia Commons, 라이선스: CC BY-SA 4.0)\" style=\"max-width:100%;border-radius:8px;margin-top:1rem;\">",
        "formulas": [
          "e = -N\\frac{d\\phi}{dt}\\,[V]"
        ],
        "keywords": [
          "전자유도",
          "패러데이법칙",
          "유도기전력"
        ]
      },
      {
        "title": "렌츠의 법칙",
        "content": "<p>유도기전력은 자신이 만드는 유도전류가 원래 자속 변화를 방해하는 방향으로 발생합니다.</p><ul><li>'변화를 싫어하는' 법칙 - 에너지 보존 법칙의 한 표현</li><li>자속이 증가하면 이를 감소시키려는 방향, 감소하면 증가시키려는 방향으로 유도전류 발생</li></ul>",
        "formulas": [],
        "keywords": [
          "렌츠의법칙",
          "유도전류방향"
        ]
      },
      {
        "title": "자기인덕턴스",
        "content": "<p>코일 자신에 흐르는 전류 변화에 의해 코일 자신에 유도되는 기전력과 관련된 상수입니다.</p><ul><li>단위: H(헨리)</li><li>코일에 저장되는 자기에너지도 인덕턴스로 표현 가능</li></ul><img src=\"images/전기자기학/33.jpg\" alt=\"다양한 형태의 인덕터(코일) 실물 (출처: Wikimedia Commons)\" style=\"max-width:100%;border-radius:8px;margin-top:1rem;\">",
        "formulas": [
          "e = -L\\frac{dI}{dt}",
          "L = \\frac{N\\phi}{I}",
          "W = \\frac{1}{2}LI^2\\,[J]"
        ],
        "keywords": [
          "자기인덕턴스",
          "자기에너지"
        ]
      },
      {
        "title": "상호인덕턴스",
        "content": "<p>두 코일이 자기적으로 결합되어 있을 때, 한 코일의 전류 변화가 다른 코일에 기전력을 유도하는 정도입니다.</p><ul><li>결합계수 k: 0(무결합)~1(완전결합) 사이의 값</li><li>k=1일 때 M=√(L1L2) (누설자속이 전혀 없는 이상적 결합)</li></ul>",
        "formulas": [
          "e_2 = -M\\frac{dI_1}{dt}",
          "M = k\\sqrt{L_1 L_2}"
        ],
        "keywords": [
          "상호인덕턴스",
          "결합계수"
        ]
      },
      {
        "title": "환상 솔레노이드의 인덕턴스",
        "content": "<p>단면적 S, 평균 자로 길이 l, 권수 N인 환상 솔레노이드의 자기인덕턴스입니다.</p>",
        "formulas": [
          "L = \\frac{\\mu S N^2}{l} = \\frac{\\mu S N^2}{2\\pi a}"
        ],
        "keywords": [
          "환상솔레노이드인덕턴스"
        ]
      },
      {
        "title": "동축케이블의 인덕턴스",
        "content": "<p>내도체 반지름 a, 외도체 반지름 b, 길이 l인 동축케이블 단위길이당 자기인덕턴스(외부 자속만 고려)입니다.</p>",
        "formulas": [
          "L = \\frac{\\mu l}{2\\pi}\\ln\\frac{b}{a}\\,[H]"
        ],
        "keywords": [
          "동축케이블",
          "인덕턴스계산"
        ]
      },
      {
        "title": "전자력 - 플레밍의 법칙",
        "content": "<p>자계 내에서 전류가 흐르는 도체가 받는 힘(전자력)의 방향을 결정하는 법칙입니다.</p><ul><li><b>플레밍의 왼손 법칙</b>: 전동기 원리 - 엄지(힘), 검지(자계), 중지(전류)</li><li><b>플레밍의 오른손 법칙</b>: 발전기 원리 - 엄지(운동), 검지(자계), 중지(유도기전력)</li></ul><img src=\"images/전기자기학/37.gif\" alt=\"자기장 속에서 코일이 회전하며 전자기 유도로 교류 기전력을 발생시키는 발전기 원리 애니메이션 (저작자: MikeRun, 출처: Wikimedia Commons, 라이선스: CC BY-SA 4.0)\" style=\"max-width:100%;border-radius:8px;margin-top:1rem;\">",
        "formulas": [
          "F = BIl\\sin\\theta\\,[N]"
        ],
        "keywords": [
          "플레밍의왼손법칙",
          "플레밍의오른손법칙",
          "전자력"
        ]
      },
      {
        "title": "로렌츠 힘",
        "content": "<p>자계 중을 움직이는 하전입자가 받는 힘입니다. 전계에 의한 힘과 자계에 의한 힘을 모두 포함합니다.</p><ul><li>자계에 의한 힘은 속도와 자계 모두에 수직 방향으로 작용 (원운동의 구심력 역할)</li><li>속도와 자계가 평행하면 자기력은 0</li></ul>",
        "formulas": [
          "\\vec{F} = q\\vec{E} + q\\vec{v}\\times\\vec{B}",
          "F = qvB\\sin\\theta"
        ],
        "keywords": [
          "로렌츠힘",
          "하전입자"
        ]
      },
      {
        "title": "변위전류와 맥스웰 방정식",
        "content": "<p>맥스웰은 시간에 따라 변화하는 전계도 자계를 만든다는 것을 발견하고 이를 '변위전류'라 하였습니다.</p><ul><li>변위전류밀도: Jd = ∂D/∂t</li><li>이를 통해 전자기파의 존재를 이론적으로 예측</li></ul><p><b>맥스웰 방정식 4개 (요약)</b></p><table><tr><td>∇·D = ρ</td><td>가우스 법칙(전기)</td></tr><tr><td>∇·B = 0</td><td>자기단극자 없음</td></tr><tr><td>∇×E = -∂B/∂t</td><td>패러데이 법칙</td></tr><tr><td>∇×H = J + ∂D/∂t</td><td>앙페르-맥스웰 법칙</td></tr></table>",
        "formulas": [
          "J_d = \\frac{\\partial D}{\\partial t}",
          "\\nabla \\times \\vec{H} = \\vec{J} + \\frac{\\partial \\vec{D}}{\\partial t}"
        ],
        "keywords": [
          "변위전류",
          "맥스웰방정식"
        ]
      },
      {
        "title": "전자파의 기초 성질",
        "content": "<p>맥스웰 방정식으로부터 유도되는 전자파(전자기파)의 특성입니다.</p><ul><li>전계와 자계는 서로 수직이며, 진행 방향에도 수직 (횡파)</li><li>진공 중 전파 속도는 빛의 속도와 동일: c ≈ 3×10⁸ m/s</li><li>전자파 임피던스(고유 임피던스): 진공 중 약 377Ω</li></ul>",
        "formulas": [
          "c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}} \\approx 3\\times10^8\\,[m/s]",
          "Z_0 = \\sqrt{\\frac{\\mu_0}{\\varepsilon_0}} \\approx 377\\,[\\Omega]"
        ],
        "keywords": [
          "전자파",
          "고유임피던스",
          "빛의속도"
        ]
      }
    ]
  },
  {
    "subject": "전력공학",
    "slides": [
      {
        "title": "수력발전의 원리",
        "content": "<p>수력발전은 물의 위치에너지를 운동에너지로 변환하여 수차를 돌리고, 수차와 연결된 발전기로 전기에너지를 얻는 발전 방식이다.</p><ul><li>이론출력은 낙차(H)와 유량(Q)에 비례한다.</li><li>실제출력은 수차효율과 발전기효율을 곱하여 계산한다.</li><li>낙차의 종류: 총낙차, 유효낙차(총낙차 - 손실낙차)</li></ul>",
        "formulas": [
          "P = 9.8 QH \\eta_t \\eta_g \\; [kW]",
          "P = 9.8 QH \\; [kW] \\;(\\eta=1\\text{ 일 때 이론출력})"
        ],
        "keywords": [
          "수력발전",
          "낙차",
          "유량",
          "이론출력"
        ]
      },
      {
        "title": "수력발전소의 유량과 저수지",
        "content": "<p>하천 유량은 계절에 따라 변동하므로 이를 관리하기 위한 다양한 유량 개념이 사용된다.</p><table border='1' cellpadding='6'><tr><th>유량 종류</th><th>정의</th></tr><tr><td>갈수량</td><td>1년 365일 중 355일은 이보다 많은 유량</td></tr><tr><td>저수량</td><td>1년 365일 중 275일은 이보다 많은 유량</td></tr><tr><td>평수량</td><td>1년 365일 중 185일은 이보다 많은 유량</td></tr><tr><td>풍수량</td><td>1년 365일 중 95일은 이보다 많은 유량</td></tr></table><p>저수지는 유량을 조절하여 갈수기에도 안정적인 발전을 가능하게 한다.</p>",
        "formulas": [],
        "keywords": [
          "갈수량",
          "저수량",
          "평수량",
          "풍수량",
          "유량조절"
        ]
      },
      {
        "title": "수차의 종류",
        "content": "<p>낙차와 유량 조건에 따라 적합한 수차가 다르다.</p><table border='1' cellpadding='6'><tr><th>수차</th><th>적용 낙차</th><th>특징</th></tr><tr><td>펠턴수차</td><td>고낙차(300m 이상)</td><td>충동수차, 노즐로 물을 분사</td></tr><tr><td>프란시스수차</td><td>중낙차(50~500m)</td><td>반동수차, 가장 널리 사용</td></tr><tr><td>사류수차(데리아수차)</td><td>중낙차</td><td>프란시스와 프로펠러의 중간</td></tr><tr><td>프로펠러수차(카플란수차)</td><td>저낙차(50m 이하)</td><td>날개 각도 조절 가능(카플란)</td></tr></table>",
        "formulas": [],
        "keywords": [
          "펠턴수차",
          "프란시스수차",
          "카플란수차",
          "충동수차",
          "반동수차"
        ]
      },
      {
        "title": "조속기와 캐비테이션",
        "content": "<p><b>조속기(Governor)</b>: 부하 변동에 따라 수차의 유량을 조절하여 회전속도(주파수)를 일정하게 유지하는 장치.</p><p><b>캐비테이션(공동현상)</b>: 유수 중 압력이 낮아져 물이 증발, 기포가 발생했다가 급격히 소멸하며 충격압을 발생시켜 수차 러너를 손상시키는 현상.</p><ul><li>방지대책: 흡출관 높이를 낮춘다, 러너를 두꺼운 내식재료로 제작, 비속도를 너무 크게 잡지 않는다.</li></ul>",
        "formulas": [],
        "keywords": [
          "조속기",
          "캐비테이션",
          "공동현상",
          "비속도"
        ]
      },
      {
        "title": "화력발전의 원리와 열효율",
        "content": "<p>화력발전은 연료의 연소열로 보일러에서 증기를 발생시켜 터빈을 돌리고 발전기를 구동하는 방식이다.</p><p>열효율은 투입한 열량 대비 얻은 전기에너지의 비율로 정의한다.</p>",
        "formulas": [
          "\\eta = \\frac{860W}{mH} \\times 100 \\;[\\%]"
        ],
        "keywords": [
          "화력발전",
          "열효율",
          "보일러",
          "터빈"
        ]
      },
      {
        "title": "랭킨 사이클",
        "content": "<p>랭킨사이클은 화력발전소의 기본 열역학적 사이클로 다음 4단계로 구성된다.</p><ul><li>① 급수펌프에서 단열압축</li><li>② 보일러에서 등압가열(급수 → 증기)</li><li>③ 터빈에서 단열팽창(증기 → 일)</li><li>④ 복수기에서 등압냉각(증기 → 물)</li></ul><p>열효율 향상을 위해 재열사이클, 재생사이클을 함께 적용한다.</p><svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg' style='max-width:100%;height:auto;background:#fff'><rect x='30' y='70' width='70' height='50' fill='none' stroke='#333' stroke-width='2'/><text x='45' y='100' font-size='12'>보일러</text><rect x='160' y='40' width='70' height='50' fill='none' stroke='#333' stroke-width='2'/><text x='170' y='70' font-size='12'>터빈</text><rect x='290' y='70' width='70' height='50' fill='none' stroke='#333' stroke-width='2'/><text x='300' y='100' font-size='12'>복수기</text><rect x='160' y='140' width='70' height='40' fill='none' stroke='#333' stroke-width='2'/><text x='165' y='165' font-size='12'>급수펌프</text><line x1='100' y1='90' x2='160' y2='65' stroke='#333' stroke-width='2' marker-end='url(#arrow)'/><line x1='230' y1='65' x2='290' y2='90' stroke='#333' stroke-width='2' marker-end='url(#arrow)'/><line x1='325' y1='120' x2='195' y2='140' stroke='#333' stroke-width='2' marker-end='url(#arrow)'/><line x1='195' y1='140' x2='65' y2='120' stroke='#333' stroke-width='2' marker-end='url(#arrow)'/><defs><marker id='arrow' markerWidth='8' markerHeight='8' refX='4' refY='4' orient='auto'><path d='M0,0 L8,4 L0,8 z' fill='#333'/></marker></defs></svg>",
        "formulas": [],
        "keywords": [
          "랭킨사이클",
          "재열사이클",
          "재생사이클",
          "복수기"
        ]
      },
      {
        "title": "원자력발전의 원리",
        "content": "<p>원자력발전은 핵분열 연쇄반응에서 발생하는 열을 이용해 증기를 만들어 터빈을 구동하는 방식이다.</p><ul><li>핵연료: 우라늄-235</li><li>감속재: 중성자 속도를 줄여 핵분열 반응 유지 (경수, 중수, 흑연 등)</li><li>냉각재: 노심의 열을 외부로 운반 (경수, 중수, 가스 등)</li><li>제어봉: 중성자를 흡수하여 반응 속도 조절 (붕소, 카드뮴 등)</li></ul><p>대표적 원자로형: 가압수형(PWR), 비등수형(BWR), 중수형(CANDU)</p>",
        "formulas": [],
        "keywords": [
          "원자력발전",
          "핵분열",
          "감속재",
          "냉각재",
          "제어봉",
          "PWR",
          "BWR"
        ]
      },
      {
        "title": "변전소의 역할과 변압기 뱅크",
        "content": "<p>변전소는 전압을 승압/강압하고, 전력 조류를 제어하며 계통을 보호하는 설비이다.</p><p><b>변압기 뱅크(V결선 등)</b>: 단상 변압기를 조합하여 3상 전력을 공급하는 방식.</p><ul><li>△-△결선: 제3고조파 순환, 한 대 고장시 V결선 운전 가능</li><li>Y-Y결선: 중성점 접지 가능하나 제3고조파 문제로 실제 단독 사용 적음</li><li>△-Y, Y-△결선: 위상차 30° 발생, 승압/강압용으로 많이 사용</li><li>V결선: 변압기 2대로 3상 공급, 이용률 약 86.6%</li></ul><img src=\"images/전력공학/08.jpg\" alt=\"420kV급 가스절연개폐장치(GIS)가 설치된 변전소 실내 실제 사진 (저작자: Dingy, 출처: Wikimedia Commons, 라이선스: CC BY-SA 3.0)\" style=\"max-width:100%;border-radius:8px;margin-top:1rem;\">",
        "formulas": [
          "\\text{V결선 출력비} = \\frac{\\sqrt{3}}{2} = 0.866"
        ],
        "keywords": [
          "변전소",
          "변압기뱅크",
          "V결선",
          "Y결선",
          "델타결선"
        ]
      },
      {
        "title": "송전선로의 전선 저항",
        "content": "<p>송전선로의 전기적 특성 중 저항은 전선 재질, 단면적, 길이, 온도에 따라 결정된다.</p><p>실제 송전선은 여러 소선을 꼬아 만든 연선을 사용하며, 표피효과에 의해 교류저항은 직류저항보다 커진다.</p>",
        "formulas": [
          "R = \\rho \\frac{l}{A}"
        ],
        "keywords": [
          "전선저항",
          "표피효과",
          "연선",
          "고유저항"
        ]
      },
      {
        "title": "송전선로의 인덕턴스",
        "content": "<p>송전선로는 전류가 흐를 때 자속을 발생시켜 인덕턴스를 가진다. 단도체 3상 선로의 1선당 작용 인덕턴스는 다음과 같다.</p><p>다도체(복도체) 방식을 사용하면 등가반지름이 커져 인덕턴스가 감소하고 코로나도 억제된다.</p>",
        "formulas": [
          "L = 0.05 + 0.4605 \\log_{10} \\frac{D}{r} \\;[mH/km]"
        ],
        "keywords": [
          "인덕턴스",
          "등가선간거리",
          "복도체",
          "다도체"
        ]
      },
      {
        "title": "송전선로의 정전용량",
        "content": "<p>송전선로의 대지 및 선간 정전용량은 전압 분포와 충전전류에 영향을 준다.</p><ul><li>작용정전용량은 선간 정전용량과 대지 정전용량의 합으로 표현된다.</li><li>충전전류가 크면 페란티 현상, 코로나 발생에 영향을 준다.</li></ul>",
        "formulas": [
          "C = \\frac{0.02413}{\\log_{10}\\frac{D}{r}} \\;[\\mu F/km]",
          "I_c = 2\\pi f C l E"
        ],
        "keywords": [
          "정전용량",
          "충전전류",
          "대지정전용량",
          "선간정전용량"
        ]
      },
      {
        "title": "연가(Transposition)",
        "content": "<p>연가란 3상 송전선로에서 각 상의 전선 배치를 선로 구간마다 순환 교체하여 각 상의 인덕턴스와 정전용량을 평형시키는 방법이다.</p><ul><li>목적: 선로정수 평형, 통신선 유도장해 경감, 소호리액터 접지 시 직렬공진 방지</li><li>일반적으로 1선로를 3등분하여 연가를 실시한다.</li></ul><svg viewBox='0 0 360 120' xmlns='http://www.w3.org/2000/svg' style='max-width:100%;height:auto;background:#fff'><line x1='20' y1='20' x2='120' y2='20' stroke='#c00' stroke-width='3'/><line x1='20' y1='60' x2='120' y2='60' stroke='#0a0' stroke-width='3'/><line x1='20' y1='100' x2='120' y2='100' stroke='#00c' stroke-width='3'/><line x1='120' y1='20' x2='240' y2='60' stroke='#c00' stroke-width='3'/><line x1='120' y1='60' x2='240' y2='100' stroke='#0a0' stroke-width='3'/><line x1='120' y1='100' x2='240' y2='20' stroke='#00c' stroke-width='3'/><line x1='240' y1='60' x2='340' y2='20' stroke='#c00' stroke-width='3'/><line x1='240' y1='100' x2='340' y2='60' stroke='#0a0' stroke-width='3'/><line x1='240' y1='20' x2='340' y2='100' stroke='#00c' stroke-width='3'/><text x='150' y='115' font-size='11'>A구간 → B구간 → C구간 (상 순환)</text></svg>",
        "formulas": [],
        "keywords": [
          "연가",
          "선로정수평형",
          "유도장해경감"
        ]
      },
      {
        "title": "송전선로의 4단자 정수 (ABCD 파라미터)",
        "content": "<p>송전단 전압/전류와 수전단 전압/전류의 관계를 4단자망 정수 A, B, C, D로 표현한다.</p><table border='1' cellpadding='6'><tr><th>정수</th><th>의미</th><th>단위</th></tr><tr><td>A</td><td>전압비</td><td>무차원</td></tr><tr><td>B</td><td>임피던스</td><td>Ω</td></tr><tr><td>C</td><td>어드미턴스</td><td>℧(S)</td></tr><tr><td>D</td><td>전류비</td><td>무차원</td></tr></table><p>단거리 선로에서는 A=D=1, C=0, B=Z 로 근사한다.</p>",
        "formulas": [
          "E_s = AE_r + BI_r",
          "I_s = CE_r + DI_r",
          "AD - BC = 1"
        ],
        "keywords": [
          "4단자정수",
          "ABCD파라미터",
          "송전단",
          "수전단"
        ]
      },
      {
        "title": "단거리·중거리·장거리 송전선로",
        "content": "<table border='1' cellpadding='6'><tr><th>구분</th><th>거리</th><th>등가회로</th><th>특징</th></tr><tr><td>단거리</td><td>약 50km 이하</td><td>집중정수 R,L만 고려</td><td>정전용량 무시</td></tr><tr><td>중거리</td><td>약 50~100km</td><td>T형, π형 회로</td><td>정전용량 집중 고려</td></tr><tr><td>장거리</td><td>100km 이상</td><td>분포정수회로</td><td>특성임피던스, 전파정수 사용</td></tr></table>",
        "formulas": [
          "Z_0 = \\sqrt{\\frac{Z}{Y}}",
          "\\gamma = \\sqrt{ZY}"
        ],
        "keywords": [
          "단거리송전선로",
          "중거리송전선로",
          "장거리송전선로",
          "특성임피던스"
        ]
      },
      {
        "title": "송전전력과 전력원선도",
        "content": "<p>송전단과 수전단 사이의 전력 관계를 원으로 나타낸 것이 전력원선도이며, 이를 통해 최대송전전력, 조상설비 용량, 필요전력 등을 구할 수 있다.</p><p>단거리 송전선로에서 송전전력은 상차각(δ)의 사인함수로 근사된다.</p>",
        "formulas": [
          "P = \\frac{V_s V_r}{X} \\sin\\delta"
        ],
        "keywords": [
          "전력원선도",
          "송전전력",
          "상차각"
        ]
      },
      {
        "title": "안정도 - 정태안정도와 과도안정도",
        "content": "<ul><li><b>정태안정도</b>: 부하가 서서히 증가할 때 계통이 안정적으로 운전을 지속할 수 있는 능력. 정태안정 극한전력은 상차각 90°에서 최대.</li><li><b>과도안정도</b>: 사고, 급격한 부하변동 등 큰 외란이 발생했을 때도 안정을 유지할 수 있는 능력.</li></ul><p><b>안정도 향상 대책</b>: 리액턴스를 작게(복도체 사용, 직렬콘덴서 삽입), 계통 연계, 속응여자방식 채용, 고속차단·고속재폐로 방식 채용, 제동저항기 사용</p>",
        "formulas": [],
        "keywords": [
          "정태안정도",
          "과도안정도",
          "안정도향상대책",
          "직렬콘덴서"
        ]
      },
      {
        "title": "코로나 현상",
        "content": "<p>전선 표면의 전위경도가 임계값(약 30kV/cm, 파열극한전위경도)을 초과하면 전선 주위 공기가 부분적으로 절연파괴되어 빛과 소리를 내는 코로나 현상이 발생한다.</p><ul><li>영향: 코로나손실 발생, 코로나 잡음, 통신선 유도장해, 오존 발생으로 전선 부식</li><li>방지대책: 굵은 전선 사용, 복도체(다도체) 사용, 가선금구 개량</li></ul><img src=\"images/전력공학/17.jpg\" alt=\"500kV 초고압 송전선로 애자련 코로나링 주위에서 발생하는 코로나 방전을 장노출로 촬영한 실제 야간 사진 (저작자: Nitromethane, 출처: Wikimedia Commons, 라이선스: CC BY-SA 3.0)\" style=\"max-width:100%;border-radius:8px;margin-top:1rem;\">",
        "formulas": [
          "P_c = \\frac{241}{\\delta}(f+25)\\sqrt{\\frac{d}{2D}}(E-E_0)^2 \\times 10^{-5}"
        ],
        "keywords": [
          "코로나",
          "파열극한전위경도",
          "코로나손실",
          "복도체"
        ]
      },
      {
        "title": "페란티 현상",
        "content": "<p>페란티 현상은 경부하 또는 무부하 시 선로의 정전용량에 의한 충전전류의 영향으로 수전단 전압이 송전단 전압보다 높아지는 현상이다.</p><ul><li>주로 심야, 경부하 시 장거리 송전선로에서 발생</li><li>방지대책: 수전단에 분로리액터(병렬리액터) 설치, 동기조상기를 부족여자로 운전</li></ul>",
        "formulas": [],
        "keywords": [
          "페란티현상",
          "충전전류",
          "분로리액터",
          "부족여자"
        ]
      },
      {
        "title": "중성점 접지방식 개요",
        "content": "<p>중성점 접지는 지락사고 시 이상전압 억제, 보호계전기 동작 확보 등을 목적으로 한다. 접지방식에 따라 지락전류 크기와 특성이 달라진다.</p><table border='1' cellpadding='6'><tr><th>접지방식</th><th>지락전류</th><th>특징</th></tr><tr><td>비접지</td><td>매우 작음</td><td>저전압 단거리, 저전압 소용량</td></tr><tr><td>직접접지</td><td>최대</td><td>초고압 계통(154kV, 345kV 등)</td></tr><tr><td>저항접지</td><td>중간</td><td>지락전류 제한</td></tr><tr><td>소호리액터접지</td><td>최소(이론상 0)</td><td>66kV 등 일부 계통</td></tr></table>",
        "formulas": [],
        "keywords": [
          "중성점접지",
          "비접지",
          "직접접지",
          "저항접지",
          "소호리액터접지"
        ]
      },
      {
        "title": "직접접지방식",
        "content": "<p>중성점을 직접 도체로 접지하는 방식으로 우리나라 154kV, 345kV, 765kV 등 초고압 송전계통에 사용된다.</p><ul><li>장점: 1선지락시 건전상 전위 상승이 적어(대지전압의 1.3배 이하) 절연레벨을 낮출 수 있음(저감절연), 지락전류가 커서 보호계전기 동작 확실</li><li>단점: 지락전류가 매우 커서 통신선 유도장해가 크고, 차단기 차단용량이 커야 하며, 계통 안정도가 나빠짐</li></ul>",
        "formulas": [],
        "keywords": [
          "직접접지",
          "저감절연",
          "유도장해",
          "차단용량"
        ]
      },
      {
        "title": "비접지방식과 소호리액터접지방식",
        "content": "<p><b>비접지방식</b>: 중성점을 접지하지 않는 방식으로 33kV 이하 저전압 단거리 선로에 사용. 1선지락시 건전상 전압이 √3배까지 상승할 수 있다.</p><p><b>소호리액터접지방식</b>: 중성점에 선로의 대지정전용량과 공진하는 리액터를 설치하여 지락전류를 최소화하는 방식. 아크지락시 자연소멸을 유도한다.</p>",
        "formulas": [
          "\\omega L = \\frac{1}{3\\omega C}"
        ],
        "keywords": [
          "비접지방식",
          "소호리액터",
          "공진",
          "아크지락"
        ]
      },
      {
        "title": "정전유도와 전자유도",
        "content": "<table border='1' cellpadding='6'><tr><th>구분</th><th>원인</th><th>특징</th></tr><tr><td>정전유도장해</td><td>선로와 통신선 사이의 정전용량(상호 커패시턴스)</td><td>영상전압에 비례, 선로 길이와 무관</td></tr><tr><td>전자유도장해</td><td>선로와 통신선 사이의 상호인덕턴스, 영상전류</td><td>영상전류와 선로 평행길이에 비례</td></tr></table><p>전자유도전압은 다음과 같이 근사한다.</p>",
        "formulas": [
          "E_m = -j\\omega M l (3I_0)"
        ],
        "keywords": [
          "정전유도",
          "전자유도",
          "영상전류",
          "영상전압",
          "유도장해"
        ]
      },
      {
        "title": "유도장해 경감대책",
        "content": "<ul><li>전력선측: 연가 실시, 소호리액터 접지 채용, 고속도 차단, 차폐선 설치, 전력선과 통신선의 이격거리 증대</li><li>통신선측: 연피케이블 사용, 배류코일·중화코일 사용, 통신선을 절연변압기로 구분</li></ul>",
        "formulas": [],
        "keywords": [
          "유도장해경감",
          "차폐선",
          "연피케이블",
          "중화코일"
        ]
      },
      {
        "title": "이상전압의 종류",
        "content": "<table border='1' cellpadding='6'><tr><th>구분</th><th>원인</th><th>특징</th></tr><tr><td>뇌서지(외부이상전압)</td><td>직격뢰, 유도뢰</td><td>파고치가 매우 크고 파두시간이 짧음</td></tr><tr><td>개폐서지(내부이상전압)</td><td>차단기 개폐, 고장전류 차단</td><td>뇌서지보다 지속시간이 길 수 있음</td></tr></table><p>초고압 계통에서는 개폐서지가 절연설계의 주요 요인이 되기도 한다.</p>",
        "formulas": [],
        "keywords": [
          "이상전압",
          "뇌서지",
          "개폐서지",
          "직격뢰",
          "유도뢰"
        ]
      },
      {
        "title": "피뢰기와 가공지선",
        "content": "<p><b>피뢰기(LA)</b>: 이상전압이 침입했을 때 방전을 통해 전압을 제한하고, 속류를 신속히 차단하여 기기를 보호하는 장치.</p><ul><li>구비조건: 충격방전개시전압이 낮을 것, 제한전압이 낮을 것, 속류차단능력이 클 것, 상용주파 방전개시전압이 높을 것</li></ul><p><b>가공지선</b>: 철탑 최상부에 설치하여 직격뢰로부터 전력선을 차폐하고, 유도뢰에 대한 정전차폐 효과 및 통신선 유도장해 경감 효과가 있다.</p><svg viewBox='0 0 200 220' xmlns='http://www.w3.org/2000/svg' style='max-width:100%;height:auto;background:#fff'><line x1='100' y1='10' x2='100' y2='200' stroke='#333' stroke-width='4'/><line x1='40' y1='200' x2='160' y2='200' stroke='#333' stroke-width='4'/><line x1='20' y1='30' x2='180' y2='30' stroke='#333' stroke-width='3'/><text x='60' y='22' font-size='11'>가공지선</text><line x1='40' y1='70' x2='160' y2='70' stroke='#666' stroke-width='2'/><circle cx='60' cy='70' r='4' fill='#c00'/><circle cx='100' cy='70' r='4' fill='#c00'/><circle cx='140' cy='70' r='4' fill='#c00'/><text x='60' y='60' font-size='10'>전력선(3상)</text></svg>",
        "formulas": [],
        "keywords": [
          "피뢰기",
          "가공지선",
          "제한전압",
          "속류",
          "정전차폐"
        ]
      },
      {
        "title": "절연협조",
        "content": "<p>절연협조란 계통 내 각 기기의 절연강도를 피뢰기의 제한전압을 기준으로 단계적으로 설정하여, 이상전압으로부터 계통 전체를 경제적이고 합리적으로 보호하는 개념이다.</p><p>절연강도 순서(낮은 것에서 높은 것): <b>피뢰기 제한전압 &lt; 변압기 &lt; 부싱, 차단기 &lt; 선로애자 &lt; 결합콘덴서</b></p>",
        "formulas": [],
        "keywords": [
          "절연협조",
          "기준충격절연강도",
          "BIL"
        ]
      },
      {
        "title": "배전방식의 종류",
        "content": "<table border='1' cellpadding='6'><tr><th>방식</th><th>특징</th></tr><tr><td>방사상식(수지식)</td><td>구조 간단, 경제적이나 정전범위가 넓고 전압강하가 큼</td></tr><tr><td>루프식(환상식)</td><td>양단 전원 공급 가능, 신뢰도 향상, 도시 배전에 적합</td></tr><tr><td>망상식(네트워크식)</td><td>신뢰도 최고, 설비비 고가, 부하밀집 도심지에 적용</td></tr><tr><td>뱅킹방식</td><td>변압기 여러 대를 저압측에서 병렬 연결, 전압강하·손실 경감</td></tr></table>",
        "formulas": [],
        "keywords": [
          "방사상식",
          "루프식",
          "망상식",
          "뱅킹방식"
        ]
      },
      {
        "title": "저압뱅킹방식과 캐스케이딩",
        "content": "<p>저압뱅킹방식은 동일 고압선에 연결된 여러 변압기의 저압측을 상호 연결하여 부하를 공동 분담하는 방식으로, 전압강하와 전력손실을 줄이고 플리커를 경감한다.</p><p><b>캐스케이딩 현상</b>: 뱅킹방식에서 한 변압기가 고장나면 부하가 다른 변압기로 이전되며 과부하가 발생, 연쇄적으로 다른 변압기도 고장나는 현상. 방지를 위해 뱅킹 퓨즈(구분퓨즈)를 설치한다.</p>",
        "formulas": [],
        "keywords": [
          "저압뱅킹",
          "캐스케이딩",
          "구분퓨즈",
          "플리커경감"
        ]
      },
      {
        "title": "배전선로의 전압강하와 전력손실",
        "content": "<p>단상 2선식, 3상 3선식 배전선로의 전압강하 및 전력손실 계산식은 다음과 같다.</p><table border='1' cellpadding='6'><tr><th>방식</th><th>전압강하</th><th>전선량비(동일조건)</th></tr><tr><td>단상2선식</td><td>e = 2I(Rcosθ+Xsinθ)</td><td>100</td></tr><tr><td>3상3선식</td><td>e = √3 I(Rcosθ+Xsinθ)</td><td>75</td></tr><tr><td>단상3선식</td><td>e = I(Rcosθ+Xsinθ)</td><td>37.5</td></tr></table>",
        "formulas": [
          "e = \\frac{P}{V}(R + X\\tan\\theta)",
          "P_l = 3I^2R"
        ],
        "keywords": [
          "전압강하",
          "전력손실",
          "단상2선식",
          "3상3선식",
          "전선량비"
        ]
      },
      {
        "title": "배전선로의 전압조정",
        "content": "<ul><li>주상변압기 탭 조정</li><li>승압기(단권변압기) 설치</li><li>병렬콘덴서 설치로 역률 개선을 통한 전압강하 경감</li><li>SVR(Step Voltage Regulator), 자동전압조정장치(AVR) 사용</li><li>부하시 탭절환 변압기(LTC/ULTC) 사용</li></ul>",
        "formulas": [],
        "keywords": [
          "전압조정",
          "승압기",
          "탭조정",
          "SVR",
          "LTC"
        ]
      },
      {
        "title": "역률개선의 원리",
        "content": "<p>부하의 역률이 낮으면 동일 유효전력을 공급하는 데 필요한 전류가 커져 선로손실과 전압강하가 증가한다. 전력용 콘덴서를 부하와 병렬로 설치하여 무효전력을 보상하면 역률이 개선된다.</p><p>개선 전 역률 cosθ1을 cosθ2로 개선하기 위한 콘덴서 용량은 다음과 같다.</p>",
        "formulas": [
          "Q_c = P(\\tan\\theta_1 - \\tan\\theta_2)",
          "Q_c = P\\left(\\frac{\\sqrt{1-\\cos^2\\theta_1}}{\\cos\\theta_1} - \\frac{\\sqrt{1-\\cos^2\\theta_2}}{\\cos\\theta_2}\\right)"
        ],
        "keywords": [
          "역률개선",
          "전력용콘덴서",
          "무효전력보상"
        ]
      },
      {
        "title": "역률개선의 효과",
        "content": "<ul><li>전력손실 감소 (손실은 전류의 제곱에 비례하므로 역률 개선 효과가 큼)</li><li>전압강하 감소</li><li>설비용량의 여유 증가</li><li>전기요금 절감(역률 요금제 적용 시)</li></ul><p>단, 콘덴서를 과보상하면 진상역률이 되어 페란티 현상과 유사한 문제, 계전기 오동작 등이 발생할 수 있어 주의해야 한다.</p>",
        "formulas": [],
        "keywords": [
          "역률개선효과",
          "과보상",
          "진상역률"
        ]
      },
      {
        "title": "단락사고와 %임피던스법",
        "content": "<p>%임피던스법은 발전기, 변압기, 선로 등의 임피던스를 백분율로 환산하여 단락전류 계산을 쉽게 하는 방법이다.</p>",
        "formulas": [
          "\\%Z = \\frac{PZ}{10V^2}",
          "I_s = \\frac{100}{\\%Z}I_n",
          "P_s = \\frac{100}{\\%Z}P_n"
        ],
        "keywords": [
          "%임피던스법",
          "단락전류",
          "단락용량",
          "기준용량"
        ]
      },
      {
        "title": "대칭좌표법과 지락사고 계산",
        "content": "<p>불평형 3상 회로를 정상분, 역상분, 영상분의 대칭 성분으로 분해하여 해석하는 방법이 대칭좌표법이다.</p><ul><li>1선 지락사고: 정상분, 역상분, 영상분 임피던스가 모두 직렬로 관계</li><li>선간단락사고: 정상분, 역상분만 관계(영상분 없음)</li><li>3상단락사고: 정상분만 존재</li></ul>",
        "formulas": [
          "I_0 = I_1 = I_2 = \\frac{E_a}{Z_0+Z_1+Z_2}\\;(\\text{1선지락})",
          "I_a = I_0 + I_1 + I_2"
        ],
        "keywords": [
          "대칭좌표법",
          "정상분",
          "역상분",
          "영상분",
          "1선지락"
        ]
      },
      {
        "title": "보호계전기 - 과전류계전기와 거리계전기",
        "content": "<p><b>과전류계전기(OCR)</b>: 설정값 이상의 전류가 흐를 때 동작하여 과부하 및 단락사고를 검출, 차단기를 트립시킨다.</p><p><b>거리계전기(임피던스계전기)</b>: 전압과 전류의 비(임피던스)를 검출하여 고장점까지의 전기적 거리를 판별, 송전선로 보호에 널리 사용된다.</p>",
        "formulas": [
          "Z = \\frac{V}{I}"
        ],
        "keywords": [
          "과전류계전기",
          "OCR",
          "거리계전기",
          "임피던스계전기"
        ]
      },
      {
        "title": "보호계전기 - 차동계전기와 지락계전기",
        "content": "<p><b>차동계전기</b>: 보호구간 양단의 전류 차이를 검출하여 동작. 변압기, 발전기 등 내부 고장 보호에 사용(비율차동계전기 포함).</p><p><b>지락계전기(GR)</b>: 영상전류를 검출하여 지락사고를 판별. 방향성을 가진 방향지락계전기(DGR)는 고장 방향까지 판별 가능하다.</p>",
        "formulas": [],
        "keywords": [
          "차동계전기",
          "비율차동계전기",
          "지락계전기",
          "방향지락계전기"
        ]
      },
      {
        "title": "차단기의 종류와 소호원리",
        "content": "<table border='1' cellpadding='6'><tr><th>차단기</th><th>소호매질</th><th>특징</th></tr><tr><td>유입차단기(OCB)</td><td>절연유</td><td>대용량, 화재위험</td></tr><tr><td>공기차단기(ABB)</td><td>압축공기</td><td>고속차단, 소음 큼</td></tr><tr><td>가스차단기(GCB)</td><td>SF6가스</td><td>절연내력 우수, 초고압에 사용</td></tr><tr><td>진공차단기(VCB)</td><td>진공</td><td>소형, 배전급에 많이 사용</td></tr><tr><td>기중차단기(ACB)</td><td>대기</td><td>저압 배전반용</td></tr><tr><td>자기차단기(MBB)</td><td>자기력으로 아크 소호</td><td>차단용량 중간</td></tr></table><img src=\"images/전력공학/37.jpeg\" alt=\"세라믹 실드 진공차단기(VCB) 실물 사진 (저작자: Cwalker99, 출처: Wikimedia Commons, 라이선스: CC BY-SA 3.0)\" style=\"max-width:100%;border-radius:8px;margin-top:1rem;\">",
        "formulas": [],
        "keywords": [
          "차단기",
          "GCB",
          "VCB",
          "ACB",
          "OCB",
          "SF6가스"
        ]
      },
      {
        "title": "차단기의 정격차단용량",
        "content": "<p>정격차단용량은 차단기가 안전하게 차단할 수 있는 최대 전력(용량)을 의미하며, 계통의 단락용량 이상이어야 한다.</p>",
        "formulas": [
          "P_s = \\sqrt{3} \\times V_n \\times I_s"
        ],
        "keywords": [
          "정격차단용량",
          "정격전압",
          "정격차단전류"
        ]
      },
      {
        "title": "조상설비 - 동기조상기",
        "content": "<p>동기조상기는 무부하로 운전되는 동기전동기로, 계자전류(여자)를 조정하여 진상 또는 지상 무효전력을 연속적으로 공급/흡수할 수 있다.</p><ul><li>과여자 운전: 진상 무효전력 공급(콘덴서 역할)</li><li>부족여자 운전: 지상 무효전력 흡수(리액터 역할, 페란티 방지)</li><li>단점: 전력용콘덴서에 비해 손실이 크고 설비비가 비쌈</li></ul>",
        "formulas": [],
        "keywords": [
          "동기조상기",
          "과여자",
          "부족여자",
          "무효전력조정"
        ]
      },
      {
        "title": "조상설비 - 전력용콘덴서와 분로리액터",
        "content": "<table border='1' cellpadding='6'><tr><th>설비</th><th>역할</th><th>특징</th></tr><tr><td>전력용콘덴서(SC)</td><td>진상 무효전력 공급(역률개선)</td><td>단계적 조정, 손실 적음, 저렴</td></tr><tr><td>분로리액터(ShR)</td><td>지상 무효전력 흡수(페란티 방지)</td><td>경부하시 충전전류 보상</td></tr><tr><td>직렬콘덴서</td><td>선로 리액턴스 보상</td><td>안정도 향상, 전압강하 경감</td></tr></table><p>동기조상기는 연속적 조정이 가능하나, 콘덴서·리액터는 단계적(개폐) 조정만 가능하다는 차이가 있다.</p>",
        "formulas": [],
        "keywords": [
          "전력용콘덴서",
          "분로리액터",
          "직렬콘덴서",
          "조상설비비교"
        ]
      },
      {
        "title": "송전선로의 지지물 - 철탑과 애자",
        "content": "<p>철탑은 전선을 지지하는 구조물로 강도와 경제성을 고려해 설계되며, 애자는 전선과 철탑을 전기적으로 절연하는 역할을 한다.</p><ul><li>애자의 구비조건: 절연내력이 클 것, 절연저항이 클 것, 기계적 강도가 클 것, 온도 변화에 강할 것</li><li>애자련 섬락 방지를 위해 아킹혼(소호각, 소호환)을 설치한다.</li><li>애자련의 전압분담은 전선에 가까운 애자일수록 최대이다.</li></ul><img src=\"images/전력공학/41.jpg\" alt=\"실제 고압 송전철탑과 송전선로 사진 (저작자: Stefan Andrej Shambora, 출처: Wikimedia Commons, 라이선스: CC BY 2.0)\" style=\"max-width:100%;border-radius:8px;margin-top:1rem;\"><img src=\"images/전력공학/41_2.jpg\" alt=\"750kV급 송전철탑에 설치된 유리 현수애자련 실제 사진 (저작자: Novoklimov, 출처: Wikimedia Commons, 라이선스: CC BY 4.0)\" style=\"max-width:100%;border-radius:8px;margin-top:0.5rem;\">",
        "formulas": [],
        "keywords": [
          "철탑",
          "애자",
          "아킹혼",
          "소호각",
          "전압분담"
        ]
      },
      {
        "title": "지중전선로",
        "content": "<p>지중전선로는 케이블을 지하에 매설하는 방식으로 도시 미관, 재해에 강한 장점이 있으나 건설비가 높고 고장점 발견 및 복구가 어렵다.</p><ul><li>포설방식: 직접매설식, 관로식, 암거식(전력구식)</li><li>케이블 고장점 탐지법: 머레이루프법, 펄스레이더법, 정전용량법</li></ul>",
        "formulas": [],
        "keywords": [
          "지중전선로",
          "직접매설식",
          "관로식",
          "암거식",
          "머레이루프법"
        ]
      },
      {
        "title": "전력계통 종합 요약",
        "content": "<p>전력계통은 발전 → 변전 → 송전 → 배전 → 수용가로 이어지는 흐름을 가지며, 각 단계에서 전압 승압/강압, 계통 보호, 안정도 유지가 핵심 과제이다.</p><ul><li>발전단계: 수력·화력·원자력의 효율적 운전</li><li>송전단계: 선로정수 관리, 안정도 확보, 이상전압 대책</li><li>배전단계: 전압강하·손실 최소화, 역률개선, 신뢰도 확보</li><li>계통 전체: 중성점 접지방식, 보호계전 시스템, 절연협조를 통한 안전 운영</li></ul>",
        "formulas": [],
        "keywords": [
          "전력계통",
          "발전",
          "송전",
          "배전",
          "종합정리"
        ]
      }
    ]
  },
  {
    "subject": "전기기기",
    "slides": [
      {
        "title": "직류기의 원리와 구조",
        "content": "<p>직류발전기는 플레밍의 오른손 법칙에 의해 도체가 자기장 속에서 운동할 때 발생하는 기전력을 이용하며, 정류자(commutator)를 통해 교류 기전력을 직류로 변환한다.</p><ul><li><b>계자(Field)</b>: 자속을 발생시키는 부분 (계자권선 + 계자철심)</li><li><b>전기자(Armature)</b>: 기전력이 유기되는 회전 부분 (전기자권선 + 전기자철심)</li><li><b>정류자(Commutator)</b>: 교류를 직류로 변환</li><li><b>브러시(Brush)</b>: 정류자와 외부 회로를 연결</li></ul><svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='60' width='360' height='80' rx='40' fill='none' stroke='#4a90d9' stroke-width='3'/><circle cx='200' cy='100' r='45' fill='none' stroke='#e07a3f' stroke-width='3'/><text x='200' y='30' text-anchor='middle' font-size='16' fill='#333'>계자(고정자)</text><text x='200' y='105' text-anchor='middle' font-size='14' fill='#333'>전기자(회전자)</text><line x1='245' y1='100' x2='300' y2='100' stroke='#333' stroke-width='2'/><rect x='300' y='90' width='20' height='20' fill='#888'/><text x='340' y='105' font-size='12'>정류자/브러시</text></svg>",
        "formulas": [],
        "keywords": [
          "직류기",
          "계자",
          "전기자",
          "정류자",
          "브러시"
        ]
      },
      {
        "title": "직류발전기의 유기기전력",
        "content": "<p>전기자 도체 1개에서 유기되는 기전력을 바탕으로 전체 유기기전력 공식을 유도한다.</p><ul><li>p: 극수, Z: 전기자 총 도체수, a: 병렬회로수 (파권 a=2, 중권 a=p)</li><li>N: 분당 회전수(rpm), φ: 1극당 자속</li></ul><p>파권은 항상 a=2이며 고전압 저전류용, 중권은 a=p이며 저전압 대전류용에 적합하다.</p>",
        "formulas": [
          "E = \\frac{p Z \\phi N}{60 a}"
        ],
        "keywords": [
          "유기기전력",
          "파권",
          "중권",
          "직류발전기"
        ]
      },
      {
        "title": "전기자 반작용",
        "content": "<p>전기자 전류가 만드는 자속이 계자 자속에 영향을 주는 현상을 전기자 반작용이라 한다.</p><ul><li><b>편자작용</b>: 주자속 분포를 찌그러뜨려 중성축이 이동(발전기는 회전방향, 전동기는 반대방향)</li><li><b>감자작용</b>: 주자속을 감소시켜 유기기전력 저하</li></ul><p><b>방지대책</b>: 보상권선 설치(가장 효과적), 브러시를 새로운 중성축으로 이동, 보극 설치</p>",
        "formulas": [],
        "keywords": [
          "전기자반작용",
          "편자작용",
          "감자작용",
          "보상권선",
          "보극"
        ]
      },
      {
        "title": "정류(Commutation)",
        "content": "<p>정류란 전기자 코일 내 전류의 방향이 브러시를 지나며 바뀌는 과정이다. 정류 불량 시 브러시에서 불꽃(스파킹)이 발생한다.</p><ul><li><b>리액턴스전압</b>: 정류 코일의 자기 인덕턴스로 인해 발생, 정류를 방해</li><li><b>정류 개선법</b>: 보극 설치(전압정류), 탄소브러시 사용(저항정류), 리액턴스 전압을 작게 함</li></ul><p>보극은 전기자 반작용 상쇄와 정류 개선의 두 가지 역할을 동시에 수행한다.</p><img src='images/전기기기/04.jpg' alt='ABB DC 전동기의 정류자와 브러시 실물 사진 (저작자: Christian Kral, 출처: Wikimedia Commons, 라이선스: CC BY 4.0)' style='max-width:100%;border-radius:8px;margin-top:1rem;'>",
        "formulas": [
          "e_L = L\\frac{2I_c}{T_c}"
        ],
        "keywords": [
          "정류",
          "리액턴스전압",
          "보극",
          "스파킹"
        ]
      },
      {
        "title": "직류발전기의 종류 - 타여자",
        "content": "<p>타여자발전기는 계자권선이 전기자와 분리되어 외부 독립 전원(축전지 등)에서 여자전류를 공급받는다.</p><ul><li>부하전류와 관계없이 계자전류 일정 → 전압 조정이 용이</li><li>단자전압: 유기기전력에서 전기자 저항 강하를 뺀 값</li></ul>",
        "formulas": [
          "V = E - I_a R_a"
        ],
        "keywords": [
          "타여자발전기",
          "단자전압"
        ]
      },
      {
        "title": "직류발전기의 종류 - 분권/직권/복권",
        "content": "<table border='1' cellpadding='6' style='border-collapse:collapse;width:100%'><tr style='background:#f0f0f0'><th>종류</th><th>계자권선 연결</th><th>특징</th></tr><tr><td>분권발전기</td><td>전기자와 병렬</td><td>부하 증가 시 단자전압 다소 감소, 정전압 특성</td></tr><tr><td>직권발전기</td><td>전기자와 직렬</td><td>무부하 시 전압 거의 0, 특수 용도 외 거의 사용 안 함</td></tr><tr><td>복권발전기</td><td>직권+분권 혼합</td><td>가동복권(전압 안정), 차동복권(전압 급강하, 정전류 특성)</td></tr></table>",
        "formulas": [],
        "keywords": [
          "분권발전기",
          "직권발전기",
          "복권발전기",
          "가동복권",
          "차동복권"
        ]
      },
      {
        "title": "직류발전기의 특성곡선",
        "content": "<ul><li><b>무부하포화곡선</b>: 계자전류 - 유기기전력 관계 (일정속도)</li><li><b>외부특성곡선</b>: 부하전류 - 단자전압 관계</li><li><b>부하포화곡선</b>: 계자전류 - 단자전압 관계 (정격부하 상태)</li></ul><p>분권발전기는 잔류자기가 없으면 전압을 확립할 수 없으며, 계자저항이 임계저항보다 크면 전압이 확립되지 않는다.</p>",
        "formulas": [],
        "keywords": [
          "무부하포화곡선",
          "외부특성곡선",
          "임계저항",
          "잔류자기"
        ]
      },
      {
        "title": "직류전동기의 원리",
        "content": "<p>직류전동기는 플레밍의 왼손 법칙에 따라 자기장 내 도체에 전류가 흐를 때 발생하는 힘(토크)으로 회전한다. 발전기와 전동기는 구조가 동일하며 가역적으로 사용 가능하다(가역의 원리).</p><p>전동기 회전 시 역기전력이 발생하여 전기자 전류를 제한한다.</p>",
        "formulas": [
          "E_b = V - I_a R_a",
          "I_a = \\frac{V - E_b}{R_a}"
        ],
        "keywords": [
          "직류전동기",
          "역기전력",
          "플레밍왼손법칙"
        ]
      },
      {
        "title": "직류전동기의 토크",
        "content": "<p>전동기의 토크는 자속과 전기자전류에 비례한다. 출력과 회전수로부터 토크를 구할 수도 있다.</p><ul><li>분권전동기: 자속 일정 → 토크는 전기자전류에 비례 (T ∝ I_a)</li><li>직권전동기: 자속이 전류에 비례(포화 전) → 토크는 전류의 제곱에 비례 (T ∝ I_a²)</li></ul>",
        "formulas": [
          "T = \\frac{P}{\\omega} = \\frac{60}{2\\pi N}P",
          "T = k\\phi I_a"
        ],
        "keywords": [
          "토크",
          "분권전동기",
          "직권전동기"
        ]
      },
      {
        "title": "직류전동기의 종류별 특성",
        "content": "<table border='1' cellpadding='6' style='border-collapse:collapse;width:100%'><tr style='background:#f0f0f0'><th>종류</th><th>속도-부하 특성</th><th>용도</th></tr><tr><td>분권전동기</td><td>거의 정속도 특성</td><td>공작기계, 선풍기</td></tr><tr><td>직권전동기</td><td>부하 증가 시 속도 급감(변속도), 무부하 시 위험속도</td><td>전차, 기중기(큰 기동토크 필요 부하)</td></tr><tr><td>가동복권전동기</td><td>분권과 직권 중간 특성</td><td>승강기, 공작기계</td></tr></table><p><b>주의</b>: 직권전동기는 무부하 운전 시 과속(비산)하므로 벨트 구동을 금지하고 반드시 부하와 직결한다.</p>",
        "formulas": [],
        "keywords": [
          "분권전동기",
          "직권전동기",
          "복권전동기",
          "위험속도"
        ]
      },
      {
        "title": "직류전동기의 속도 특성식",
        "content": "<p>직류전동기의 회전속도는 역기전력에 비례하고 자속에 반비례한다. 이 식이 속도제어의 이론적 기초가 된다.</p>",
        "formulas": [
          "N = k\\frac{E_b}{\\phi} = k\\frac{V - I_a R_a}{\\phi}"
        ],
        "keywords": [
          "속도특성식",
          "역기전력",
          "자속"
        ]
      },
      {
        "title": "직류전동기의 속도제어법",
        "content": "<table border='1' cellpadding='6' style='border-collapse:collapse;width:100%'><tr style='background:#f0f0f0'><th>제어법</th><th>원리</th><th>특징</th></tr><tr><td>전압제어법</td><td>공급전압 V 변경 (워드레오나드 방식)</td><td>광범위 속도제어, 효율 좋음, 설비비 큼</td></tr><tr><td>계자제어법</td><td>계자저항으로 자속 φ 조정</td><td>정출력제어, 속도조정범위 좁음</td></tr><tr><td>저항제어법</td><td>전기자 회로에 저항 삽입</td><td>구조 간단하나 효율 낮음(손실 큼)</td></tr></table>",
        "formulas": [],
        "keywords": [
          "전압제어",
          "계자제어",
          "저항제어",
          "워드레오나드"
        ]
      },
      {
        "title": "직류기의 손실과 효율",
        "content": "<ul><li><b>고정손</b>: 철손(히스테리시스손+와류손) + 기계손(마찰손, 풍손)</li><li><b>가변손</b>: 동손(전기자 저항손 등)</li></ul><p>효율이 최대가 되는 조건은 고정손과 가변손이 같을 때이다.</p>",
        "formulas": [
          "\\eta = \\frac{P_{out}}{P_{out}+P_{loss}} \\times 100(\\%)",
          "P_{fixed} = P_{copper}"
        ],
        "keywords": [
          "철손",
          "동손",
          "기계손",
          "최대효율조건"
        ]
      },
      {
        "title": "변압기의 원리와 구조",
        "content": "<p>변압기는 전자유도 작용을 이용하여 교류 전압을 승압 또는 강압하는 정지기기이다.</p><ul><li><b>철심</b>: 규소강판을 성층하여 와류손 감소</li><li><b>1차권선/2차권선</b>: 절연된 두 권선이 철심에 감김</li></ul><img src=\"images/전기기기/14.jpg\" alt=\"변압기 코어 및 권선 형태 실물 사진 (저작자: SpinningSpark, 출처: Wikimedia Commons, 라이선스: CC BY-SA 3.0)\" style=\"max-width:100%;border-radius:8px;margin-top:1rem;\">",
        "formulas": [],
        "keywords": [
          "변압기",
          "전자유도",
          "철심",
          "규소강판"
        ]
      },
      {
        "title": "변압기의 유기기전력과 권수비",
        "content": "<p>1차, 2차 권선에 유기되는 기전력은 권수에 비례하며, 이 비를 권수비(turn ratio)라 한다.</p><ul><li>f: 주파수, N: 권수, φ_m: 최대자속</li><li>권수비 a는 전압비와 같고 전류비의 역수이며 임피던스비의 제곱근이다</li></ul>",
        "formulas": [
          "E_1 = 4.44 f N_1 \\phi_m",
          "E_2 = 4.44 f N_2 \\phi_m",
          "a = \\frac{N_1}{N_2} = \\frac{E_1}{E_2} = \\frac{I_2}{I_1} = \\sqrt{\\frac{Z_1}{Z_2}}"
        ],
        "keywords": [
          "권수비",
          "유기기전력",
          "변압기"
        ]
      },
      {
        "title": "이상변압기와 등가회로",
        "content": "<p>이상변압기는 손실이 없고 누설자속과 여자전류가 0이라고 가정한 이상적 모델이다. 실제 변압기는 여자전류, 누설리액턴스, 저항 손실을 등가회로로 표현한다.</p><ul><li>여자전류 = 철손전류 + 자화전류 (병렬 요소)</li><li>1차, 2차 각각 저항과 누설리액턴스를 직렬로 표현</li><li>2차 임피던스를 1차로 환산하여 하나의 등가회로로 통합 가능</li></ul><svg viewBox='0 0 380 150' xmlns='http://www.w3.org/2000/svg'><line x1='10' y1='50' x2='100' y2='50' stroke='#333' stroke-width='2'/><rect x='40' y='40' width='40' height='20' fill='none' stroke='#4a90d9' stroke-width='2'/><text x='60' y='35' font-size='10' text-anchor='middle'>r1+jx1</text><line x1='100' y1='50' x2='100' y2='110' stroke='#333' stroke-width='2'/><line x1='10' y1='110' x2='100' y2='110' stroke='#333' stroke-width='2'/><circle cx='150' cy='80' r='25' fill='none' stroke='#888' stroke-width='2'/><text x='150' y='84' font-size='10' text-anchor='middle'>여자</text><line x1='100' y1='50' x2='250' y2='50' stroke='#333' stroke-width='2'/><rect x='200' y='40' width='40' height='20' fill='none' stroke='#e07a3f' stroke-width='2'/><text x='220' y='35' font-size='10' text-anchor='middle'>r2'+jx2'</text><line x1='250' y1='50' x2='340' y2='50' stroke='#333' stroke-width='2'/><line x1='100' y1='110' x2='340' y2='110' stroke='#333' stroke-width='2'/><line x1='340' y1='50' x2='340' y2='110' stroke='#333' stroke-width='2'/></svg>",
        "formulas": [],
        "keywords": [
          "등가회로",
          "여자전류",
          "누설리액턴스",
          "이상변압기"
        ]
      },
      {
        "title": "변압기의 여자전류와 여자어드미턴스",
        "content": "<p>여자전류는 무부하 상태에서 자속을 만들기 위해 흐르는 전류로, 철손전류(유효분)와 자화전류(무효분)의 합성이다.</p>",
        "formulas": [
          "I_0 = I_i + jI_m",
          "I_i = \\frac{P_i}{V_1}"
        ],
        "keywords": [
          "여자전류",
          "철손전류",
          "자화전류"
        ]
      },
      {
        "title": "변압기의 전압변동률",
        "content": "<p>전압변동률은 정격부하에서 무부하로 되었을 때 2차 단자전압의 변화 비율을 나타낸다. %저항강하 p와 %리액턴스강하 q, 역률 cosθ를 이용해 근사식으로 계산한다.</p><ul><li>지상역률(뒤짐)에서는 +부호, 진상역률(앞섬)에서는 -부호 사용</li></ul>",
        "formulas": [
          "\\varepsilon = p\\cos\\theta + q\\sin\\theta",
          "\\varepsilon = \\frac{V_{20}-V_{2n}}{V_{2n}}\\times100(\\%)"
        ],
        "keywords": [
          "전압변동률",
          "퍼센트저항강하",
          "퍼센트리액턴스강하"
        ]
      },
      {
        "title": "변압기의 손실과 효율",
        "content": "<ul><li><b>철손(무부하손)</b>: 히스테리시스손 + 와류손, 부하와 무관하게 일정</li><li><b>동손(부하손)</b>: 권선저항에 의한 손실, 부하전류 제곱에 비례</li></ul><p>최대효율 조건은 철손 = 동손일 때이며, 이때 부하율은 다음과 같다.</p>",
        "formulas": [
          "\\eta = \\frac{P\\cos\\theta}{P\\cos\\theta + P_i + P_c}\\times100(\\%)",
          "\\frac{1}{m} = \\sqrt{\\frac{P_i}{P_c}}"
        ],
        "keywords": [
          "철손",
          "동손",
          "최대효율",
          "전일효율"
        ]
      },
      {
        "title": "변압기의 결선법 - Y-Y, Δ-Δ",
        "content": "<table border='1' cellpadding='6' style='border-collapse:collapse;width:100%'><tr style='background:#f0f0f0'><th>결선</th><th>특징</th></tr><tr><td>Y-Y</td><td>중성점 접지 가능, 절연 용이하나 제3고조파 전류가 통신선 유도장해 발생, 중성선 있으면 완화</td></tr><tr><td>Δ-Δ</td><td>제3고조파 순환으로 기전력 왜형 없음, 1대 고장시 V결선 운전 가능, 중성점 접지 불가</td></tr></table><img src=\"images/전기기기/20.jpg\" alt=\"변압기 철심 권선 형태(내철형/외철형) 개략도 (출처: Wikimedia Commons)\" style=\"max-width:100%;border-radius:8px;margin-top:1rem;\"><img src=\"images/전기기기/20_2.gif\" alt=\"변압기 1차·2차 교류 유도 애니메이션 (저작자: ThreePhaseAC, 출처: Wikimedia Commons, 라이선스: CC BY-SA 4.0)\" style=\"max-width:100%;border-radius:8px;margin-top:0.6rem;\">",
        "formulas": [],
        "keywords": [
          "Y-Y결선",
          "Δ-Δ결선",
          "제3고조파",
          "중성점접지"
        ]
      },
      {
        "title": "변압기의 결선법 - Y-Δ, V결선",
        "content": "<ul><li><b>Y-Δ, Δ-Y 결선</b>: 1차 2차 사이에 30° 위상차 발생, 승압/강압용 변전소에 많이 사용, 제3고조파 문제 없음</li><li><b>V결선</b>: 3상 중 1대 고장 시 나머지 2대로 3상 전력 공급, 출력비는 57.7%, 이용률은 86.6%</li></ul>",
        "formulas": [
          "\\text{출력비} = \\frac{\\sqrt{3}}{2\\sqrt{3}} \\times 100 = 57.7(\\%)",
          "\\text{이용률} = \\frac{\\sqrt{3}}{2} \\times 100 = 86.6(\\%)"
        ],
        "keywords": [
          "Y-Δ결선",
          "V결선",
          "출력비",
          "이용률"
        ]
      },
      {
        "title": "변압기의 병렬운전 조건",
        "content": "<ul><li>극성이 같을 것</li><li>권수비(변압비)가 같고 1차, 2차 정격전압이 같을 것</li><li>각 변압기의 %임피던스 강하가 같을 것</li><li>내부저항과 누설리액턴스의 비가 같을 것 (전류를 부하에 비례 분담)</li><li>(3상의 경우) 상회전 방향과 각 변위(위상)가 같을 것</li></ul><p>극성이 다르거나 권수비가 다르면 순환전류가 흘러 권선이 소손될 수 있다.</p>",
        "formulas": [],
        "keywords": [
          "병렬운전",
          "극성",
          "권수비",
          "%임피던스",
          "순환전류"
        ]
      },
      {
        "title": "3상 유도전동기의 회전자계",
        "content": "<p>3상 대칭 전류를 고정자 권선에 흘리면 공간적으로 회전하는 자기장(회전자계)이 발생한다. 이 회전자계가 회전자 도체에 기전력을 유도하여 전동기가 회전한다(아라고 원판의 원리).</p><p>동기속도는 극수와 주파수에 의해 결정된다.</p><img src=\"images/전기기기/23.gif\" alt=\"3상 권선에 의한 회전자계 형성 애니메이션 (저작자: Oliver Wallscheid, 출처: Wikimedia Commons, 라이선스: CC BY 4.0)\" style=\"max-width:100%;border-radius:8px;margin-top:1rem;\"><img src=\"images/전기기기/23_2.gif\" alt=\"농형 유도전동기 회전자계 및 회전자 동작 애니메이션 (저작자: Mtodorov 69, 출처: Wikimedia Commons, 라이선스: CC BY-SA 3.0)\" style=\"max-width:100%;border-radius:8px;margin-top:0.6rem;\">",
        "formulas": [
          "N_s = \\frac{120f}{p}"
        ],
        "keywords": [
          "회전자계",
          "동기속도",
          "아라고원판"
        ]
      },
      {
        "title": "유도전동기의 슬립",
        "content": "<p>슬립은 동기속도와 회전자 속도의 차이를 동기속도에 대한 비율로 나타낸 값이다. 기동 시 슬립 s=1, 무부하에 가까울수록 s→0에 근접한다(완전한 0은 될 수 없음).</p><img src=\"images/전기기기/24.gif\" alt=\"유도전동기 회전자계와 슬립에 의한 회전자 지연 애니메이션 (저작자: BurnsBurnsBurns, 출처: Wikimedia Commons, 라이선스: CC BY 3.0)\" style=\"max-width:100%;border-radius:8px;margin-top:1rem;\"><img src=\"images/전기기기/24_2.jpg\" alt=\"유도전동기 고정자와 농형 회전자 실물 (출처: Wikimedia Commons)\" style=\"max-width:100%;border-radius:8px;margin-top:0.6rem;\">",
        "formulas": [
          "s = \\frac{N_s - N}{N_s}",
          "N = (1-s)N_s"
        ],
        "keywords": [
          "슬립",
          "동기속도",
          "회전속도"
        ]
      },
      {
        "title": "유도전동기의 등가회로",
        "content": "<p>유도전동기는 변압기와 유사하게 1차(고정자), 2차(회전자)의 등가회로로 표현할 수 있다. 2차 회로의 저항을 슬립으로 나누어 표현하면 기계적 출력을 회로적으로 해석할 수 있다.</p><ul><li>2차 등가저항: r2/s = r2 + r2(1-s)/s</li><li>r2(1-s)/s 항이 기계적 출력에 해당하는 부분</li></ul>",
        "formulas": [
          "\\frac{r_2}{s} = r_2 + r_2\\frac{1-s}{s}"
        ],
        "keywords": [
          "등가회로",
          "2차저항",
          "슬립"
        ]
      },
      {
        "title": "유도전동기의 토크-슬립 특성곡선",
        "content": "<p>슬립 s에 따른 토크의 변화를 나타낸 곡선으로, s=1(기동)부터 s=0(동기속도)까지 변화한다.</p><ul><li>기동 시 토크는 상대적으로 작고, 슬립이 어느 정도 값(최대토크 슬립)일 때 토크가 최대(발생 토크, stalling torque)</li><li>최대토크 이후 슬립이 더 커지면(속도 더 감소) 토크는 오히려 감소 → 불안정 영역</li></ul><svg viewBox='0 0 300 180' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='150' x2='280' y2='150' stroke='#333' stroke-width='2'/><line x1='30' y1='150' x2='30' y2='10' stroke='#333' stroke-width='2'/><path d='M30,148 Q80,140 120,60 Q150,20 180,90 Q220,140 280,146' fill='none' stroke='#4a90d9' stroke-width='3'/><text x='150' y='170' text-anchor='middle' font-size='12'>슬립 s (1→0)</text><text x='15' y='80' font-size='12' transform='rotate(-90,15,80)'>토크 T</text></svg>",
        "formulas": [],
        "keywords": [
          "토크-슬립곡선",
          "최대토크",
          "불안정영역"
        ]
      },
      {
        "title": "유도전동기의 비례추이",
        "content": "<p>권선형 유도전동기에서 2차 회로에 저항을 삽입하면 최대토크의 크기는 변하지 않고, 최대토크가 발생하는 슬립만 저항 크기에 비례하여 이동한다. 이를 비례추이라 한다.</p><p>비례추이를 이용해 기동토크 증대, 기동전류 제한, 속도제어(2차저항법)를 할 수 있다. 단, 최대토크의 크기 자체와 출력(효율과 관련된 부분)은 비례추이 하지 않는다.</p>",
        "formulas": [
          "\\frac{r_2}{s_1} = \\frac{r_2 + R}{s_2}"
        ],
        "keywords": [
          "비례추이",
          "권선형유도전동기",
          "2차저항법"
        ]
      },
      {
        "title": "유도전동기의 기동법",
        "content": "<table border='1' cellpadding='6' style='border-collapse:collapse;width:100%'><tr style='background:#f0f0f0'><th>기동법</th><th>적용</th><th>특징</th></tr><tr><td>전전압(직입) 기동</td><td>소용량(5kW 이하)</td><td>구조 간단, 기동전류 큼</td></tr><tr><td>Y-Δ 기동</td><td>5.5~15kW급</td><td>기동전류·기동토크 모두 1/3로 감소</td></tr><tr><td>리액터 기동</td><td>중대용량</td><td>기동전류 제한, 기동토크도 함께 감소</td></tr><tr><td>기동보상기법</td><td>대용량</td><td>3상 단권변압기로 전압을 낮춰 기동</td></tr><tr><td>2차저항 기동법</td><td>권선형</td><td>비례추이 이용, 기동토크 증대 가능</td></tr></table>",
        "formulas": [],
        "keywords": [
          "Y-Δ기동",
          "리액터기동",
          "기동보상기",
          "2차저항기동"
        ]
      },
      {
        "title": "유도전동기의 속도제어법",
        "content": "<ul><li><b>극수변환법</b>: 고정자 권선의 결선을 바꿔 극수(p)를 변경, 단계적 속도제어</li><li><b>주파수제어법</b>: 인버터로 공급주파수를 변경, VVVF 제어로 연속적이고 광범위한 속도제어 (엘리베이터, 전기철도 등)</li><li><b>슬립제어법</b>: 2차저항법(권선형), 2차여자법 등으로 슬립을 조정</li></ul>",
        "formulas": [],
        "keywords": [
          "극수변환법",
          "주파수제어법",
          "VVVF",
          "슬립제어법"
        ]
      },
      {
        "title": "유도전동기의 원선도",
        "content": "<p>원선도(Heyland 원선도)는 무부하시험과 구속시험(拘束試驗) 결과를 바탕으로 전류벡터의 궤적을 원으로 그려 전동기의 특성(역률, 효율, 슬립, 토크 등)을 도식적으로 구하는 방법이다.</p><ul><li>무부하시험: 철손, 여자전류 산정</li><li>구속시험(단락시험): 동손(2차 저항 관련), 임피던스 산정</li></ul>",
        "formulas": [],
        "keywords": [
          "원선도",
          "헤일랜드원선도",
          "무부하시험",
          "구속시험"
        ]
      },
      {
        "title": "유도전동기의 효율과 손실",
        "content": "<p>유도전동기의 2차 입력, 2차 동손, 기계적 출력 사이에는 슬립을 매개로 한 비례관계가 성립한다.</p>",
        "formulas": [
          "P_2 : P_{c2} : P_0 = 1 : s : (1-s)",
          "P_{c2} = sP_2",
          "P_0 = (1-s)P_2"
        ],
        "keywords": [
          "2차입력",
          "2차동손",
          "기계적출력",
          "유도전동기효율"
        ]
      },
      {
        "title": "유도전동기 원리 요약: 유도발전기와 제동",
        "content": "<p>유도전동기를 동기속도보다 빠르게 외력으로 돌리면 슬립이 음(-)이 되어 유도발전기로 동작한다(풍력발전 등에 활용). 반대로 슬립이 1보다 크면 제동기(역상제동, 발전제동, 회생제동)로 동작한다.</p>",
        "formulas": [],
        "keywords": [
          "유도발전기",
          "역상제동",
          "회생제동"
        ]
      },
      {
        "title": "동기발전기의 구조",
        "content": "<p>동기발전기는 회전자의 형태에 따라 회전계자형(일반적)과 회전전기자형으로 나뉜다. 회전계자형은 구조가 간단하고 절연이 쉬워 대용량기에 널리 사용된다.</p><ul><li><b>돌극형</b>: 저속기(수차발전기), 극수가 많음</li><li><b>비돌극형(원통형)</b>: 고속기(터빈발전기), 극수 적음(2극, 4극)</li></ul><img src=\"images/전기기기/33.png\" alt=\"동기발전기 회전자 구조 다이어그램 (저작자: Dawe cz, 출처: Wikimedia Commons, 라이선스: CC BY-SA 3.0)\" style=\"max-width:100%;border-radius:8px;margin-top:1rem;\">",
        "formulas": [],
        "keywords": [
          "동기발전기",
          "회전계자형",
          "돌극형",
          "비돌극형"
        ]
      },
      {
        "title": "동기발전기의 전기자 반작용",
        "content": "<table border='1' cellpadding='6' style='border-collapse:collapse;width:100%'><tr style='background:#f0f0f0'><th>부하 역률</th><th>작용</th></tr><tr><td>동상(역률 1)</td><td>교차자화작용(횡축반작용)</td></tr><tr><td>지상(뒤진 역률)</td><td>감자작용(자속 감소)</td></tr><tr><td>진상(앞선 역률)</td><td>증자작용(자속 증가)</td></tr></table>",
        "formulas": [],
        "keywords": [
          "전기자반작용",
          "교차자화작용",
          "감자작용",
          "증자작용"
        ]
      },
      {
        "title": "동기임피던스와 단락비",
        "content": "<p>동기임피던스는 전기자 저항과 동기리액턴스의 합으로, 단락전류를 제한하는 요소이다. 단락비는 무부하 정격전압을 유도하는 계자전류와 3상단락시 정격전류를 흐르게 하는 계자전류의 비이다.</p><ul><li>단락비가 클수록: 동기임피던스 작음, 전기자반작용 작음, 전압변동률 작음, 안정도 높음, 철기계(대형·중량·고가)</li></ul>",
        "formulas": [
          "Z_s = \\sqrt{r_a^2+x_s^2}",
          "K_s = \\frac{I_{fs}}{I_{fn}} = \\frac{100}{\\%Z_s}"
        ],
        "keywords": [
          "동기임피던스",
          "단락비",
          "철기계",
          "동기리액턴스"
        ]
      },
      {
        "title": "동기발전기의 병렬운전 조건",
        "content": "<ul><li>기전력의 크기가 같을 것</li><li>기전력의 위상이 같을 것</li><li>기전력의 주파수가 같을 것</li><li>기전력의 파형이 같을 것</li><li>(3상) 상회전 방향이 같을 것</li></ul><p>조건이 맞지 않으면 두 발전기 사이에 무효순환전류(위상차) 또는 유효순환전류(기전력 크기차)가 흘러 과열, 진동을 유발한다.</p>",
        "formulas": [],
        "keywords": [
          "병렬운전",
          "무효순환전류",
          "유효순환전류",
          "동기화"
        ]
      },
      {
        "title": "동기전동기의 원리와 특성",
        "content": "<p>동기전동기는 회전자계와 같은 속도(동기속도)로 정속 회전하는 전동기이다. 기동토크가 0이므로 자체 기동이 불가능하여 유도전동기형 기동법(제동권선 이용) 등이 필요하다.</p><ul><li>장점: 정속도 운전, 역률 조정 가능(과여자/부족여자)</li><li>단점: 기동 곤란, 난조 발생 가능, 직류 여자전원 필요</li></ul>",
        "formulas": [],
        "keywords": [
          "동기전동기",
          "제동권선",
          "자기동법"
        ]
      },
      {
        "title": "동기전동기의 위상특성곡선(V곡선)",
        "content": "<p>부하를 일정하게 유지하며 계자전류를 변화시킬 때 전기자전류와 역률의 관계를 나타낸 곡선이 V곡선이다.</p><ul><li>계자전류를 정격보다 작게(부족여자): 지상역률, 전기자전류 증가</li><li>계자전류를 정격보다 크게(과여자): 진상역률, 전기자전류 증가</li><li>V곡선의 최저점에서 역률 1</li></ul>",
        "formulas": [],
        "keywords": [
          "V곡선",
          "위상특성곡선",
          "과여자",
          "부족여자"
        ]
      },
      {
        "title": "난조현상과 동기조상기",
        "content": "<p><b>난조(hunting)</b>: 부하 급변, 조속기 감도 불량 등으로 회전자 속도가 동기속도를 중심으로 진동하는 현상. 제동권선을 설치하여 방지한다.</p><p><b>동기조상기</b>: 무부하로 운전하는 동기전동기로, 계자전류를 조정해 진상/지상 무효전력을 공급하여 선로의 역률을 개선하고 전압을 조정하는 설비이다.</p>",
        "formulas": [],
        "keywords": [
          "난조",
          "제동권선",
          "동기조상기",
          "역률개선"
        ]
      },
      {
        "title": "정류기 - 다이오드 정류회로",
        "content": "<p>다이오드를 이용한 정류회로는 교류를 맥류(방향은 일정하나 크기가 변하는 직류)로 변환한다.</p><table border='1' cellpadding='6' style='border-collapse:collapse;width:100%'><tr style='background:#f0f0f0'><th>회로</th><th>맥동률</th><th>맥동주파수</th></tr><tr><td>단상 반파</td><td>약 121%</td><td>f</td></tr><tr><td>단상 전파</td><td>약 48%</td><td>2f</td></tr><tr><td>3상 반파</td><td>약 17%</td><td>3f</td></tr><tr><td>3상 전파</td><td>약 4%</td><td>6f</td></tr></table><p>단상 반파: E_d = 0.45E, 단상 전파: E_d = 0.9E (E: 교류 실효값)</p>",
        "formulas": [
          "E_{d0} = 0.45E \\;(\\text{단상 반파})",
          "E_{d0} = 0.9E \\;(\\text{단상 전파})"
        ],
        "keywords": [
          "정류회로",
          "맥동률",
          "단상전파정류",
          "3상전파정류"
        ]
      },
      {
        "title": "SCR을 이용한 위상제어",
        "content": "<p>SCR(사이리스터)은 게이트 신호로 도통 시점을 제어할 수 있는 반도체 소자이다. 점호각(제어각) α를 조절하여 출력 직류전압의 크기를 연속적으로 제어하는 것을 위상제어라 한다.</p><p>단상 전파정류 시 점호각 α에 따른 평균 출력전압:</p>",
        "formulas": [
          "E_d = 0.9E\\cos\\alpha"
        ],
        "keywords": [
          "SCR",
          "사이리스터",
          "위상제어",
          "점호각"
        ]
      },
      {
        "title": "인버터의 기초 개념",
        "content": "<p>인버터는 직류를 교류로 변환하는 장치로(정류기의 역동작), 유도전동기의 VVVF(가변전압 가변주파수) 속도제어에 핵심적으로 사용된다.</p><ul><li>컨버터(정류) → 직류링크(콘덴서/리액터) → 인버터(역변환) 구조가 일반적</li><li>PWM(펄스폭변조) 방식으로 출력 전압과 주파수를 동시에 제어</li></ul>",
        "formulas": [],
        "keywords": [
          "인버터",
          "컨버터",
          "VVVF",
          "PWM"
        ]
      },
      {
        "title": "특수전동기 - 스테핑모터",
        "content": "<p>스테핑모터(step motor)는 입력 펄스 수에 비례하여 일정 각도(스텝각)씩 회전하는 전동기로, 위치제어에 적합하다.</p><ul><li>피드백 없이 오픈루프 정밀 위치제어 가능</li><li>펄스 수로 회전각을, 펄스 주파수로 회전속도를 제어</li><li>정지 시 유지 토크 보유, 정밀 기계, 프린터, 로봇 등에 사용</li></ul><img src='images/전기기기/43.gif' alt='스테핑모터 내부 코일 여자 순서에 따른 회전 동작 애니메이션 (저작자: Wapcaplet, Teravolt, 출처: Wikimedia Commons, 라이선스: GFDL)' style='max-width:100%;border-radius:8px;margin-top:1rem;'>",
        "formulas": [],
        "keywords": [
          "스테핑모터",
          "스텝각",
          "오픈루프제어"
        ]
      },
      {
        "title": "특수전동기 - 서보모터",
        "content": "<p>서보모터(servo motor)는 위치, 속도, 토크를 정밀하게 추종 제어하기 위해 피드백(폐루프) 제어계에 사용되는 전동기이다.</p><ul><li>엔코더 등 위치검출기로 피드백을 받아 지령값과 비교, 오차를 제어</li><li>응답성이 빠르고 제어 정밀도가 높음</li><li>산업용 로봇, CNC 공작기계, 자동화 설비 등에 사용</li></ul><img src='images/전기기기/44.jpg' alt='서보모터 분해 사진 - 모터, 기어박스, 제어회로 구성 (저작자: oomlout, 출처: Wikimedia Commons, 라이선스: CC BY-SA 2.0)' style='max-width:100%;border-radius:8px;margin-top:1rem;'>",
        "formulas": [],
        "keywords": [
          "서보모터",
          "피드백제어",
          "엔코더",
          "폐루프제어"
        ]
      },
      {
        "title": "전기기기 핵심 공식 총정리",
        "content": "<table border='1' cellpadding='6' style='border-collapse:collapse;width:100%'><tr style='background:#f0f0f0'><th>항목</th><th>공식</th></tr><tr><td>직류기 유기기전력</td><td>E = pZφN/60a</td></tr><tr><td>변압기 유기기전력</td><td>E = 4.44fNφm</td></tr><tr><td>동기속도</td><td>Ns = 120f/p</td></tr><tr><td>슬립</td><td>s = (Ns-N)/Ns</td></tr><tr><td>변압기 최대효율조건</td><td>철손 = 동손</td></tr><tr><td>단락비</td><td>Ks = Ifs/Ifn = 100/%Zs</td></tr></table><p>시험에서는 이 핵심 공식들을 응용한 계산문제가 자주 출제되므로 유도 과정을 이해하고 암기해야 한다.</p>",
        "formulas": [],
        "keywords": [
          "핵심공식",
          "총정리",
          "전기기기"
        ]
      }
    ]
  },
  {
    "subject": "회로이론",
    "slides": [
      {
        "title": "옴의 법칙과 저항",
        "content": "<p>전기회로 해석의 가장 기본이 되는 법칙으로, 도체에 흐르는 전류는 전압에 비례하고 저항에 반비례한다.</p><ul><li>V: 전압(V), I: 전류(A), R: 저항(Ω)</li><li>저항은 도체의 고유저항(비저항) ρ, 길이 l, 단면적 A에 의해 결정된다.</li><li>온도가 상승하면 금속 도체의 저항은 일반적으로 증가한다.</li></ul><img src='images/회로이론/01.jpg' alt='브레드보드에 저항 등 소자를 연결한 실제 회로 사진 (저작자: LukeSurl, 출처: Wikimedia Commons, 라이선스: CC BY-SA 3.0)' style='max-width:100%;border-radius:8px;margin-top:1rem;'>",
        "formulas": [
          "V = IR",
          "R = \\rho \\frac{l}{A}"
        ],
        "keywords": [
          "옴의법칙",
          "저항",
          "고유저항"
        ]
      },
      {
        "title": "키르히호프의 법칙 (KCL/KVL)",
        "content": "<p>복잡한 회로망을 해석하기 위한 기본 법칙이다.</p><ul><li><b>전류법칙(KCL)</b>: 한 절점에 유입하는 전류의 총합은 유출하는 전류의 총합과 같다.</li><li><b>전압법칙(KVL)</b>: 폐회로를 따라 한 바퀴 돌면 기전력의 합은 전압강하의 합과 같다.</li></ul><svg viewBox='0 0 300 160' xmlns='http://www.w3.org/2000/svg' style='max-width:320px'><rect x='10' y='10' width='280' height='140' fill='none' stroke='currentColor' stroke-width='2'/><circle cx='150' cy='40' r='4' fill='currentColor'/><text x='158' y='35' font-size='14' fill='currentColor'>절점 a</text><line x1='150' y1='40' x2='60' y2='120' stroke='currentColor' stroke-width='2'/><line x1='150' y1='40' x2='150' y2='140' stroke='currentColor' stroke-width='2'/><line x1='150' y1='40' x2='240' y2='120' stroke='currentColor' stroke-width='2'/><text x='40' y='135' font-size='12' fill='currentColor'>I1</text><text x='140' y='150' font-size='12' fill='currentColor'>I2</text><text x='230' y='135' font-size='12' fill='currentColor'>I3</text></svg>",
        "formulas": [
          "\\sum I_{in} = \\sum I_{out}",
          "\\sum E = \\sum IR"
        ],
        "keywords": [
          "키르히호프법칙",
          "KCL",
          "KVL"
        ]
      },
      {
        "title": "저항의 직렬·병렬 접속",
        "content": "<p>여러 개의 저항을 접속하는 방법에 따라 합성저항이 달라진다.</p><table border='1' style='border-collapse:collapse;width:100%'><tr><th>구분</th><th>합성저항</th><th>특징</th></tr><tr><td>직렬</td><td>R = R1+R2+...+Rn</td><td>전류 일정, 전압 분배</td></tr><tr><td>병렬</td><td>1/R = 1/R1+1/R2+...+1/Rn</td><td>전압 일정, 전류 분배</td></tr></table>",
        "formulas": [
          "R_{직렬} = R_1 + R_2 + \\cdots + R_n",
          "\\frac{1}{R_{병렬}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\cdots"
        ],
        "keywords": [
          "직렬",
          "병렬",
          "합성저항"
        ]
      },
      {
        "title": "전압 분배와 전류 분배 법칙",
        "content": "<p>직렬회로에서는 저항에 비례하여 전압이 분배되고, 병렬회로에서는 저항에 반비례(전도도에 비례)하여 전류가 분배된다.</p><ul><li>직렬 2저항의 전압분배: V1 = V × R1/(R1+R2)</li><li>병렬 2저항의 전류분배: I1 = I × R2/(R1+R2)</li></ul>",
        "formulas": [
          "V_1 = V \\times \\frac{R_1}{R_1+R_2}",
          "I_1 = I \\times \\frac{R_2}{R_1+R_2}"
        ],
        "keywords": [
          "전압분배",
          "전류분배"
        ]
      },
      {
        "title": "중첩의 원리",
        "content": "<p>여러 개의 독립된 전원이 존재하는 선형회로에서, 각 지로에 흐르는 전류(또는 전압)는 각 전원이 단독으로 존재할 때 발생시키는 값들의 대수적 합과 같다.</p><ul><li>전압원은 단락(short), 전류원은 개방(open)시켜 나머지 전원의 영향을 제거한다.</li><li>선형 소자(R, L, C)로만 구성된 회로에서 적용 가능하다.</li></ul>",
        "formulas": [],
        "keywords": [
          "중첩의원리",
          "선형회로"
        ]
      },
      {
        "title": "테브난의 정리",
        "content": "<p>복잡한 선형회로망을 부하 단자에서 바라본 등가 전압원과 등가 저항의 직렬회로로 단순화하는 정리이다.</p><ul><li>Vth: 부하를 제거한 개방단자전압</li><li>Rth: 모든 독립전원을 제거(전압원 단락, 전류원 개방)하고 단자에서 바라본 합성저항</li><li>부하전류: I = Vth/(Rth+RL)</li></ul>",
        "formulas": [
          "I_L = \\frac{V_{th}}{R_{th} + R_L}"
        ],
        "keywords": [
          "테브난정리",
          "등가회로"
        ]
      },
      {
        "title": "노턴의 정리",
        "content": "<p>테브난 정리와 쌍대 관계로, 회로망을 등가 전류원과 등가 저항의 병렬회로로 표현한다.</p><ul><li>In: 부하 단자를 단락했을 때 흐르는 단락전류</li><li>Rn = Rth (테브난 저항과 동일)</li><li>테브난 등가회로와 노턴 등가회로는 서로 변환 가능하다: Vth = In × Rn</li></ul>",
        "formulas": [
          "V_{th} = I_n \\times R_n"
        ],
        "keywords": [
          "노턴정리",
          "단락전류"
        ]
      },
      {
        "title": "밀만의 정리",
        "content": "<p>여러 전압원(내부저항 포함)이 병렬로 접속된 경우, 그 병렬 접속점의 전압을 구하는 정리이다.</p><ul><li>여러 개의 전압원-저항 직렬 지로가 병렬로 연결된 회로에 적용</li><li>각 지로의 전류원 등가로 변환 후 합산하는 원리와 동일</li></ul>",
        "formulas": [
          "V_{ab} = \\frac{\\frac{E_1}{R_1}+\\frac{E_2}{R_2}+\\cdots}{\\frac{1}{R_1}+\\frac{1}{R_2}+\\cdots}"
        ],
        "keywords": [
          "밀만의정리"
        ]
      },
      {
        "title": "휘트스톤 브릿지 회로",
        "content": "<p>미지의 저항을 정밀하게 측정하기 위한 회로로, 브릿지가 평형되면 검류계에 전류가 흐르지 않는다.</p><p>평형조건: R1·R4 = R2·R3</p><img src='images/회로이론/09.jpg' alt='다양한 저항 소자 실물 사진 (저작자: Honina, 출처: Wikimedia Commons, 라이선스: CC BY-SA 3.0)' style='max-width:100%;border-radius:8px;margin-top:1rem;'>",
        "formulas": [
          "R_1 R_4 = R_2 R_3"
        ],
        "keywords": [
          "휘트스톤브릿지",
          "평형조건"
        ]
      },
      {
        "title": "정현파 교류의 표현",
        "content": "<p>교류는 시간에 따라 크기와 방향이 주기적으로 변하는 전압/전류이며, 정현파는 가장 기본적인 파형이다.</p><ul><li>Vm: 최대값, ω: 각주파수(rad/s), θ: 위상각</li><li>주파수 f와 각주파수의 관계: ω = 2πf</li><li>주기 T = 1/f</li></ul><img src=\"images/회로이론/10.jpg\" alt=\"오실로스코프 화면에 표시된 10kHz 정현파 (저작자: Pittigrilli, 출처: Wikimedia Commons, 라이선스: CC BY-SA 4.0)\" style=\"max-width:100%;border-radius:8px;margin-top:1rem;\">",
        "formulas": [
          "v(t) = V_m \\sin(\\omega t + \\theta)",
          "\\omega = 2\\pi f = \\frac{2\\pi}{T}"
        ],
        "keywords": [
          "정현파",
          "각주파수",
          "주기"
        ]
      },
      {
        "title": "실효값, 평균값, 파고율, 파형률",
        "content": "<p>교류의 크기를 나타내는 여러 지표들이다.</p><table border='1' style='border-collapse:collapse;width:100%'><tr><th>명칭</th><th>정현파 값</th></tr><tr><td>실효값(RMS)</td><td>Vm/√2 ≈ 0.707Vm</td></tr><tr><td>평균값</td><td>2Vm/π ≈ 0.637Vm</td></tr><tr><td>파고율(Crest Factor)</td><td>최대값/실효값 = √2 ≈ 1.414</td></tr><tr><td>파형률(Form Factor)</td><td>실효값/평균값 = π/(2√2) ≈ 1.11</td></tr></table>",
        "formulas": [
          "V_{rms} = \\frac{V_m}{\\sqrt{2}}",
          "V_{avg} = \\frac{2V_m}{\\pi}",
          "파고율 = \\frac{V_m}{V_{rms}}",
          "파형률 = \\frac{V_{rms}}{V_{avg}}"
        ],
        "keywords": [
          "실효값",
          "평균값",
          "파고율",
          "파형률"
        ]
      },
      {
        "title": "복소수와 페이저 표현",
        "content": "<p>교류 회로 해석을 쉽게 하기 위해 정현파를 복소수(페이저)로 표현한다.</p><ul><li>직각좌표형: A = a + jb</li><li>극좌표형: A = |A|∠θ</li><li>실효값 페이저로 표현하면 미분/적분이 곱셈/나눗셈으로 바뀌어 계산이 간편해진다.</li></ul>",
        "formulas": [
          "A = a + jb = |A|(\\cos\\theta + j\\sin\\theta)",
          "|A| = \\sqrt{a^2+b^2}, \\ \\theta = \\tan^{-1}\\frac{b}{a}"
        ],
        "keywords": [
          "페이저",
          "복소수",
          "극좌표"
        ]
      },
      {
        "title": "저항(R) 소자의 교류 응답",
        "content": "<p>저항 소자는 전압과 전류가 동상(위상차 0)이다.</p><ul><li>임피던스 Z_R = R (실수)</li><li>전압, 전류 파형이 항상 같은 위상으로 변화한다.</li></ul>",
        "formulas": [
          "Z_R = R",
          "v(t) = R \\, i(t)"
        ],
        "keywords": [
          "저항",
          "동상"
        ]
      },
      {
        "title": "인덕터(L) 소자의 교류 응답",
        "content": "<p>인덕터에서는 전류가 전압보다 90도 뒤진다(지상).</p><ul><li>유도리액턴스: X_L = ωL</li><li>임피던스: Z_L = jωL = jX_L</li><li>전류가 전압에 대해 위상이 90° 지연된다.</li></ul><img src=\"images/회로이론/14.jpg\" alt=\"실제 인덕터 부품 사진 (저작자: Miguel/FDominec, 출처: Wikimedia Commons, 라이선스: CC BY-SA 3.0)\" style=\"max-width:100%;border-radius:8px;margin-top:1rem;\">",
        "formulas": [
          "X_L = \\omega L = 2\\pi f L",
          "Z_L = j\\omega L"
        ],
        "keywords": [
          "인덕터",
          "유도리액턴스",
          "지상전류"
        ]
      },
      {
        "title": "커패시터(C) 소자의 교류 응답",
        "content": "<p>커패시터에서는 전류가 전압보다 90도 앞선다(진상).</p><ul><li>용량리액턴스: X_C = 1/(ωC)</li><li>임피던스: Z_C = 1/(jωC) = -jX_C</li><li>전류가 전압에 대해 위상이 90° 앞선다.</li></ul><img src='images/회로이론/15.jpg' alt='다양한 알루미늄 및 탄탈럼 전해커패시터 실물 사진 (저작자: Elcap, 출처: Wikimedia Commons, 라이선스: CC0 퍼블릭 도메인)' style='max-width:100%;border-radius:8px;margin-top:1rem;'>",
        "formulas": [
          "X_C = \\frac{1}{\\omega C}",
          "Z_C = \\frac{1}{j\\omega C} = -jX_C"
        ],
        "keywords": [
          "커패시터",
          "용량리액턴스",
          "진상전류"
        ]
      },
      {
        "title": "임피던스와 어드미턴스",
        "content": "<p>임피던스는 교류회로에서 저항과 리액턴스를 합한 복소수 개념이며, 어드미턴스는 임피던스의 역수이다.</p><ul><li>Z = R + jX (X>0이면 유도성, X<0이면 용량성)</li><li>Y = 1/Z = G + jB (컨덕턴스 G, 서셉턴스 B)</li></ul>",
        "formulas": [
          "Z = R + jX",
          "Y = \\frac{1}{Z} = G + jB",
          "|Z| = \\sqrt{R^2+X^2}"
        ],
        "keywords": [
          "임피던스",
          "어드미턴스",
          "리액턴스"
        ]
      },
      {
        "title": "RL 직렬회로",
        "content": "<p>저항과 인덕터가 직렬로 접속된 회로이다.</p><ul><li>합성 임피던스: Z = R + jωL</li><li>전류는 전압보다 위상이 θ만큼 뒤진다.</li><li>역률각 θ = tan⁻¹(X_L/R)</li></ul>",
        "formulas": [
          "Z = R + j\\omega L = \\sqrt{R^2+X_L^2}\\angle\\theta",
          "\\theta = \\tan^{-1}\\frac{X_L}{R}"
        ],
        "keywords": [
          "RL직렬",
          "역률각"
        ]
      },
      {
        "title": "RC 직렬회로",
        "content": "<p>저항과 커패시터가 직렬로 접속된 회로이다.</p><ul><li>합성 임피던스: Z = R - jX_C</li><li>전류는 전압보다 위상이 θ만큼 앞선다.</li><li>역률각 θ = tan⁻¹(X_C/R)</li></ul>",
        "formulas": [
          "Z = R - jX_C = \\sqrt{R^2+X_C^2}\\angle(-\\theta)",
          "\\theta = \\tan^{-1}\\frac{X_C}{R}"
        ],
        "keywords": [
          "RC직렬",
          "역률각"
        ]
      },
      {
        "title": "RLC 직렬회로",
        "content": "<p>저항, 인덕터, 커패시터가 직렬로 접속된 회로이다.</p><p>합성 임피던스는 X_L과 X_C의 차로 결정된다.</p><img src='images/회로이론/19.jpg' alt='아날로그 오실로스코프 화면에 표시된 10kHz 정현파 실측 사진 (저작자: Pittigrilli, 출처: Wikimedia Commons, 라이선스: CC BY-SA 4.0)' style='max-width:100%;border-radius:8px;margin-top:1rem;'>",
        "formulas": [
          "Z = R + j(X_L - X_C)",
          "|Z| = \\sqrt{R^2+(X_L-X_C)^2}"
        ],
        "keywords": [
          "RLC직렬"
        ]
      },
      {
        "title": "RLC 병렬회로",
        "content": "<p>저항, 인덕터, 커패시터가 병렬로 접속된 회로로, 어드미턴스로 해석하면 편리하다.</p><ul><li>어드미턴스: Y = G + j(B_C - B_L)</li><li>B_L = 1/X_L, B_C = 1/X_C</li></ul>",
        "formulas": [
          "Y = \\frac{1}{R} + j\\left(\\omega C - \\frac{1}{\\omega L}\\right)"
        ],
        "keywords": [
          "RLC병렬",
          "어드미턴스"
        ]
      },
      {
        "title": "직렬 공진",
        "content": "<p>RLC 직렬회로에서 X_L = X_C가 되어 리액턴스 성분이 상쇄되고 임피던스가 최소(=R)가 되는 상태이다.</p><ul><li>공진 시 임피던스는 순저항 R이 되어 전류가 최대가 된다.</li><li>공진주파수 f0 = 1/(2π√(LC))</li><li>전압과 전류가 동상이 되어 역률이 1이 된다.</li></ul>",
        "formulas": [
          "\\omega_0 L = \\frac{1}{\\omega_0 C}",
          "f_0 = \\frac{1}{2\\pi\\sqrt{LC}}"
        ],
        "keywords": [
          "직렬공진",
          "공진주파수"
        ]
      },
      {
        "title": "병렬 공진",
        "content": "<p>RLC 병렬회로에서 서셉턴스 성분이 상쇄되어 어드미턴스가 최소(임피던스가 최대)가 되는 상태이다.</p><ul><li>공진 시 임피던스는 최대가 되고 전류(선전류)는 최소가 된다.</li><li>공진주파수는 직렬공진과 동일한 식으로 계산된다.</li></ul>",
        "formulas": [
          "f_0 = \\frac{1}{2\\pi\\sqrt{LC}}"
        ],
        "keywords": [
          "병렬공진",
          "임피던스최대"
        ]
      },
      {
        "title": "공진회로의 Q인자와 대역폭",
        "content": "<p>Q인자(첨예도)는 공진회로의 선택도를 나타내는 척도이다.</p><ul><li>직렬공진: Q = (1/R)√(L/C) = ωL/R</li><li>Q가 클수록 공진곡선이 뾰족하고 대역폭이 좁다.</li><li>대역폭(BW) = f0/Q</li></ul>",
        "formulas": [
          "Q = \\frac{\\omega_0 L}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}",
          "BW = \\frac{f_0}{Q}"
        ],
        "keywords": [
          "Q인자",
          "대역폭",
          "선택도"
        ]
      },
      {
        "title": "교류 전력: 유효전력, 무효전력, 피상전력",
        "content": "<p>교류회로에서는 전압-전류 간 위상차로 인해 세 가지 전력 개념이 존재한다.</p><table border='1' style='border-collapse:collapse;width:100%'><tr><th>명칭</th><th>기호/단위</th><th>식</th></tr><tr><td>유효전력(소비전력)</td><td>P [W]</td><td>VI cosθ</td></tr><tr><td>무효전력</td><td>Q [Var]</td><td>VI sinθ</td></tr><tr><td>피상전력</td><td>S [VA]</td><td>VI</td></tr></table><p>전력삼각형: S² = P² + Q²</p>",
        "formulas": [
          "P = VI\\cos\\theta",
          "Q = VI\\sin\\theta",
          "S = VI = \\sqrt{P^2+Q^2}"
        ],
        "keywords": [
          "유효전력",
          "무효전력",
          "피상전력"
        ]
      },
      {
        "title": "역률과 복소전력",
        "content": "<p>역률은 피상전력 중 유효전력이 차지하는 비율이다.</p><ul><li>역률: cosθ = P/S</li><li>복소전력: S = P + jQ = V·I* (전류의 켤레복소수 사용)</li><li>역률 개선을 위해 용량성 리액턴스(콘덴서)를 병렬로 추가한다.</li></ul>",
        "formulas": [
          "\\cos\\theta = \\frac{P}{S}",
          "\\bar{S} = P + jQ = V \\bar{I}^{*}"
        ],
        "keywords": [
          "역률",
          "복소전력",
          "역률개선"
        ]
      },
      {
        "title": "3상 교류 - Y결선",
        "content": "<p>3상 전원/부하를 Y(성형)로 접속한 방식이다.</p><ul><li>선간전압은 상전압의 √3배이며 위상은 30° 앞선다.</li><li>선전류 = 상전류 (크기와 위상 동일)</li></ul>",
        "formulas": [
          "V_l = \\sqrt{3} V_p \\angle 30^\\circ",
          "I_l = I_p"
        ],
        "keywords": [
          "Y결선",
          "성형결선",
          "선간전압"
        ]
      },
      {
        "title": "3상 교류 - Δ결선",
        "content": "<p>3상 전원/부하를 Δ(환상)로 접속한 방식이다.</p><ul><li>선간전압 = 상전압 (크기와 위상 동일)</li><li>선전류는 상전류의 √3배이며 위상은 30° 뒤진다.</li></ul>",
        "formulas": [
          "V_l = V_p",
          "I_l = \\sqrt{3} I_p \\angle -30^\\circ"
        ],
        "keywords": [
          "Δ결선",
          "환상결선",
          "선전류"
        ]
      },
      {
        "title": "3상 전력 계산",
        "content": "<p>평형 3상 회로의 전력은 결선방식에 무관하게 선간전압과 선전류로 동일하게 표현된다.</p><ul><li>유효전력: P = √3 Vl·Il·cosθ</li><li>무효전력: Q = √3 Vl·Il·sinθ</li><li>피상전력: S = √3 Vl·Il</li></ul>",
        "formulas": [
          "P = \\sqrt{3} V_l I_l \\cos\\theta",
          "S = \\sqrt{3} V_l I_l"
        ],
        "keywords": [
          "3상전력",
          "평형3상"
        ]
      },
      {
        "title": "V결선 (변압기 2대로 3상 공급)",
        "content": "<p>Δ결선 변압기 3대 중 1대가 고장났을 때 나머지 2대로 3상 전력을 공급하는 방식이다.</p><ul><li>V결선 출력: Pv = √3 × 변압기 1대 용량</li><li>이용률 = √3/2 ≈ 0.866</li><li>출력비(Δ결선 대비) = 1/√3 ≈ 0.577</li></ul>",
        "formulas": [
          "P_V = \\sqrt{3} P_1",
          "이용률 = \\frac{\\sqrt{3}}{2}"
        ],
        "keywords": [
          "V결선",
          "이용률",
          "출력비"
        ]
      },
      {
        "title": "비정현파와 푸리에 급수",
        "content": "<p>왜형파(비정현파)는 기본파와 여러 고조파 성분의 합으로 표현할 수 있다(푸리에 급수).</p><ul><li>직류분 + 기본파 + 제2고조파 + 제3고조파 + ...</li><li>대칭성에 따라 특정 고조파만 존재할 수 있다 (반파대칭: 홀수차만 존재 등)</li></ul>",
        "formulas": [
          "f(t) = a_0 + \\sum_{n=1}^{\\infty} (a_n \\cos n\\omega t + b_n \\sin n\\omega t)"
        ],
        "keywords": [
          "비정현파",
          "푸리에급수",
          "고조파"
        ]
      },
      {
        "title": "왜형률",
        "content": "<p>왜형률(THD)은 기본파에 대한 전체 고조파 성분의 비율로, 파형이 정현파에서 얼마나 벗어났는지를 나타낸다.</p><ul><li>고조파 실효값의 제곱합의 제곱근을 기본파 실효값으로 나눈 값</li></ul>",
        "formulas": [
          "D = \\frac{\\sqrt{V_2^2+V_3^2+\\cdots}}{V_1}"
        ],
        "keywords": [
          "왜형률",
          "THD",
          "고조파왜곡"
        ]
      },
      {
        "title": "대칭좌표법의 개념",
        "content": "<p>비대칭 3상 전압/전류를 대칭인 세 성분(정상분, 역상분, 영상분)의 합으로 분해하여 해석하는 방법으로, 고장해석 등에 사용된다.</p><ul><li>정상분(V1): 원래와 같은 상순의 평형 성분</li><li>역상분(V2): 반대 상순의 평형 성분</li><li>영상분(V0): 세 상이 동상, 동크기인 성분</li></ul>",
        "formulas": [
          "V_a = V_0 + V_1 + V_2"
        ],
        "keywords": [
          "대칭좌표법",
          "정상분",
          "역상분",
          "영상분"
        ]
      },
      {
        "title": "라플라스 변환의 기초",
        "content": "<p>시간함수를 복소주파수(s) 영역으로 변환하여 미분방정식을 대수방정식으로 바꾸어 회로 해석을 쉽게 하는 도구이다.</p><table border='1' style='border-collapse:collapse;width:100%'><tr><th>시간함수</th><th>라플라스 변환</th></tr><tr><td>단위계단 u(t)</td><td>1/s</td></tr><tr><td>e^(-at)</td><td>1/(s+a)</td></tr><tr><td>sin(ωt)</td><td>ω/(s²+ω²)</td></tr><tr><td>cos(ωt)</td><td>s/(s²+ω²)</td></tr></table>",
        "formulas": [
          "F(s) = \\int_0^{\\infty} f(t) e^{-st} dt"
        ],
        "keywords": [
          "라플라스변환",
          "s영역"
        ]
      },
      {
        "title": "초기값 정리와 최종값 정리",
        "content": "<p>라플라스 변환된 함수로부터 시간영역의 초기값과 최종(정상상태)값을 직접 구하는 정리이다.</p><ul><li>초기값 정리: t=0에서의 값</li><li>최종값 정리: t→∞에서의 정상상태 값</li></ul>",
        "formulas": [
          "f(0^+) = \\lim_{s\\to\\infty} sF(s)",
          "f(\\infty) = \\lim_{s\\to 0} sF(s)"
        ],
        "keywords": [
          "초기값정리",
          "최종값정리"
        ]
      },
      {
        "title": "RL 직렬회로의 과도현상",
        "content": "<p>스위치 투입 시 인덕터에 흐르는 전류는 즉시 최종값에 도달하지 못하고 지수적으로 증가한다.</p><ul><li>시정수 τ = L/R (전류가 최종값의 63.2%에 도달하는 시간)</li><li>전류: i(t) = (E/R)(1 - e^(-t/τ))</li></ul>",
        "formulas": [
          "\\tau = \\frac{L}{R}",
          "i(t) = \\frac{E}{R}\\left(1-e^{-\\frac{R}{L}t}\\right)"
        ],
        "keywords": [
          "RL과도현상",
          "시정수"
        ]
      },
      {
        "title": "RC 직렬회로의 과도현상",
        "content": "<p>스위치 투입 시 커패시터 전압은 지수적으로 증가하며 충전된다.</p><ul><li>시정수 τ = RC</li><li>커패시터 전압: vc(t) = E(1 - e^(-t/τ))</li><li>방전 시에는 vc(t) = E·e^(-t/τ)로 감소한다.</li></ul>",
        "formulas": [
          "\\tau = RC",
          "v_C(t) = E\\left(1-e^{-\\frac{t}{RC}}\\right)"
        ],
        "keywords": [
          "RC과도현상",
          "시정수",
          "충방전"
        ]
      },
      {
        "title": "4단자망(2포트 네트워크) 개념",
        "content": "<p>입력단자 한 쌍과 출력단자 한 쌍을 갖는 회로망으로, 통신·전송선로 해석에 사용된다.</p><ul><li>입력측: V1, I1 / 출력측: V2, I2</li><li>Z파라미터, Y파라미터, ABCD(F)파라미터 등으로 표현 가능</li></ul>",
        "formulas": [],
        "keywords": [
          "4단자망",
          "2포트네트워크"
        ]
      },
      {
        "title": "Z파라미터와 Y파라미터",
        "content": "<p>4단자망을 임피던스 또는 어드미턴스로 표현하는 방법이다.</p><ul><li>Z파라미터: V1=Z11I1+Z12I2, V2=Z21I1+Z22I2</li><li>Y파라미터: I1=Y11V1+Y12V2, I2=Y21V1+Y22V2</li><li>수동 상반(reciprocal) 회로망에서는 Z12=Z21, Y12=Y21이 성립한다.</li></ul>",
        "formulas": [
          "V_1 = Z_{11}I_1 + Z_{12}I_2",
          "V_2 = Z_{21}I_1 + Z_{22}I_2"
        ],
        "keywords": [
          "Z파라미터",
          "Y파라미터"
        ]
      },
      {
        "title": "ABCD 파라미터(4단자 정수)",
        "content": "<p>전송선로 해석에 널리 쓰이는 파라미터로, 입력측을 출력측으로 표현한다.</p><ul><li>V1 = A·V2 + B·(-I2), I1 = C·V2 + D·(-I2)</li><li>대칭회로(입출력 대칭)에서는 A=D가 성립한다.</li><li>가역회로에서는 AD-BC=1이 성립한다.</li></ul>",
        "formulas": [
          "V_1 = AV_2 + B(-I_2)",
          "I_1 = CV_2 + D(-I_2)",
          "AD-BC=1"
        ],
        "keywords": [
          "ABCD파라미터",
          "4단자정수"
        ]
      },
      {
        "title": "회로망 정리 종합 정리",
        "content": "<p>전기산업기사 회로이론 시험에서는 위 정리들을 조합한 응용 문제가 자주 출제된다.</p><ul><li>테브난/노턴 정리로 부하에 최대전력이 전달되는 조건: RL = Rth (최대전력전달정리)</li><li>이때 최대전달전력: Pmax = Vth²/(4Rth)</li><li>중첩의 원리와 브릿지 평형조건, 밀만의 정리를 함께 활용하는 복합 문제에 유의한다.</li></ul>",
        "formulas": [
          "R_L = R_{th}",
          "P_{max} = \\frac{V_{th}^2}{4R_{th}}"
        ],
        "keywords": [
          "최대전력전달",
          "종합정리"
        ]
      }
    ]
  },
  {
    "subject": "전기설비기술기준",
    "slides": [
      {
        "title": "전기설비기술기준과 KEC의 관계",
        "content": "<p><b>전기설비기술기준</b>은 산업통상자원부 고시(행정규칙)로서 전기설비의 안전 확보를 위한 기술적 최소 요건을 규정한 최상위 기준입니다. 그 하위에 <b>한국전기설비규정(KEC, Korea Electro-technical Code)</b>이 있으며, KEC는 기술기준에서 정한 목표(안전·성능)를 달성하기 위한 구체적인 세부 기준(수치, 시공방법 등)을 제시합니다.</p><ul><li>전기설비기술기준: 성능 위주(무엇을 만족해야 하는가)</li><li>KEC: 기술기준을 만족하기 위한 구체적 세부 규정(어떻게 시공하는가)</li><li>과거 '전기설비기술기준의 판단기준'을 대체하여 IEC 국제표준과 정합성을 높인 체계로 개편되었습니다.</li></ul><p style='color:#b45309'>※ KEC는 개정이 잦으므로 시험 응시 전 최신 조문을 한국전기기술기준위원회(KEC 홈페이지)에서 반드시 확인하세요.</p>",
        "formulas": [],
        "keywords": [
          "KEC",
          "전기설비기술기준",
          "체계"
        ]
      },
      {
        "title": "KEC 전체 구성 체계",
        "content": "<p>KEC는 총 6개 편(fascicle)으로 구성되어 있습니다.</p><table><tr><th>편</th><th>내용</th></tr><tr><td>100 총칙</td><td>목적, 적용범위, 용어 정의</td></tr><tr><td>200 저압전기설비</td><td>저압 배선, 배선기구, 접지 등</td></tr><tr><td>300 고압·특고압전기설비</td><td>발전소, 변전소, 전선로 등</td></tr><tr><td>400 전기철도설비</td><td>전기철도 급전, 전차선 등</td></tr><tr><td>500 분산형전원설비</td><td>태양광 등 신재생에너지 연계 설비</td></tr><tr><td>600 발전용 화력·수력설비 등</td><td>발전설비 관련 기준</td></tr></table><p>수험 과목에서는 100~300편의 접지·배선·전선로·이격거리 규정이 특히 자주 출제됩니다.</p>",
        "formulas": [],
        "keywords": [
          "KEC",
          "구성체계",
          "편"
        ]
      },
      {
        "title": "전압의 구분 (저압·고압·특고압)",
        "content": "<p>KEC는 저압 범위를 국제표준(IEC)에 맞추어 개정하였습니다. 현재 기준은 다음과 같습니다.</p><table><tr><th>구분</th><th>교류(AC)</th><th>직류(DC)</th></tr><tr><td>저압</td><td>1,000V 이하</td><td>1,500V 이하</td></tr><tr><td>고압</td><td>1,000V 초과 7,000V 이하</td><td>1,500V 초과 7,000V 이하</td></tr><tr><td>특고압</td><td colspan='2'>7,000V 초과</td></tr></table><p><b>암기 포인트</b>: 과거 기준(AC 600V/DC 750V 이하 저압)에서 국제표준 정합을 위해 <b>AC 1,000V, DC 1,500V</b>로 상향 개정되었습니다. 고압과 특고압의 경계는 종전과 동일하게 <b>7,000V</b>입니다.</p>",
        "formulas": [],
        "keywords": [
          "전압구분",
          "저압",
          "고압",
          "특고압",
          "1000V",
          "1500V",
          "7000V"
        ]
      },
      {
        "title": "접지시스템의 목적",
        "content": "<p>접지(Earthing/Grounding)는 전기설비를 대지와 전기적으로 연결하는 것으로, 다음과 같은 목적을 가집니다.</p><ul><li><b>감전 방지</b>: 누전 시 인체에 가해지는 전위차를 낮추어 감전사고 예방</li><li><b>기기·설비 보호</b>: 이상전압(뇌격, 지락 등) 발생 시 대지로 전류를 방류하여 기기 손상 방지</li><li><b>보호장치의 정확한 동작 확보</b>: 지락사고 시 과전류차단기·누전차단기가 신속히 동작하도록 함</li><li><b>등전위 형성</b>: 서로 다른 설비 간 전위차를 없애 감전 및 화재 위험 감소</li></ul>",
        "formulas": [],
        "keywords": [
          "접지",
          "목적",
          "감전방지"
        ]
      },
      {
        "title": "접지시스템의 구분 (1) - 목적별 분류",
        "content": "<p>KEC 141는 접지시스템을 목적에 따라 다음과 같이 구분합니다.</p><ul><li><b>계통접지(system earthing)</b>: 전력계통에서 이상현상에 대비하여 대지와 계통을 접지하는 것 (예: TN, TT, IT 계통)</li><li><b>보호접지(protective earthing)</b>: 고장 시 감전에 대한 보호를 목적으로 기기의 한 점 이상을 접지하는 것</li><li><b>피뢰시스템 접지</b>: 뇌격전류를 안전하게 대지로 방류시키기 위한 접지</li></ul><p>이 세 가지는 시설 목적이 다르지만, 실제 시공에서는 아래 슬라이드의 '접지 시설 방식(단독/공통/통합)'과 결합되어 적용됩니다.</p>",
        "formulas": [],
        "keywords": [
          "계통접지",
          "보호접지",
          "피뢰시스템접지"
        ]
      },
      {
        "title": "접지시스템의 구분 (2) - 시설 방식별 분류",
        "content": "<p>접지극을 어떻게 배치하느냐에 따라 다음 3가지 방식으로 나뉩니다.</p><table><tr><th>방식</th><th>설명</th></tr><tr><td>단독접지</td><td>특고압 계통의 접지극과 저압 접지계통의 접지극을 독립적으로 각각 시설</td></tr><tr><td>공통접지</td><td>(특)고압 접지계통과 저압 접지계통을 등전위 형성을 위해 공통으로 접지</td></tr><tr><td>통합접지</td><td>계통접지·통신접지·피뢰접지 등 건축물의 모든 접지극을 통합하여 접지</td></tr></table><p>최근 KEC는 접지극 간 전위차로 인한 사고 예방과 시공 효율을 위해 <b>통합접지 및 공통접지</b>를 적극 권장하는 방향으로 개정되어 왔습니다.</p><svg viewBox='0 0 400 160' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:420px;height:auto'><rect x='10' y='10' width='110' height='40' rx='6' fill='#dbeafe' stroke='#2563eb'/><text x='65' y='34' font-size='12' text-anchor='middle'>특고압 접지</text><rect x='150' y='10' width='110' height='40' rx='6' fill='#dcfce7' stroke='#16a34a'/><text x='205' y='34' font-size='12' text-anchor='middle'>저압 접지</text><rect x='290' y='10' width='100' height='40' rx='6' fill='#fee2e2' stroke='#dc2626'/><text x='340' y='34' font-size='12' text-anchor='middle'>피뢰 접지</text><line x1='65' y1='50' x2='65' y2='120' stroke='#333'/><line x1='205' y1='50' x2='205' y2='120' stroke='#333'/><line x1='340' y1='50' x2='340' y2='120' stroke='#333' stroke-dasharray='4 2'/><line x1='65' y1='120' x2='340' y2='120' stroke='#333' stroke-dasharray='4 2'/><rect x='150' y='130' width='100' height='24' fill='#fef9c3' stroke='#ca8a04'/><text x='200' y='146' font-size='11' text-anchor='middle'>통합 접지극</text></svg>",
        "formulas": [],
        "keywords": [
          "단독접지",
          "공통접지",
          "통합접지"
        ]
      },
      {
        "title": "접지도체의 최소 단면적 기준",
        "content": "<p>접지도체는 고장전류를 안전하게 흘려보낼 수 있는 충분한 굵기를 가져야 합니다. KEC 기준(연동선 기준)은 다음과 같습니다.</p><table><tr><th>구분</th><th>최소 단면적</th></tr><tr><td>특고압·고압 전기설비용 접지도체</td><td>6㎟ 이상 (연동선)</td></tr><tr><td>중성점 접지용 접지도체</td><td>16㎟ 이상 (연동선, 예외 규정 있음)</td></tr><tr><td>피뢰시스템이 접속되는 경우</td><td>구리 16㎟ 또는 철 50㎟ 이상</td></tr><tr><td>저압 전기설비용(유연성 필요시)</td><td>다심 코드 등 1개 도체 0.75㎟ 이상, 기타 연동선 1.5㎟ 이상</td></tr></table><p style='color:#b45309'>※ 위 수치는 다수 자료에서 확인되었으나, 접지도체 단면적은 보호도체 계산식(S=√(I²t)/k) 및 예외 조항이 다양하므로 시험 대비 시 KEC 142.3(접지도체) 원문 표를 반드시 재확인하세요.</p>",
        "formulas": [],
        "keywords": [
          "접지도체",
          "단면적",
          "6㎟",
          "16㎟"
        ]
      },
      {
        "title": "보호도체의 단면적 계산",
        "content": "<p>보호도체(PE)의 단면적은 고장전류에 의한 열적 손상을 견딜 수 있도록 다음 공식으로 산정할 수 있습니다.</p><ul><li>선도체 단면적에 따라 표로 정한 최소 단면적을 적용하거나</li><li>계산식을 이용하여 산정</li></ul>",
        "formulas": [
          "S = \\dfrac{\\sqrt{I^2 t}}{k}"
        ],
        "keywords": [
          "보호도체",
          "단면적",
          "S=I2t/k"
        ]
      },
      {
        "title": "접지저항과 접지극의 시설",
        "content": "<p>접지극은 대지에 전기적으로 충분히 접촉되어야 하며, 다음과 같은 재료 및 방법이 활용됩니다.</p><ul><li>동봉, 동판, 접지동봉, 강관, 철망 등 다양한 재료 사용 가능</li><li>접지극은 지표면 하 <b>0.75m 이상</b> 깊이에 매설하는 것이 일반적 기준(토양 동결 심도 고려)</li><li>건축물·구조물의 철골, 철근 콘크리트를 접지극으로 활용하는 '구조체 접지'도 인정</li><li>접지저항 저감을 위해 접지극 병렬 연결, 접지저항 저감제 사용 등이 활용됨</li></ul><p style='color:#b45309'>※ 접지저항 허용값은 접지 목적(계통접지 vs 특별저압 등)에 따라 상이하며, 구체적 수치는 KEC 원문(142장) 확인이 필요합니다.</p><img src=\"images/전기설비기술기준/09.jpg\" alt=\"호주 가정집에 시설된 접지봉(earth rod) 실물 사진 (저작자: Ali K, 출처: Wikimedia Commons, 라이선스: CC BY-SA 3.0)\" style=\"max-width:100%;border-radius:8px;margin-top:1rem;\">",
        "formulas": [],
        "keywords": [
          "접지저항",
          "접지극",
          "매설깊이"
        ]
      },
      {
        "title": "감전보호 - 누전차단기(RCD)",
        "content": "<p>누전차단기(ELB, RCD)는 지락(누전) 발생 시 고감도·고속으로 회로를 차단하여 감전사고를 예방하는 장치입니다.</p><ul><li>인체감전보호용은 정격감도전류 30mA 이하, 동작시간 0.03초 이내인 고감도형이 일반적으로 사용됩니다.</li><li>욕실, 옥외 콘센트 등 습기가 많은 장소, 이동형 전기기계기구 등에 시설이 요구됩니다.</li><li>주개폐기에 반드시 시설해야 하는 장소(예: 대지전압 150V 초과 저압 전로 인입구 등)가 규정되어 있습니다.</li></ul><p style='color:#b45309'>※ 정격감도전류·동작시간의 정확한 수치와 예외 조건은 KEC 211장(감전에 대한 보호) 원문을 확인하세요.</p><img src=\"images/전기설비기술기준/10.jpg\" alt=\"Toshiba사 누전차단기(ELCB LB-120C) 실물 제품 사진 (저작자: Qurren, 출처: Wikimedia Commons, 라이선스: CC BY-SA 4.0)\" style=\"max-width:100%;border-radius:8px;margin-top:1rem;\">",
        "formulas": [],
        "keywords": [
          "누전차단기",
          "RCD",
          "감전보호",
          "30mA"
        ]
      },
      {
        "title": "감전보호 - 등전위본딩",
        "content": "<p>등전위본딩(Equipotential Bonding)은 건축물 내 금속제 배관, 구조체, 전기설비의 노출도전부 등을 전기적으로 연결하여 전위차를 없애는 것입니다.</p><ul><li><b>주등전위본딩</b>: 수도관, 가스관, 난방배관, 건축물 철골 등 주요 금속부분을 인입구 부근에서 접지도체에 연결</li><li><b>보조등전위본딩</b>: 욕실 등 특정 구역에서 국부적으로 시행하는 본딩</li><li>본딩의 목적은 낙뢰·지락 시 서로 다른 도전부 사이의 위험한 전위차 발생을 방지하는 것</li></ul>",
        "formulas": [],
        "keywords": [
          "등전위본딩",
          "주등전위본딩",
          "보조등전위본딩"
        ]
      },
      {
        "title": "전선로 개요 - 가공전선로",
        "content": "<p>가공전선로는 지지물(전주, 철탑 등)에 의해 공중에 가설되는 전선로입니다.</p><ul><li>구성요소: 전선, 지지물(목주, 철주, 철근콘크리트주, 철탑), 애자, 완금, 지선 등</li><li>가공전선의 종류: 나전선, 절연전선, 다심형 전선, 케이블 등</li><li>지지물에는 안전율(예: 철탑 등에서 요구되는 기초 안전율) 기준이 적용됩니다.</li><li>강풍, 빙설 등 기상 조건에 대한 하중 검토가 필요합니다(풍압하중, 수직하중 등).</li></ul><img src=\"images/전기설비기술기준/12.jpg\" alt=\"방글라데시의 가공전선로 지지물(전주)과 애자, 전선 배치 실물 사진 (저작자: Wiki Ruhan, 출처: Wikimedia Commons, 라이선스: CC BY-SA 4.0)\" style=\"max-width:100%;border-radius:8px;margin-top:1rem;\">",
        "formulas": [],
        "keywords": [
          "가공전선로",
          "지지물",
          "전주"
        ]
      },
      {
        "title": "전선로 개요 - 지중전선로",
        "content": "<p>지중전선로는 케이블을 지중에 매설하여 시설하는 전선로로, 도심지 미관 및 안전성 확보를 위해 채택됩니다.</p><ul><li>매설 방식: 직접매설식, 관로식, 암거식(전력구식)</li><li>사용 전선: 반드시 케이블을 사용해야 함(나전선 사용 불가)</li><li>직접매설식의 경우 매설 깊이는 차량 등 중량물의 압력을 받을 우려가 있는 장소와 그 밖의 장소에 따라 다르게 규정됨</li><li>지중함(맨홀 등) 설치 시 가스 폭발 방지를 위한 환기장치 등 안전조치 필요</li></ul><p style='color:#b45309'>※ 매설 깊이 등 구체적 수치는 KEC 334장(지중전선로) 원문 확인 필요.</p>",
        "formulas": [],
        "keywords": [
          "지중전선로",
          "직접매설식",
          "관로식",
          "암거식"
        ]
      },
      {
        "title": "전선의 종류와 굵기 선정",
        "content": "<p>전선 굵기는 다음 요소를 종합적으로 고려하여 선정합니다.</p><ul><li><b>허용전류</b>: 전선에 지속적으로 흘릴 수 있는 최대 전류(발열 한계 고려)</li><li><b>전압강하</b>: 부하까지의 거리와 전류에 따른 전압 손실이 허용범위 이내여야 함</li><li><b>기계적 강도</b>: 가섭선의 인장강도, 처짐 등을 고려한 최소 굵기 기준</li><li><b>단락전류에 대한 열적 강도</b>: 순간적인 단락사고 시 전선이 손상되지 않을 것</li></ul><p>일반적으로 전선 굵기 선정 시 허용전류를 만족하는 굵기와 전압강하를 만족하는 굵기 중 더 큰 값을 채택합니다.</p>",
        "formulas": [],
        "keywords": [
          "전선굵기",
          "허용전류",
          "전압강하",
          "기계적강도"
        ]
      },
      {
        "title": "저압 옥내배선의 시설 원칙",
        "content": "<p>저압 옥내배선은 시설 장소, 환경(건조/습기, 노출/은폐, 부식성 가스 유무 등)에 따라 적절한 공사방법을 선택해야 합니다.</p><ul><li>대표 공사방법: 애자사용공사, 합성수지관공사, 금속관공사, 가요전선관공사, 케이블공사, 버스덕트공사 등</li><li>배선설비는 시설 장소의 주위온도, 화재위험, 폭발위험 등을 고려하여 선정</li><li>전선의 접속은 전기저항을 증가시키지 않고, 인장강도를 20% 이상 감소시키지 않도록 시공</li></ul>",
        "formulas": [],
        "keywords": [
          "저압옥내배선",
          "애자사용공사",
          "합성수지관공사",
          "금속관공사"
        ]
      },
      {
        "title": "과전류차단기와 배선차단기(MCCB/NFB)",
        "content": "<p>과전류차단기는 전로에 과전류(과부하 전류, 단락전류)가 흘렀을 때 자동으로 회로를 차단하여 전선·기기를 보호하는 장치입니다.</p><ul><li>대표 종류: 배선용차단기(MCCB, NFB), 퓨즈, 누전차단기(겸용형 포함)</li><li>저압전로 인입구 등 전원측에는 반드시 과전류차단기를 시설</li><li>분기회로에는 간선 보호를 위한 차단기와 별도로 각 분기회로별 차단기를 시설</li><li>차단기의 정격전류는 전선의 허용전류를 초과하지 않는 범위에서 선정하는 것이 원칙</li></ul>",
        "formulas": [],
        "keywords": [
          "과전류차단기",
          "배선용차단기",
          "MCCB",
          "퓨즈"
        ]
      },
      {
        "title": "분전반의 시설기준",
        "content": "<p>분전반은 인입된 전원을 각 분기회로로 분배하고 각 회로를 개폐·보호하는 장치입니다.</p><ul><li>점검 및 조작이 쉬운 위치에 시설하며, 노출된 충전부가 없도록 함</li><li>회로마다 명판(회로명) 표시를 하여 유지보수 시 식별이 용이하도록 함</li><li>침수 우려가 있는 장소에는 방수형 사용, 옥외 시설 시 방수함 등 사용</li><li>각 분기회로에는 과전류차단기 및 필요 시 누전차단기 시설</li></ul><img src=\"images/전기설비기술기준/17.jpg\" alt=\"주택용 분전반 내부 배선 및 차단기 실물 사진 (저작자: Project Kei / Keita.Honda, 출처: Wikimedia Commons, 라이선스: CC BY-SA 4.0)\" style=\"max-width:100%;border-radius:8px;margin-top:1rem;\">",
        "formulas": [],
        "keywords": [
          "분전반",
          "분기회로",
          "명판"
        ]
      },
      {
        "title": "이격거리 개념과 목적",
        "content": "<p>이격거리(clearance)는 전선 상호간, 전선과 건조물·수목·도로 등 사이에 확보해야 하는 최소 안전거리입니다.</p><ul><li><b>목적</b>: 전선 간 접촉/단락 방지, 감전사고 방지, 화재 예방</li><li>전압이 높을수록, 그리고 사람의 접근 가능성이 높은 장소일수록 더 큰 이격거리가 요구됩니다.</li><li>대표 항목: 전선 상호간 이격거리, 전선과 건조물과의 이격거리, 전선과 식물(수목)과의 이격거리, 가공전선과 도로·철도·삭도 등과의 이격거리</li></ul><p style='color:#b45309'>※ 구체적인 거리 수치(예: 저압/고압/특고압별 몇 m)는 전압별·시설물별로 세분화되어 있으므로 KEC 원문 표를 확인해야 합니다.</p>",
        "formulas": [],
        "keywords": [
          "이격거리",
          "안전거리"
        ]
      },
      {
        "title": "전선 상호간 및 조영재와의 이격거리 개요",
        "content": "<p>가공전선이 조영물(건축물)의 위, 옆, 아래를 지나갈 때 전압 구분(저압/고압/특고압)별로 다른 이격거리가 요구됩니다.</p><ul><li>일반적으로 전압이 높아질수록 이격거리가 커지는 경향</li><li>절연전선 사용 여부, 케이블 사용 여부에 따라 완화 규정이 적용되는 경우가 있음</li><li>인체 접촉 위험이 큰 조영재 상부(옥상) 통과 시 더 엄격한 기준 적용</li></ul><p style='color:#b45309'>※ 정확한 미터(m) 수치는 KEC 222, 332장 등 원문 확인이 필요합니다. 시험에서는 '전압이 높을수록 이격거리가 커진다'는 경향성과 상대적 크기 비교 문제가 자주 출제됩니다.</p>",
        "formulas": [],
        "keywords": [
          "조영재",
          "이격거리",
          "가공전선"
        ]
      },
      {
        "title": "피뢰시스템 개요",
        "content": "<p>피뢰시스템(Lightning Protection System, LPS)은 낙뢰로부터 건축물, 설비, 인명을 보호하기 위한 설비입니다.</p><ul><li>기본 구성: 수뢰부시스템(피뢰침 등), 인하도선시스템, 접지극시스템</li><li>추가로 서지보호장치(SPD)를 설치하여 유도뢰 등에 의한 전자기기 손상을 방지</li><li>피뢰설비의 설치 대상: 높이 20m 이상 건축물 등 일정 기준 이상 구조물(관련 법령·기준에 따름)</li></ul><img src=\"images/전기설비기술기준/20.jpg\" alt=\"건물 옥상에 설치된 피뢰침(돌침) 실물 사진 (저작자: Dilshan Jayakody, 출처: Wikimedia Commons, 라이선스: CC BY-SA 2.0)\" style=\"max-width:100%;border-radius:8px;margin-top:1rem;\">",
        "formulas": [],
        "keywords": [
          "피뢰시스템",
          "LPS",
          "수뢰부",
          "인하도선"
        ]
      },
      {
        "title": "피뢰시스템 - 수뢰부시스템",
        "content": "<p>수뢰부시스템은 낙뢰를 직접 받아들이는 부분으로, 다음과 같은 방식이 있습니다.</p><ul><li>돌침방식(피뢰침): 뾰족한 금속 돌침을 이용해 낙뢰를 유도</li><li>수평도체방식: 수평으로 설치한 도체를 이용</li><li>메시도체방식: 그물망 형태의 도체로 건물 전체를 덮는 방식</li></ul><p>일반적으로 여러 방식을 조합하여 보호각, 회전구체법, 메시법 등 설계 방법에 따라 보호범위를 산정합니다.</p>",
        "formulas": [],
        "keywords": [
          "수뢰부시스템",
          "돌침방식",
          "회전구체법",
          "메시법"
        ]
      },
      {
        "title": "피뢰시스템 - 인하도선시스템과 접지극시스템",
        "content": "<p><b>인하도선시스템</b>은 수뢰부에서 받은 뇌격전류를 접지극까지 안전하게 흘려보내는 도체입니다.</p><ul><li>가능한 최단거리로, 여러 경로를 통해 균등 분산되도록 배치</li><li>병렬로 다수 설치하여 전류를 분산시키는 것이 유리</li></ul><p><b>접지극시스템</b>은 뇌격전류를 대지로 최종 방류하는 부분입니다.</p><ul><li>환상도체접지극, 수직접지극, 방사형접지극 등 형태 사용</li><li>다른 접지(계통접지, 통신접지)와 통합하여 시설하는 통합접지 방식이 권장됨</li></ul>",
        "formulas": [],
        "keywords": [
          "인하도선시스템",
          "접지극시스템",
          "통합접지"
        ]
      },
      {
        "title": "서지보호장치(SPD)",
        "content": "<p>SPD(Surge Protective Device)는 낙뢰나 개폐 서지에 의한 과전압으로부터 전기·전자기기를 보호하는 장치입니다.</p><ul><li>전원선, 통신선 등 인입구 부근에 설치</li><li>피뢰시스템과 연계하여 유도뢰서지, 간접뢰에 의한 피해까지 저감</li><li>정보통신설비, 정밀 전자장비가 많은 건물일수록 SPD 시설의 중요성이 커짐</li></ul>",
        "formulas": [],
        "keywords": [
          "SPD",
          "서지보호장치",
          "과전압보호"
        ]
      },
      {
        "title": "특수장소 시설기준 - 폭발위험장소",
        "content": "<p>가연성 가스, 분진, 인화성 물질 등이 존재하여 폭발 위험이 있는 장소에서는 일반 전기설비와 다른 방폭 기준이 적용됩니다.</p><ul><li>방폭구조 전기기기 사용 의무(내압방폭구조, 안전증방폭구조, 본질안전방폭구조 등)</li><li>배선은 손상되지 않도록 보호관 등을 사용하고, 접속부는 최소화</li><li>폭발성 가스가 체류할 우려가 있는 장소는 위험장소 등급(0종, 1종, 2종 장소 등 국제기준 기반 분류)에 따라 설비 요건이 세분화됨</li></ul>",
        "formulas": [],
        "keywords": [
          "폭발위험장소",
          "방폭구조",
          "위험장소등급"
        ]
      },
      {
        "title": "특수장소 시설기준 - 화약류 저장소 등",
        "content": "<p>화약류 저장소, 가연성 분진이 많은 장소, 가연성 가스가 존재하는 장소, 위험물이 존재하는 장소 등은 KEC에서 별도의 특수시설 규정을 적용받습니다.</p><ul><li>화약류 저장소 안에는 전기설비 시설을 원칙적으로 금지하며, 조명 등 불가피한 경우에 한해 엄격한 기준하에 허용</li><li>배선은 금속관공사, 케이블공사 등 기계적 손상에 강한 공사방법을 사용</li><li>개폐기·차단기는 원칙적으로 저장소 밖에 시설</li></ul>",
        "formulas": [],
        "keywords": [
          "화약류저장소",
          "특수장소",
          "방폭"
        ]
      },
      {
        "title": "특수장소 - 의료장소, 흥행장 등",
        "content": "<p>병원의 수술실 등 의료장소, 극장 등 흥행장, 진열장, 옥외 저장소 등도 KEC에서 특수 규정을 두고 있습니다.</p><ul><li>의료장소: 절연저항 저하로 인한 사고 위험이 인체에 치명적일 수 있어, 비접지 배선방식(IT계통) 및 절연감시장치 사용 등 강화된 기준 적용</li><li>흥행장: 무대 조명 설비, 이동형 전기기계기구 등에 대한 감전·화재 방지 기준 적용</li></ul>",
        "formulas": [],
        "keywords": [
          "의료장소",
          "흥행장",
          "IT계통"
        ]
      },
      {
        "title": "수변전설비 기초 개념",
        "content": "<p>수변전설비는 한전 등으로부터 특고압/고압 전력을 수전받아 각 부하에 맞는 전압으로 변성하여 배전하는 설비입니다.</p><ul><li>주요 구성: 수전설비(인입구, 계기용변성기, 개폐기), 변전설비(변압기), 배전설비(배전반, 차단기)</li><li>큐비클(Cubicle)형 수배전반: 각종 기기를 하나의 함체에 집약하여 안전성과 공간효율을 높인 형태</li><li>변압기 결선방식(Y-Y, Δ-Δ, Δ-Y 등)에 따라 특성이 다름</li></ul>",
        "formulas": [],
        "keywords": [
          "수변전설비",
          "큐비클",
          "변압기"
        ]
      },
      {
        "title": "수변전설비의 보호협조",
        "content": "<p>보호협조란 사고 발생 시 사고 구간만 신속·정확하게 차단하고, 건전 구간의 전력공급은 유지되도록 보호기기의 동작 특성을 조정하는 것입니다.</p><ul><li>계전기(과전류계전기 OCR, 지락과전류계전기 OCGR 등)와 차단기의 협조 설계</li><li>차단기 정격차단전류는 예상 최대 단락전류 이상이어야 함</li><li>변압기 1차측·2차측 보호기기 간 동작 시간차(협조시간)를 두어 선택차단 실현</li></ul>",
        "formulas": [],
        "keywords": [
          "보호협조",
          "계전기",
          "차단기",
          "OCR"
        ]
      },
      {
        "title": "분산형전원설비(태양광 등) 개요",
        "content": "<p>KEC 500편은 태양광, 풍력, 연료전지 등 분산형전원(신재생에너지 발전설비)의 계통연계 기준을 규정합니다.</p><ul><li>계통연계형: 상용 전력계통과 연계하여 잉여전력을 역송(판매)하거나 부족분을 수전</li><li>독립형(계통 비연계): ESS(에너지저장장치) 등을 통해 자체적으로 전력 공급</li><li>단독운전 방지 기능: 정전 시 계통과 분리되어 인명·설비 안전 확보(작업자 감전 방지)</li></ul>",
        "formulas": [],
        "keywords": [
          "분산형전원",
          "태양광",
          "계통연계",
          "단독운전방지"
        ]
      },
      {
        "title": "태양광 발전설비의 KEC 주요 기준",
        "content": "<p>태양광 발전설비 시설 시 고려해야 할 주요 KEC 기준 항목입니다.</p><ul><li>모듈 배선 시 직류(DC) 전로에 대한 절연, 접지 기준 적용</li><li>인버터(PCS)를 통해 직류를 교류로 변환 후 계통 연계</li><li>어레이 개폐기, 역류방지 다이오드, 서지보호장치 등 보호기기 시설</li><li>지붕 설치형의 경우 방화, 구조 안전(하중) 기준도 함께 고려</li></ul><p style='color:#b45309'>※ 최근 KEC 개정에서 분산전원 관련 조항(505장 등)이 지속적으로 세분화되고 있으므로, 최신 조문 확인이 특히 중요한 분야입니다.</p>",
        "formulas": [],
        "keywords": [
          "태양광",
          "인버터",
          "PCS",
          "역류방지다이오드"
        ]
      },
      {
        "title": "전기안전관리 제도 개요",
        "content": "<p>전기안전관리는 전기설비의 공사·유지·운용을 안전하게 관리하기 위한 제도로, 전기사업법 및 관련 법령에 근거합니다.</p><ul><li>일정 규모 이상 전기설비는 전기안전관리자 선임 의무</li><li>정기검사, 사용전검사 등을 통해 설비의 기술기준 적합 여부 확인</li><li>최근에는 안전관리 대행제도, 원격 감시(IoT 기반 안전관리) 등 제도 변화가 진행 중</li></ul><p style='color:#b45309'>※ 안전관리자 선임 기준 용량, 검사 주기 등 세부 수치는 전기안전관리법 시행규칙 등 최신 법령을 확인해야 합니다.</p>",
        "formulas": [],
        "keywords": [
          "전기안전관리",
          "안전관리자",
          "사용전검사"
        ]
      },
      {
        "title": "전기설비 사용전점검/검사 제도",
        "content": "<p>새로 설치되거나 변경된 전기설비는 사용 전에 KEC 등 기술기준 적합 여부를 확인받아야 합니다.</p><ul><li>자가용 전기설비: 사용전검사(현재는 사용전점검 등 제도로 운영), 정기검사 등을 통해 안전성 확인</li><li>일반용 전기설비: 한국전기안전공사의 정기 점검을 통해 관리</li><li>점검 항목: 절연저항, 접지저항, 배선상태, 보호장치 동작 여부 등</li></ul>",
        "formulas": [],
        "keywords": [
          "사용전점검",
          "정기검사",
          "한국전기안전공사"
        ]
      },
      {
        "title": "절연저항의 개념과 측정",
        "content": "<p>절연저항은 전로와 대지 사이, 또는 전선 상호간의 절연 성능을 나타내는 지표로, 절연저항계(메거, Megger)로 측정합니다.</p><ul><li>절연저항이 낮으면 누전 및 감전, 화재의 위험이 커짐</li><li>사용전압 및 회로 구분(예: SELV/PELV, FELV, 그 밖의 회로)에 따라 시험전압(DC)과 최소 절연저항 기준값이 다르게 규정됨</li><li>측정 시에는 전자기기 손상 방지를 위해 관련 기기를 분리하고 측정하는 등 주의가 필요</li></ul><p style='color:#b45309'>※ 전압 구간별 정확한 절연저항 기준값(예: 몇 MΩ 이상)은 자료마다 표기가 상이하게 검색되어 확정하기 어려우므로, 반드시 KEC 132(전로의 절연저항 및 절연내력) 원문 표를 직접 확인하시기 바랍니다.</p>",
        "formulas": [],
        "keywords": [
          "절연저항",
          "메거",
          "절연내력"
        ]
      },
      {
        "title": "절연내력시험",
        "content": "<p>절연내력시험은 전로에 일정 시험전압을 인가하여 절연이 파괴되지 않는지 확인하는 시험입니다.</p><ul><li>시험전압은 최대사용전압에 일정 배율을 곱하여 산정</li><li>연속하여 일정 시간(예: 10분간) 시험전압을 가하여 절연파괴 여부 확인</li><li>변압기, 회전기, 케이블 등 기기 종류별로 시험전압 배율 및 최저 시험전압이 별도로 규정됨</li></ul><p style='color:#b45309'>※ 기기별 배율(예: 1.5배, 2배 등) 수치는 KEC 및 관련 규정 원문에서 최신 값을 확인하세요.</p>",
        "formulas": [],
        "keywords": [
          "절연내력시험",
          "시험전압"
        ]
      },
      {
        "title": "전선의 접속 및 접촉방지 기준",
        "content": "<p>전선 접속 시 지켜야 할 일반 원칙은 다음과 같습니다.</p><ul><li>전기저항을 증가시키지 않도록 접속</li><li>인장강도를 20% 이상 감소시키지 않도록 함(원칙)</li><li>접속 부분은 절연전선의 절연물과 동등 이상의 절연효력이 있는 것으로 피복하거나 접속함 등을 사용</li><li>도체의 재질이 다른 전선 상호 접속 시 전기화학적 부식에 유의</li></ul>",
        "formulas": [],
        "keywords": [
          "전선접속",
          "인장강도",
          "절연피복"
        ]
      },
      {
        "title": "고압·특고압 전기설비의 시설 일반",
        "content": "<p>고압 및 특고압 전기설비는 저압 설비보다 강화된 안전기준이 적용됩니다.</p><ul><li>발전소·변전소·개폐소 등의 울타리·담 등의 시설(외부인 접근 방지) 기준</li><li>고압·특고압 기기 주위 최소 이격거리 및 위험 표지 설치 의무</li><li>특고압 가공전선로는 지지물 종류, 전선 굵기, 안전율 등에서 더 엄격한 기준 적용</li><li>특고압을 직접 저압으로 변성하는 것은 원칙적으로 금지되며 단계적 변성 원칙 적용</li></ul>",
        "formulas": [],
        "keywords": [
          "고압설비",
          "특고압설비",
          "울타리",
          "이격거리"
        ]
      },
      {
        "title": "전기설비기술기준 핵심 요약 및 학습 전략",
        "content": "<p>전기설비기술기준·KEC 과목은 방대한 조문을 다루므로 다음 전략으로 학습하는 것이 효율적입니다.</p><ul><li>전압 구분(저압/고압/특고압), 접지 관련 정의와 굵기 기준을 최우선으로 암기</li><li>이격거리, 절연저항 등 '수치 암기형' 문제는 최근 기출 경향과 최신 개정 여부를 함께 확인</li><li>KEC는 지속적으로 개정되므로, 시험 직전에는 반드시 최신 공식 자료(한국전기기술기준위원회, 국가법령정보센터)로 최종 수치를 재확인</li><li>개념(목적, 원리)을 먼저 이해하고 세부 수치는 표 형태로 정리하여 암기</li></ul>",
        "formulas": [],
        "keywords": [
          "학습전략",
          "핵심요약",
          "KEC"
        ]
      }
    ]
  }
];
