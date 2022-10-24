# 42Nexters

---

## CSR(React)과 SSR(Next)

- https://80000coding.oopy.io/fde38c6f-e65d-4c1a-af45-176abee40389

## Library와 Framework

- Library와 Framework의 차이에 대해 React와 Next를 통해 알아보자. 만약 React를 사용하는 프로젝트에서 page routing 기능이 필요한 상황이라면 react-router-dom(Library)을 불러와 '나'의 코드에 적용하면 된다. 또한, react-router-dom이 싫다면 해당 기능을 수행하는 다른 Library를 불러와 교체할 수도 있고, 직접 뜯어 cutomizing 할 수도 있을 것이다. 반면에 Next 프로젝트에서 page routing을 하려면 Next에서 정해주는 방식으로 pages directory 안에 routing할 page들을 위치 시켜야하고, 그것 외에 다른 방법은 없다. 즉, Framework가 알려주는 방법으로 page routing 코드를 작성해주어야만 동작하는 것이다.
- 필요한 기능들을 포함하고, 개발자가 매뉴얼에 맞춰 코드를 작성한다면 Framwork, 개발자가 필요한 기능들을 적절히 불러오고 자유롭게 선택가능한 것은 Library라고 생각하면 된다.
- Next 프로젝트에 page routing을 정해진 방법대로 작성해보면 `pages` 이하의 폴더에 작성해야 하는걸까요? `api` 폴더 이하에 있는 파일들은 왜 API가 되고, `_app.ts` 나 `_document.ts` 같은 파일들이나 `getServerSideProps` 같은 함수들이 사용된다는 건 알 수 있지만 어디에서 어떻게 동작하는 지는 알 수 가 없다. 우리는 방법대로 '작성'만 할 뿐이고 실제로는 Framework가 작성된 것들을 대신 실행시키기 때문이다.

## Next framework 주요 기능

- page 기반 routing 시스템( Dynamic route 지원 )
- pre-rendering, SSG, SSR에 대해 page 단위로 지원
- 빠른 page load를 위한 code splitting
- pre-fetching을 통한 client route
- 내장 CSS, Sass 지원 및 모든 CSS-in-JS 라이브러리 지원
- Fast Refresh 지원(?)
- severless 함수로 API endpoint를 빌드하기 위한 API route
- 완전한 확장 가능

### Getting Started

- 새로 프로젝트를 만드는 경우라면 아래 두 가지 방법 중 하나를 선택하자.

```
npx create-next-app@latest
npx create-next-app@latest --typescript // typescript 적용
```

### CSS

### Global Stylesheet

```typescript
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

- `pages/_app.ts`에서 `styleName.css`를 `import`해서 적용할 수 있다.

### CSS module import

- `[name].module.css` 모듈로 스타일링 파일을 관리할 수 있다. 고유한 클래스 이름으로 자동 생성되는 방식.

## Routing

- NextJS는 page 개념을 기반으로 구축된 file system router가 제공된다.
- 따라서, pages directory에 추가되면 자동으로 route로 사용할 수 있습니다.

### Index routes

- index router 이름이 지정된 파일을 directory root로 자동 routing한다. .

```

pages/index.js→ /
pages/blog/index.js→ /blog
```

### Nested routes

- 중첩된 폴더 구조를 생성하면 파일이 아래 방식으로 자동으로 routing된다.

```
pages/blog/first-post.js → /blog/first-post
pages/dashboard/settings/username.js → /dashboard/settings/username
```

### Dynamic route segments

- 대괄호를 사용하면 명명된 매개변수를 일치시킬 수 있다.

```
pages/blog/[slug].js → /blog/:slug( /blog/hello-world)
pages/[username]/settings.js → /:username/settings( /foo/settings)
pages/post/[...all].js → /post/*( /post/2020/id/title)
```

## API Routes

- https://nextjs.org/docs/api-routes/introduction

## code splitting

- https://web.dev/i18n/ko/code-splitting-with-dynamic-imports-in-nextjs/

## SEO (SearchEngineOptimization)

- 검색 엔진 최적화를 의미하며, 최종적인 목표는 검색 엔진 결과에서 순위를 높여 검색 결과에 자주 나타나게 하는 것이다.
- Lighthouse를 통해 SEO의 성능 지표를 측정할 수 있다.

---

# 참고 문헌

- https://nextjs.org/docs/
- https://github.com/vercel/next-learn/tree/master/basics/demo
