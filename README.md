# 🤖 김비서 대시보드

마케팅팀을 위한 프리미엄 대시보드 시스템

## 🌐 Live Demo
**GitHub Pages로 호스팅 중:**
- 🔗 https://dainreve.github.io/kim-bb

## 📋 주요 기능

### 1. 대시보드 (`dashboard.html`)
- 📋 할 일 목록 (우선순위별 분류)
- 📅 이번 주 일정
- 📊 프로젝트 진행률
- 💰 매출 요약

### 2. 회의 결과 (`meeting-result.html`)
- 회의 기본 정보
- 논의 내용 요약
- 액션 아이템 추적
- 🖨️ 인쇄 기능

### 3. 매출 분석 (`chart.html`)
- 📈 월별 매출 추이 (Canvas 차트)
- 📊 상품별 비교 (막대 그래프)
- 통계 정보

### 4. 업무 프로세스 (`process.html`)
- 콘텐츠 마케팅 5단계 프로세스
- 단계별 설명 및 진행 상태

### 5. 사이트 분석 (`report.html`)
- Subtrac.kr 웹사이트 분석
- 디자인, UX, 기능성 평가
- 개선 방안 제시

## 🎨 디자인 특징

- ✨ **Glassmorphism** - 유리 같은 반투명 UI
- 🌓 **Dark/Light Mode** - 다크/라이트 모드 지원
- 📱 **Responsive Design** - 모바일 최적화
- 🎯 **Smooth Navigation** - 부드러운 페이지 전환

## 📊 데이터 파일

```
📂 김비서-데이터/
├── 업무목록.csv          # 마케팅팀 업무 목록
├── 매출데이터.csv         # 월별 매출 데이터
├── 주간일정.txt           # 이번 주 일정
├── 프로젝트현황.csv       # 진행 중인 프로젝트
└── 회의록.txt            # 지난 회의 기록
```

## 🤖 자동화 기능

### 김비서 브리핑
```bash
bash .claude/briefing.sh
```

다음을 자동으로 처리합니다:
- 📂 폴더 데이터 스캔
- 📊 대시보드 상태 확인
- 📋 오늘의 주요 업무 브리핑
- 📅 이번 주 일정 요약

## 🔐 환경 변수

`.env.local` 파일에 다음을 설정하세요:
```
GITHUB_TOKEN=your_token_here
```

**⚠️ 주의**: `.env.local`은 `.gitignore`에 등록되어 Git에 커밋되지 않습니다.

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Design**: Glassmorphism, Gradient, Backdrop Filter
- **Storage**: CSV, TXT (로컬 데이터)
- **Automation**: Bash Script
- **Deployment**: GitHub Pages

## 📦 파일 구조

```
.
├── index.html              # 메인 페이지
├── dashboard.html          # 대시보드
├── meeting-result.html     # 회의 결과
├── chart.html             # 매출 차트
├── process.html           # 업무 프로세스
├── report.html            # 사이트 분석
├── .claude/               # 자동화 스크립트
│   ├── briefing.sh        # 브리핑 자동화
│   └── claude.json        # Claude Code 설정
└── .env.local             # 환경변수 (Git 무시)
```

## 🚀 시작하기

1. **로컬에서 실행**
   ```bash
   # index.html을 브라우저로 열기
   open index.html
   ```

2. **라이브 서버 실행** (선택사항)
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx http-server
   ```

3. **GitHub Pages 접속**
   https://dainreve.github.io/kim-bb

## 📝 라이선스

Private Repository

---

**만든이**: Claude Code  
**최종 수정**: 2026-05-14
