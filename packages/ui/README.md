# @repo/ui

공통 UI 컴포넌트 라이브러리입니다. Tailwind CSS 기반으로 만들어진 15개의 재사용 가능한 컴포넌트를 제공합니다.

## 설치

```bash
pnpm install
```

## 개발

### 스토리북 실행

```bash
pnpm storybook
```

### 빌드

```bash
pnpm build
```

## 컴포넌트 목록

1. **Button** - 다양한 스타일과 크기의 버튼 컴포넌트
2. **Input** - 텍스트 입력 필드 컴포넌트
3. **Card** - 카드 레이아웃 컴포넌트
4. **Badge** - 배지 컴포넌트
5. **Avatar** - 아바타 이미지 컴포넌트
6. **Modal** - 모달 다이얼로그 컴포넌트
7. **Dropdown** - 드롭다운 메뉴 컴포넌트
8. **Checkbox** - 체크박스 컴포넌트
9. **Radio** - 라디오 버튼 컴포넌트
10. **Switch** - 토글 스위치 컴포넌트
11. **Spinner** - 로딩 스피너 컴포넌트
12. **Alert** - 알림 메시지 컴포넌트
13. **Tabs** - 탭 컴포넌트
14. **Tooltip** - 툴팁 컴포넌트
15. **Progress** - 진행률 표시 컴포넌트

## 사용 예시

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@repo/ui';

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

## 스타일

이 라이브러리는 Tailwind CSS를 사용합니다. 프로젝트에서 사용하려면 Tailwind CSS가 설정되어 있어야 합니다.

## 라이센스

MIT
