# React의 문제점과 NextJS의 도입

## React의 번거로운 부분

리액트는 애플리케이션을 처음부터 빌드하려면 신경써야하는 세부사항이 많다.

- Webpack으로 번들링 & Babel 컴파일러로 JSX → JS 로 변환
  최적화 (Code Splitting 등)를 해야함
- Static Pre-Rendering (성능과 SEO를 위해) / SSR 또는 CSR 를 해야함
- 리액트 앱과 데이터 저장소를 연결하기 위한 서버 측 코드 작성

## NextJS: React 프레임워크

NextJS는 React 의 번거로운 점을 간편하게 해결하였다.

- 직관적인 페이지 기반 라우팅 (Dynamic routes 도 지원함)
- Pre-rendering, static generation (SSG),server-side rendering (SSR) 이 페이지 단위로 제공됨
- 자동 Code Splitting
- prefetching을 통한 최적화된 CSR
- Fast Refresh
- 서버리스 함수로 API 엔드포인트를 빌드하기 위한 API routes
  확장성
- 페이지간의 탐색을 CSR으로 진행할 수 있음.
- Code Splitting이 페이지 별로 진행 되어 각 페이지에서 필요한 것만 로드할 수 있도록 함
- 특정 페이지에서 오류가 발생하더라도 나머지 앱은 정상 작동 함
- 백그라운드에서 Link로 연결된 페이지에 대한 코드를 prefetch 하여 페이지 전환이 빠름
- 라우팅 라이브러리가 필요하지 않음.

# Assets, Metadata, CSS

## Assets

### public 디렉토리

- 정적 데이터를 제공하는 경우 최상위 디렉토리의 public 디렉토리를 이용

### 최적화 되지 않은 이미지

일반 HTML 의 img 를 사용하면 다음을 수동으로 처리해야 한다:

- 다양한 화면 크기에 이미지가 반응형으로 적용되는지
- 다른 툴 또는 라이브러리로 이미지 최적화
- 뷰포트에 들어갈 때만 이미지 로드 등

### Image Component - 이미지 자동 최적화

- next/image 는 HTML의 `img` 의 확장이다.

  - 이미지 최적화가 자동으로 이뤄지며, CMS 같이 외부 데이터인 경우에도 최적화가 가능하다.

- 이미지 최적화
  - 이미지 크기 조정, 최적화와 최신 이미지 포멧 (WebP) 를 제공한다.
  - 작은 viewport 의 기기에서 큰 이미지를 불러오는 것을 방지한다.
  - 자동으로 이미지 포맷을 선택하고 브라우저가 지원 가능한 포맷으로 이미지를 제공한다.

최적화는 사용자가 요청할 때 on-demand 로 적용된다. 빌드 시 적용되지 않기 때문에 몇 개의 이미지를 제공하던 빌드 시간이 증가하지 않는다.

- 이미지는 기본적으로 Lazy Loading된다.
  - 즉, 뷰포트 밖의 이미지는 페이지 속도에 영향을 주지 않는다. 이미지는 뷰포트로 스크롤 될 때 로드된다.

## CSS

NextJS에는 CSS, Sass 가 내장되어 있다.

### styled-jsx

NextJS 에 내장되어 있는 CSS-in-JS 라이브러리로,
리액트 컴포넌트 내에서 CSS를 작성할 수 있게 해줌

- CSS 스타일의 스코프가 해당 컴포넌트 내로 한정됨

### CSS 작성 및 import

- NextJS 는 CSS와 Sass 가 내장되어 있어서, `.css` 나 `.scss` 를 import 할 수 있다.

- 모듈로 스타일링 파일을 관리할 수 있다. 즉, 고유한 클래스 이름으로 자동 생성한다.

- Code Splitting 는 CSS 모듈에서도 적용된다.
  C
- SS 모듈은 빌드시 JS 번들에서 추출되어 자동으로 로드되는 `.css 파일을 만든다.`

### \_app.js - 전역 스타일

- `_app.js`
  - `pages/_app.js` 파일에서 전역 스타일링을 할 수 있다.
  - 다른 모든 페이지에서 공통적으로 사용되는 최상위 컴포넌트이다.
  - 전역 CSS 코드는 `_app.js` 에서만 import 할 수 있다.

# Pre-rendering & Date Fetching

- Pre-rendering

  - NextJS는 각 페이지에 대해서 미리 HTML 을 생성한다.
  - 생성된 각 HTML은 해당 페이지에 필요한 최소한의 JS 와 연결된다.

- 브라우저에서 페이지를 로드하면 해당 JS 코드가 실행되고 페이지가 대화식으로 만들어진다. (hydration)

## SSR, SSG

Pre-rendering 안에 SSR, SSG 가 포함된다.

### SSG (Static-site-generate)

> Static Generation is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.

- SSG는 build 타임에 HTML 이 생성된다. 매 요청마다 이미 만들어진 HTML을 재사용한다.
- `getStaticProps`

### SSR (Server-side-rendering)

> Server-side Rendering is the pre-rendering method that generates the HTML on each request.

- SSR은 서버에서 요청이 들어올 때마다 HTML을 생성한다.
- `getServerSideProps`

### SSG vs. SSR

- SSG가 SSR 보다 빠르기 때문에 가능하다면 SSG를 사용하는 것이 좋다.

- 하지만 SSG는 요청에 따른 최신화된 데이터를 사용하지 못하기 때문에 그런 경우에는 SSR를 사용해야한다.

- NextJS는 페이지 단위로 SSG와 SSR을 적용할 수 있다.
