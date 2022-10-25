# Create your first app

## Create a Next.js App

- React를 사용해서 웹 애플리케이션을 만들 때 불편한 점
    - Webpack과 같은 번들러와 Babel 같은 컴파일러가 별도로 필요
    - Code splitting과 같은 최적화를 해야 함
    - 성능이나 SEO를 위해 정적 사전 렌더링이 필요하거나, SSR, CSR을 사용하고 싶을 수 있음
    - React App을 데이터 저장소에 연결하기 위해 서버 사이드 코드를 작성해야 될 수도 있음
- Next.js가 위와 같은 문제들을 해결하기 위해 갖추고자 하는 내장 기능의 목표
    - 직관적인 [page-based](https://nextjs.org/docs/basic-features/pages) 라우팅 시스템([dynamic routes](https://nextjs.org/docs/routing/dynamic-routes) 지원 포함)
    - 페이지 별로 [Pre-rendering](https://nextjs.org/docs/basic-features/pages#pre-rendering) 지원([static generation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended) (SSG) ,  [server-side rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering) (SSR))
    - 빠른 페이지 로딩을 위한 자동 code splitting
    - 최적화된 prefetching을 통한 [Client-side routing](https://nextjs.org/docs/routing/introduction#linking-between-pages)
    - [Built-in CSS](https://nextjs.org/docs/basic-features/built-in-css-support), [Sass support](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support),  모든 [CSS-in-JS](https://nextjs.org/docs/basic-features/built-in-css-support#css-in-js) 라이브러리 지원
    - [Fast Refresh](https://nextjs.org/docs/basic-features/fast-refresh)가 지원되는 개발 환경
    - 서버 없이 구축할 수 있는 API endpont를 위한 [API routes](https://nextjs.org/docs/api-routes/introduction)
    - 뛰어난 확장성
    

## Navigate Between Pages

### Pages in Next.js

- pages 폴더에 JS 파일을 만드는 것으로 해당 페이지에 파일의 path인 URL로 접근 가능

### Link Component

- Link Component를 사용해서 페이지간 연결이 가능
    
    `import Link from 'next/link';`
    
- <Link>는 클라이언트 측에서 네비게이션이 가능하게 하고 props를 받아서 컨트롤 할 수 있음
- 외부 페이지 연결시에는 <a> tag를 사용해야함
- className과 같은 attributes를 추가해야된다면 <Link><a> … </a></Link> 로 사용
- [in the API reference for `next/link`](https://nextjs.org/docs/api-reference/next/link)
- [in the routing documentation](https://nextjs.org/docs/routing/introduction)

### Client-Side Navigation

- 브라우저에서 지원하는 default navigation 보다 빠른 JavaScript를 이용한 page transition

```jsx
import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
```

### Code splitting and prefetching

- 해당 페이지에 필요한 부분만 로딩 되어서 많은 페이지가 있어도 빠르게 로딩 됨

![https://nextjs.org/static/images/learn/navigate-between-pages/client-side.gif](https://nextjs.org/static/images/learn/navigate-between-pages/client-side.gif)

- 각 페이지는 isolated되기 때문에 다른 페이지에서 error를 뱉어도 나머지 부분은 작동함
- Next.js는 배포 빌드되었을 때, 브라우저의 viewport에서 Link를 찾으면 백그라운드에서 링크된 페이지들의 코드를 자동적으로 prefetch하기 때문에 페이지 전환이 매우 빠름

## Assets, Metadata, and CSS

- [at the CSS documentation](https://nextjs.org/docs/basic-features/built-in-css-support)

### Assets

- 최상위 public 디렉토리에서 정적 assets을 가져와 쓸 수 있음
- 해당 디렉토리는 robots.txt 적용에도 유용함
- [Static File Serving](https://nextjs.org/docs/basic-features/static-file-serving)

### Image Component and Image Optimization

- Image Component
    - HTML <img> element의 확장
- Image Optimization
    - resizing
    - optimizing
    - Webp 포맷 지원
    - CMS와 같은 외부 소스에서 호스트 받는 이미지도 Optimization 가능
    - 빌드 때 이루어지지 않고 유저의 request가 있을 대 발생(빌드 타임 유지)
- Lazy loaded by default
    - 이미지 로딩이 늦으면 다른 부분들을 먼저 보여줌
- 이미지는 항상 [Cumulative Layout Shift](https://web.dev/cls/)를 피하는 방식으로 렌더링됨
    - CLS - 늦게 로딩된 이미지가 페이지 중간에 렌더링 되면서 다른 뷰의 위치가 변해버리는 현상

```jsx
import Image from 'next/image';

const YourComponent = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);
```

- 추가 참고 자료
    - [documentation](https://nextjs.org/docs/basic-features/image-optimization) - Automatic Image Optimization
    - [API reference for `next/image`](https://nextjs.org/docs/api-reference/next/image)

### Metadata

- Head Component로 <head>를 수정 가능

`import Head from 'next/head';`

- 추가 정보
    - [API reference for `next/head`](https://nextjs.org/docs/api-reference/next/head)
    - [custom `Document` documentation](https://nextjs.org/docs/advanced-features/custom-document) - html tag customize

### Third-Party JavaScript

- Script Component를 이용해서 <script> 처럼 사용 가능

`import Script from 'next/script';`

```jsx
<Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
```

- strategy : third-party script의 로드 타이밍을 컨트롤
    - lazyOnload : 브라우저의 idle time에 로드
- onLoad : script가 로딩이 끝났을 때 즉시 실행할 JS code
- [documentation](https://nextjs.org/docs/basic-features/script) - Script component

### CSS Styling

- [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)을 사용하려면 반드시 파일명 뒤에 .module.css가 붙어야 함

```jsx
import styles from './layout.module.css';

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
```

- 이렇게 사용하면 자동적으로 유니크한 클래스 네임을 할당해줘서 충돌이 일어나지 않음

![Untitled 9](https://user-images.githubusercontent.com/60038526/197710179-eacccf9e-ca09-4540-b2f3-fea34040de2d.png)

- Code splitting 자동 지원

### Global Styles

`pages/_app.js`를 생성

```jsx
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

- Global css를 해당 파일에 import해서 적용가능
- Global css는 다른 곳에서는 import 불가능

### Polishing Layout

- <meta> tag를 통해 페이지의 콘텐츠를 설명

### Styling Tips

[Learn | Next.js](https://nextjs.org/learn/basics/assets-metadata-css/styling-tips)

## Pre-rendering and Data Fetching

### Pre-rendering

- Better performance
- SEO
- 최소화된 필수적인 JS code만 가진 HTML → fully interactive page ⇒ hydration

![Untitled 10](https://user-images.githubusercontent.com/60038526/197710223-1ac00094-0ea9-4957-8b3c-a50781229d45.png)

![Untitled 11](https://user-images.githubusercontent.com/60038526/197710259-9f3ed469-eff7-4325-995d-e6a8db382f16.png)

### Two Forms of Pre-rendering

![Untitled 12](https://user-images.githubusercontent.com/60038526/197710271-9643c2ae-7521-4178-8471-5e44e8b1d05d.png)

![Untitled 13](https://user-images.githubusercontent.com/60038526/197710282-dfd28fe4-3f6c-45d6-8225-f460efd24e52.png)

- 개발 모드에서는 SSG의 경우에도 매 request마다 페이지가 pre-render됨

### Per-page Basis

- Next.js에서는 어떤 pre-rendering 방식을 사용할 건지 각 페이지마다 정할 수 있음

### When to use SSG vs SSR

- SSG
    - 가능하면 추천
    - 페이지가 한 번 만들어져서 CDN에 위치하고나면 더 이상 render 할 필요가 없기 때문에
    - 유저의 request 전에 페이지를 만들 수 있나? → if true → SSG
    - 페이지의 정보가 자주 업데이트 되거나 request 마다 정보가 바뀐다면 사용하기 어려움
- SSR
    - SSG보다는 느림
    - 항상 최신 정보를 반영
- CSR도 가능

### Static Generation with and without Data

![Untitled 14](https://user-images.githubusercontent.com/60038526/197710296-4b17ee6d-dff3-4883-a251-a119b755c688.png)

![Untitled 15](https://user-images.githubusercontent.com/60038526/197710306-1d506cef-36d4-41d8-a450-60cd9067e5f6.png)

- [Static Generation **with data**](https://nextjs.org/docs/basic-features/pages#static-generation-with-data)

### Static Generation with Data using

- `[getStaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation)`
    - async function
    - production 빌드 때 외부 데이터를 받아와서 props로 넘겨줌
    
    ```jsx
    export default function Home(props) { ... }
    
    export async function getStaticProps() {
      // Get external data from the file system, API, DB, etc.
      const data = ...
    
      // The value of the `props` key will be
      //  passed to the `Home` component
      return {
        props: ...
      }
    }
    ```
    
    - 개발 모드에서는 매 request 때 실행됨
    
    ![Untitled 16](https://user-images.githubusercontent.com/60038526/197710317-bb94e35a-8664-4ec5-ac8e-9505029bffe7.png)
    
    ### Implement getStaticProps
    
    ```jsx
    // pages/index.js
    import { getSortedPostsData } from '../lib/posts';
    
    export async function getStaticProps() {
      const allPostsData = getSortedPostsData();
      return {
        props: {
          allPostsData,
        },
      };
    }
    
    export default function Home ({ allPostsData }) { ... }
    ```
    
    ### Fetch External API or Query Database
    
    ```jsx
    // API
    export async function getSortedPostsData() {
      // Instead of the file system,
      // fetch post data from an external API endpoint
      const res = await fetch('..');
      return res.json();
    }
    ```
    
    ```jsx
    // Database
    import someDatabaseSDK from 'someDatabaseSDK'
    
    const databaseClient = someDatabaseSDK.createClient(...)
    
    export async function getSortedPostsData() {
      // Instead of the file system,
      // fetch post data from a database
      return databaseClient.query('SELECT posts...')
    }
    ```
    
    - getStaticProps는 무조건 서버쪽에서 돌아가기 때문에 DB에 직접 접근해서 query문으로 데이터를 받아올 수 있음
    - `getStaticProps`는 오직 페이지에서만 export 될 수 있음(non-page files에서는 불가)
        - React가 페이지가 render 되기 전에 데이터를 모두 갖고 있어야 하기 때문에
    
    ### Fetching Data at Request Time
    
    ![Untitled 17](https://user-images.githubusercontent.com/60038526/197710327-335071f3-0c95-48a5-b053-5a010bee6d02.png)
    
    ### Using getServerSideProps
    
    - `[getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering)`
    
    ```jsx
    export async function getServerSideProps(context) {
      return {
        props: {
          // props for your component
        },
      };
    }
    ```
    
    - 추가 설정을 하지 않으면 결과가 CDN에 캐시되지 않음
    
    ### CSR
    
    - 비밀, 개인적인 정보가 포함되어 SEO에 관련 없는 페이지일 때 사용
    
    ### SWR
    
    - Data fetch를 위한 React hook
        - handles caching
        - revalidation
        - focus tracking
        - refetching on interval
        - and more
    - [SWR documentation](https://swr.vercel.app/)
    
    ### 추가 문서
    
    - [Data Fetching documentation](https://nextjs.org/docs/basic-features/data-fetching)

## Dynamic Routes

### Page Path Depends on External Data

- 각 페이지의 경로가 외부 데이터에 의존하는 경우

![Untitled 18](https://user-images.githubusercontent.com/60038526/197710335-5f1dc274-2e23-4dcb-8fbd-2b7f276e473a.png)

![Untitled 19](https://user-images.githubusercontent.com/60038526/197710342-c93ba6fe-7887-49b5-a680-93a0c54d9985.png)

- 파일 이름을 `[id].js`로 만들어야 함

```jsx
// lib/posts.js

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}
```

- 반환값은 반드리 객체 배열이어야하고, 각 객체는 id(dynamic route filename - […])를 키로하는 객체를 값으로 가지면서 해당 값의 키는 params여야 함
- 위 조건이 만족 되지 않으면 getStaticPaths가 실패

```jsx
// [id].js
import { getAllPostIds } from '../../lib/posts';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
```

- `[paths` key documentation](https://nextjs.org/docs/basic-features/data-fetching#the-paths-key-required)
- `[fallback: false](https://nextjs.org/docs/basic-features/data-fetching#fallback-false)`

### Implement getStaticProps

```jsx
// lib/posts.js

export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    ...matterResult.data,
  };
}
```

```jsx
// pages/posts/[id].js

import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
```

### Details

- [dynamic routes](https://nextjs.org/docs/routing/dynamic-routes)
- API에서 가져오기

```jsx
export async function getAllPostIds() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('..');
  const posts = await res.json();
  return posts.map((post) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
}
```

### Fallback

- getStaticPaths → `fallback: false`
    - `[fallback` is `false`](https://nextjs.org/docs/basic-features/data-fetching#fallback-false)
        - path가 return 되지 않으면 404 page 출력
    - `[fallback` is `true`](https://nextjs.org/docs/basic-features/data-fetching#fallback-true)
        - getStaticProps 의 행동이 변경됨
        - 빌드 때 생성된 HTML로 render
        - 빌드 때 생성되지않았다면 404가 아닌 해당 페이지의 fallback 버전의 출력
        - 백그라운드에서 정적 페이지를 생성 시도하고 후속 요청에는 해당 페이지를 출력
    - `[fallback` is `blocking`](https://nextjs.org/docs/basic-features/data-fetching#fallback-blocking)
        - 새 경로라면 서버 사이드에서 렌더링 되고 향후 request에 캐싱되어 경로 당 한 번씩 발생
    - `[fallback` documentation](https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-false)

### Catch-all Routes

- `pages/posts/[...id].js`
    - `/posts/a`
    - `/posts/a/b`
    - `/posts/a/b/c`
    - getStaticPaths에서  id key의 배열을 반환해야함
    
    ```jsx
    // getStaticPaths
    return [
      {
        params: {
          // Statically Generates /posts/a/b/c
          id: ['a', 'b', 'c'],
        },
      },
      //...
    ];
    ```
    
    ```jsx
    export async function getStaticProps({ params }) {
      // params.id will be like ['a', 'b', 'c']
    }
    ```
    
- [catch all routes documentation](https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes)

### Router

- `[useRouter](https://nextjs.org/docs/api-reference/next/router#userouter)`

### Error Pages

- `pages/404.js` : custom 404 page
- [Error Pages](https://nextjs.org/docs/advanced-features/custom-error-page)

## API Routes

### Creating API Routes

```jsx
// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
  // ...
}
```

- [API Routes](https://nextjs.org/docs/api-routes/introduction)

### Do Not Fetch an API Route from `getStaticProps` or `getStaticPaths`

- 두 함수는 서버 사이드에서만 돌아감
- 두 함수는 브라우저의 JS bundle에 포함되지 않음
- 즉, 서버 사이드에서 바로 DB query로 데이터를 가져와야 함

### A Good Use Case: Handling Form Input

- form input으로 `POST`요청을 보냈을 때 바로 DB에 저장
- API Route 코드가 client bundle에 없기 때문에 안전하게 서버 사이드 코드를 작성 가능

```jsx
export default function handler(req, res) {
  const email = req.body.email;
  // Then save email to your database, etc...
}
```

### Preview Mode

- SSG는 headless CMS에서 데이터를 받아와 페이지를 보여줄 때 유용함
- 다만, headless CMS에 작성하고 있는 내용을 바로 미리보기할 수 없다는 단점
- 이러한 특수한 경우에만 빌드 타임이 아닌 request 타임에 데이터를 받아와서 보여주고 싶을 때 [Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode)를 사용할 수 있음

[Headless CMS란?](https://simsimjae.medium.com/headless-cms%EB%9E%80-49569dc86daa)
