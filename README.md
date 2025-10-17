<div align="center">

# 🎨 PM DEV Design System

**모던하고 확장 가능한 React 컴포넌트 라이브러리**

<img width="1703" alt="PM DEV Design System Preview" src="https://github.com/user-attachments/assets/6ca71962-ee36-4c4e-a8c0-bc5bf15b0344" />

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9+-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.0+-61dafb.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4+-38bdf8.svg)](https://tailwindcss.com/)
[![Storybook](https://img.shields.io/badge/Storybook-8.4+-ff4785.svg)](https://storybook.js.org/)
[![pnpm](https://img.shields.io/badge/pnpm-9.15+-F69220.svg)](https://pnpm.io/)

[데모 보기](#) • [Storybook 문서](#) • [기여하기](#)

</div>

---

## 📋 목차

- [소개](#-소개)
- [주요 특징](#-주요-특징)
- [시작하기](#-시작하기)
- [컴포넌트](#-컴포넌트)
- [사용 방법](#-사용-방법)
- [개발 가이드](#-개발-가이드)
- [프로젝트 구조](#-프로젝트-구조)
- [기술 스택](#-기술-스택)

---

## 🌟 소개

PM DEV Design System은 현대적인 웹 애플리케이션을 위한 고품질 React 컴포넌트 라이브러리입니다.
일관된 디자인 언어와 최고의 개발 경험을 제공하며, Tailwind CSS와 TypeScript로 구축되었습니다.

## ✨ 주요 특징

- 🎯 **TypeScript 완벽 지원** - 타입 안전성과 자동완성
- 🎨 **Tailwind CSS 기반** - 유연한 스타일링과 커스터마이징
- 📦 **Tree-shakable** - 최적화된 번들 크기
- 📖 **Storybook 문서화** - 인터랙티브한 컴포넌트 문서
- ♿ **접근성** - ARIA 표준 준수
- 🔧 **확장 가능** - CVA(Class Variance Authority)를 활용한 변형 관리
- ⚡ **빠른 개발** - Turborepo 기반 모노레포 구조
- 🎭 **다크모드 지원** - 테마 전환 기능

## 🚀 시작하기

### 요구사항

- Node.js >= 18
- pnpm >= 9

### 설치

```bash
# 저장소 클론
git clone https://github.com/yourusername/pm_dev_design_system.git

# 디렉토리 이동
cd pm_dev_design_system

# 의존성 설치
pnpm install
```

### 개발 서버 실행

```bash
# 모든 패키지 개발 모드로 실행
pnpm dev

# Storybook 실행
pnpm storybook

# UI 패키지만 실행
pnpm dev:ui
```

### 빌드

```bash
# 모든 패키지 빌드
pnpm build

# UI 패키지만 빌드
pnpm build:ui
```

## 🧩 컴포넌트

### 폼 요소

- **Button** - 다양한 스타일과 크기의 버튼 컴포넌트
- **Input** - 텍스트 입력 필드
- **Checkbox** - 체크박스
- **Radio** - 라디오 버튼 및 그룹
- **Switch** - 토글 스위치

### 데이터 표시

- **Card** - 컨텐츠 컨테이너
- **Badge** - 상태 표시 뱃지
- **Avatar** - 사용자 아바타
- **Progress** - 진행률 표시
- **Alert** - 알림 메시지

### 네비게이션

- **Tabs** - 탭 네비게이션
- **Dropdown** - 드롭다운 메뉴

### 오버레이

- **Modal** - 모달 대화상자
- **Tooltip** - 툴팁

### 피드백

- **Spinner** - 로딩 인디케이터

## 💻 사용 방법

### 컴포넌트 임포트

```tsx
import { Button, Card, Badge, Input } from '@repo/ui';

function App() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>환영합니다!</Card.Title>
        <Card.Description>PM DEV Design System</Card.Description>
      </Card.Header>
      <Card.Content>
        <Input placeholder='이름을 입력하세요' />
      </Card.Content>
      <Card.Footer>
        <Button variant='primary' size='lg'>
          시작하기
        </Button>
        <Badge variant='success'>새로움</Badge>
      </Card.Footer>
    </Card>
  );
}
```

### 스타일 커스터마이징

컴포넌트는 Tailwind CSS 클래스를 통해 쉽게 커스터마이징할 수 있습니다:

```tsx
<Button className='custom-class' variant='outline'>
  커스텀 버튼
</Button>
```

### 유틸리티 사용

```tsx
import { cn } from '@repo/ui';

// 클래스명 병합 유틸리티
const className = cn('base-class', condition && 'conditional-class', 'additional-class');
```

## 🛠 개발 가이드

### 프로젝트 구조

```
pm_dev_design_system/
├── packages/
│   ├── ui/                    # UI 컴포넌트 라이브러리
│   │   ├── src/
│   │   │   ├── components/   # React 컴포넌트
│   │   │   ├── lib/          # 유틸리티 함수
│   │   │   └── styles/       # 글로벌 스타일
│   │   └── package.json
│   ├── fonts/                 # 폰트 패키지
│   └── tsconfig/              # 공유 TypeScript 설정
├── apps/                      # 애플리케이션 (향후 추가)
├── package.json
└── turbo.json
```

### 새 컴포넌트 추가하기

1. `packages/ui/src/components/` 에 컴포넌트 파일 생성
2. Storybook 스토리 파일 작성 (`.stories.tsx`)
3. `packages/ui/src/index.ts` 에 export 추가
4. TypeScript 타입 정의 포함

### 스크립트

| 명령어                 | 설명                           |
| ---------------------- | ------------------------------ |
| `pnpm dev`             | 모든 패키지를 개발 모드로 실행 |
| `pnpm build`           | 모든 패키지 빌드               |
| `pnpm storybook`       | Storybook 개발 서버 실행       |
| `pnpm build-storybook` | Storybook 정적 빌드            |
| `pnpm dev:ui`          | UI 패키지만 개발 모드로 실행   |
| `pnpm build:ui`        | UI 패키지만 빌드               |

## 🔧 기술 스택

### 핵심 기술

- **React 18** - UI 라이브러리
- **TypeScript 5** - 타입 안전성
- **Tailwind CSS 3** - 유틸리티 우선 CSS 프레임워크

### 도구

- **Turborepo** - 고성능 빌드 시스템
- **pnpm** - 빠르고 효율적인 패키지 매니저
- **Storybook 8** - 컴포넌트 문서화 및 테스트
- **tsup** - 빠른 TypeScript 번들러
- **Vite** - 차세대 프론트엔드 빌드 도구

### 유틸리티

- **Class Variance Authority (CVA)** - 변형 관리
- **clsx** - 조건부 클래스명
- **tailwind-merge** - Tailwind 클래스 병합

---

<div align="center">

### 🤝 기여

기여는 언제나 환영합니다! 이슈를 열거나 풀 리퀘스트를 제출해 주세요.

### 📝 라이선스

MIT License

### 💬 문의

프로젝트에 대한 질문이나 제안사항이 있으시면 언제든지 연락 주세요.

---

**Made with ❤️ by PM DEV Team**

</div>
