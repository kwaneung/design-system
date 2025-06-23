import { defineConfig } from 'tsup';

export default defineConfig({
  // TypeScript 설정 파일 지정
  tsconfig: './tsconfig.build.json',
  // 진입점 파일
  entry: ['src/index.ts'],

  // 출력 형식: ES Module만 지원
  format: ['esm'],

  // TypeScript 선언 파일(.d.ts) 생성
  dts: true,

  // 소스맵 생성 (디버깅용)
  sourcemap: true,

  // 빌드 전 기존 파일 삭제
  clean: true,

  // CSS를 JavaScript 번들에 포함
  injectStyle: true,

  // 외부 의존성 처리 (React 등은 번들에 포함하지 않음)
  external: [
    'react',
    'react-dom',
    '@radix-ui/react-slot',
    'class-variance-authority',
    'clsx',
    'tailwind-merge',
    'lucide-react',
  ],

  // 빌드 시 추가 옵션
  splitting: false,

  // 최소화 여부
  minify: false,

  // 빌드 결과를 트리 쉐이킹 가능하게 설정
  treeshake: true,
});
