# Learn Next.js

from official document([https://nextjs.org/learn](https://nextjs.org/learn/f))

# Foundations

## About Next.js

- React framework
- React로 UI를 구축하고 Next.js기능을 통해서 라우팅, 데이터 통신 등 요구사항을 해결

## From JavaScript to React

- 웹 페이지는 HTML 소스로 부터 DOM을 만들어 냄
    - DOM (Document Object Model)
        - HTML 요소의 객체 표현
        - 코드와 사용자 인터페이스 사이의 연결
        - 부모와 자식 관계(트리 구조)
- DOM 메소드와 자바스크립트와 같은 언어를 통해 사용자의 이벤트를 받아 특정 요소를 선택, 추가, 업데이트, 삭제하여 DOM을 조작할 수 있음
- 이 과정을 통해 특정 요소의 스타일이나 내용을 변경할 수 있음

### **Updating the UI with JavaScript and DOM Methods**

```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>

    <script type="text/javascript">
      // Select the div element with 'app' id
      const app = document.getElementById('app');

      // Create a new H1 element
      const header = document.createElement('h1');

      // Create a new text node for the H1 element
      const headerContent = document.createTextNode(
        'Develop. Preview. Ship. 🚀',
      );

      // Append the text to the H1 element
      header.appendChild(headerContent);

      // Place the H1 element inside the div
      app.appendChild(header);
    </script>
  </body>
</html>
```

<img width="748" alt="Dom_HTML" src="https://user-images.githubusercontent.com/60038526/197408209-feccaaab-ea9f-4ffc-bdbb-c0975f9245c1.png">

- 위 코드는 명령형 프로그래밍(Imperative Programming)
- 사용자 인터페이스를 구축할 때는 선언형 프로그래밍(Declarative Programming)이 더 선호됨
- React는 선언형 라이브러리

### **Getting Started with React**

- JSX
    - 사용자 UI를 HTML과 같은 구문으로 표현해주는 JavaScript syntax extension
    - HTML과 JavaScript 이외의 새로운 기호나 구문을 배울 필요가 없음
    - JavaScript 컴파일러(ex.Babel)가 있어야 JSX → JS가능
    
    ```html
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    ```
    
    ```html
    <script type="text/jsx">
      const app = document.getElementById("app")
      ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app)
    </script>
    ```
    

### Essential JavaScript for React

- 필요한 JS 지식
    - [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) and [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
    - [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
    - [Arrays and array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
    - [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
    - [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
    - [Ternary Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
    - [ES Modules and Import / Export Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

### From JavaScript to React

### Components

- 레고 블럭과 같이 나눠져 있는 조각
- 모듈화를 통해 유지/보수, 확장성이 좋아짐
- React에서 Component는 UI elements를 반환하는 함수

```html
function Header() {
  return <h1>Develop. Preview. Ship. 🚀</h1>;
}

ReactDOM.render(<Header />, app);
```

- React Component는 다른 Component를 포함/중첩할 수 있음

```html
function HomePage() {
  return (
    <div>
      {/* Nesting the Header component */}
      <Header />
    </div>
  );
}
```

- Component Trees
    
    ![Component_trees](https://user-images.githubusercontent.com/60038526/197408271-68ad8aaf-fdf7-4a62-9fc0-c5fc3c8103b3.png)
    

### Props

- 일반 HTML elements는 속성(attributes)을 이용해서 정보를 전달할 수 있음
- React Component도 같은 방식으로 속성(properties)을 전달할 수 있는데 이를 props라고 함
- React에서 props를 이용한 데이터 전달은 component tree 상 하위로 전달만 가능
- props는 객체로 전달되기 때문에 object destructuring을 이용해 사용할 수도 있음
- JSX에서 변수값을 사용하려면 {}로 묶어서 사용(다른 JS 표현식도 사용가능)
    - object property {props.title}
    - A template literal {`Cool ${title}`}
    - returned value of a function {someFunc(title)}
    - ternary operators {title ? title : ‘Default Title’}

```html
function Page() {
  return (
    <div>
      <Header title="React 💙" />
      <Header title="A new title" />
    </div>
  );
}
```

### State

- Props와는 다르게 component tree 상에서 양방향으로 전달이 가능

## From React to Next.js

```html
<html> // Next.js에서 자체 생성
  <body> // Next.js에서 자체 생성
    <div id="app"></div>

    <script src="https://unpkg.com/react@17/umd/react.development.js"></script> // npm으로 대체
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script> // npm으로 대체
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> // Next.js 자체 컴파일러로 대체

    <script type="text/jsx"> // 삭제
      const app = document.getElementById("app") // 삭제

      function Header({ title }) {
        return <h1>{title ? title : "Default title"}</h1>
      }

      function HomePage() {
        const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"]

        const [likes, setLikes] = React.useState(0) // React. 삭제

        function handleClick() {
          setLikes(likes + 1)
        }

        return (
          <div>
            <Header title="Develop. Preview. Ship. 🚀" />
            <ul>
              {names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>

            <button onClick={handleClick}>Like ({likes})</button>
          </div>
        )
      }

      ReactDOM.render(<HomePage />, app) // 삭제
    </script> // 삭제
  </body> // Next.js에서 자체 생성
</html> // Next.js에서 자체 생성
```

---

- npm을 통한 패키지 설치가 필요

`npm install react react-dom next`

```jsx
import { useState } from 'react';
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
```

1. Next.js에서 main component를 구별하기 위해 default export를 React Component에 추가
2. 수정된 코드를 .js나 .jsx로 변경
3. 해당 파일을 pages 폴더로 이동
4. package.json에 scipt 추가

```json
// package.json
   {
    "scripts": {
        "dev": "next dev"
    },
     // "dependencies": {
     //   "next": "^11.1.0",
     //   "react": "^17.0.2",
     //   "react-dom": "^17.0.2"
     // }
   }
```

## How Next.js Works

- 코드를 실행하는 환경: 개발 vs 생산(배포)
- 코드를 실행하는 시간: 빌드 vs 런타임
- 렌더링이 일어나는 곳: 클라이언트 vs 서버

### From Development to Production

- 개발 경험 개선
    - TypeScript
    - ESLint
    - Fast Refresh
    - etc…
- 생산
    - 최종 사용자를 위한 최적화
    - 성능과 접근성을 위한 코드 변환에 초점
    
    ### Next.js Complier
    
    - Rust 기반 컴파일러
    - SWC - Compiling, Minifying, Bundling
    
    ### Compiling
    
    - 어떤 언어의 코드를 다른 언어 또는 다른 버전으로 변환하는 과정
    
    ![Compiling](https://user-images.githubusercontent.com/60038526/197408298-721a27b7-0c72-472f-a989-a8939686d7c7.png)
    
    - Next.js에서는 코드를 편집하거나 배포 준비를 위한 빌드 단계에서 수행됨
    
    ### Minifying
    
    - 개발자는 가독성있는 코드를 작성하기 때문에 실행되는데 불필요한 부분들이 존재함
    - Minification은 코드의 기능을 바꾸지 않으면서 위와 같은 불필요한 부분을 제거하는 과정
    
    ![Minifying](https://user-images.githubusercontent.com/60038526/197408328-9456771a-46b3-4c21-9850-9bddf3935129.png)
    
    - 파일 사이즈를 줄임으로써 성능을 향상시키는 목적이 있음
    - Next.js는 생산 시 JS, CSS 파일을 자동으로 minified
    
    ### Bundling
    
    - 개발자는 규모가 큰 어플리케이션을 만들기 위해 modules, components, functions로 쪼갬
    - 이렇게 쪼개진 조각들을 export, import하게 되면서 dependencies가 만들어짐
    - Bundling은 dependencies를 해결하고 merge할 때 브라우저를 위한 최적화된 bundles를 생성하는 과정
    
    ![Bundling](https://user-images.githubusercontent.com/60038526/197408343-e225f3e1-9137-4b27-a50c-b9fb0d2fb3dd.png)
    
    - 유저가 웹 페이지를 방문할 때 요청하는 number of requests를 줄이는 목적이 있음
    
    ### Code Splitting
    
    - 개발자들은 애플리케이션을 여러 페이지로 쪼개고, 이러한 페이지들은 각각 유일한 entry point
    - Code-splitting은 애플리케이션의 bundle을 각 entry point가 필요로하는 작은 chunks로 나누는 과정
    
    ![Code_Splitting](https://user-images.githubusercontent.com/60038526/197408377-c68a81e2-859e-43ea-8df0-b9f5fe34438b.png)
    
    - Next.js는 빌트인으로 지원하며, 빌드 과정에서 pages 폴더에 있는 파일들은 자동적으로 자신의 JS bundle을 가지게 됨
    - 여러 페이지에서 공유하는 코드의 경우 다시 다운로드 하지 않도록 각각의 번들로 분할됨
    - 최초 페이지가 로드 된 후, Next.js는 사용자가 탐색할 수 있는 다른 페이지의 코드를 미리 로드할 수 있음. [pre-loading the code](https://nextjs.org/docs/api-reference/next/link#:~:text=Defaults%20to%20false-,prefetch,-%2D%20Prefetch%20the%20page)
    - [Dynamic imports](https://nextjs.org/docs/advanced-features/dynamic-import) : 처음에 로드 된 코드를 수동으로 분할할 수 있음
    
    ### Build Time vs Runtime
    
    - Build time : 애플리케이션 코드를 실행하기 위한 준비 과정/시간
        - 코드를 서버에 올리고 사용자들이 이용할 수 있도록 최적화
            - 정적으로 생성된 페이지들의 HTML 파일들
            - 서버에서 렌더링할 페이지들의 JS 코드
            - 클라이언드에서 페이지들을 인터렉티브하게 해주는 JS 코드
            - CSS 파일들
    - Runtime : 애플리케이션이 올라가고 나서 사용자의 request에 response 하는데 소요되는 시간
    
    ### Client and Server
    
    - 클라이언트 : 사용자의 브라우저에서 서버에 있는 애플리케이션에 request를 보내고, 받은 response로 사용자와 interact 할 수 있는 interface으로 보여줌
    - 서버 : 애플리케이션 코드를 저장, 클라이언트로부터 request를 받고 처리 과정을 거쳐 적절한 response를 돌려줌
    
    ### Rendering
    
    - React에서 작성한 코드(UI)를 HTML 표현으로 변환하는 과정
    - 서버나 클라이언트에서 수행될 수 있으며, 빌드 시 미리 발생하거나 런타임 시 모든 request에 발생할 수 있음
    - Next.js 에서는 3가지 rendering methods를 제공함
        1. SSR (Server-Side Rendering)
        2. SSG (Static Site Generation)
        3. CSR (Client-Side Rendering)
    
    ### Pre-Rendering
    
    - SSR, SSG
    - 외부 데이터를 가져오고 React components를 HTML로 변환하는 것이 클라이언트로 전송되기 전에 발생
    
    ### CSR vs Pre-Rendering
    
    - 표준 React app에서는 브라우저가 서버로부터 빈 HTML shell과 UI를 구성하기 위한 JS를 받음
    - 이를 토대로 사용자의 장치에서 rendering이 발생함
    
    ![CSR](https://user-images.githubusercontent.com/60038526/197408395-e9671970-66f5-4fbb-9bf1-b98221eeadfd.png)
    
    - Next.js에서는 기본값으로 모든 페이지를 pre-render
        - React의 useEffect()나 useSWR 같은 훅을 사용해서 CSR을 할 수 있음
    - rendering이 수행되는 동안 사용자는 빈 페이지를 보게 됨
    
    ![Pre-Rendering](https://user-images.githubusercontent.com/60038526/197408418-fec6e70a-7eb3-46cb-a3d8-85b493df2ea6.png)
    
    ### SSR
    
    - 모든 request마다 서버에서 HTML 페이지가 생성됨
    - 서버에서 만들어진 HTML, JSON 데이터, interactive 페이지를 위한 JS를 클라이언트로 전송
    - 클라이언트에서는 HTML로 빠르지만 non-interactive한 페이지를 보여주고, React가 JSON 데이터와 JS를 가지고 components를 interactive하게 만드는데 이를 hydration이라고 함
    - Next.js에서 [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)를 사용해서 SSR 페이지를 선택할 수 있음
    - [React server components](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html) : render에 클라이언트의 JS를 필요로 하지 않고 서버에서 렌더링 된 components. bundle size를 줄여서 CSR 성능을 향상시킴
    
    ### SSG
    
    - HTML이 서버에서 생성되는 것은 동일하나, runtime이 없고 오직 빌드 시에 컨텐츠가 한 번 생성됨
    - 애플리케이션이 배포되면 HTML이 CDN에 저장되고 모든 request에 재사용됨
    - Next.js에서 [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)를 사용해서 SSG 페이지를 선택할 수 있음
    - [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) : 정적 페이지를 생성하거나 update할 때 사용가능. 데이터가 변경되었을 때 전체 사이트를 rebuild 할 필요가 없음
    
    - Next.js에서는 페이지마다 위 3가지 방식을 선택해서 적용할 수 있음
    - [data fetching docs](https://nextjs.org/docs/basic-features/data-fetching/overview)

## CDNs and the Edge

- Next.js 애플리케이션은 코드를 origin servers, CDNs(Content Delivery Networks), Edge에 분배할 수 있음

### Origin Servers

- 메인 컴퓨터
- request를 받으면 연산을 거친 뒤 결과를 CDN으로 전달할 수 있음

### CDN

- 정적 컨텐츠(HTML, imge files, etc…)를 클라이언드와 origin server 사이 어디든 저장하고 있음
- request를 받으면 사용자에게서 제일 가까운 CDN에서 cache된 결과를 respond함

![CDN](https://user-images.githubusercontent.com/60038526/197408432-a3407a9c-6c47-4adf-a0b3-2f94c6ce0d5b.png)

- origin server는 모든 request에 연산을 매번 다시 할 필요가 없음
- 사용자 입장에서도 지리적으로 가까운 곳에서 response를 받아서 속도가 빠름
- Next.js는 pre-render를 할 수 있으므로, CDN을 통해 전달 속도를 높이는데 적합함

### The Edge

- 네트워크 상에서 사용자에게 제일 가까운 곳을 뜻하는 개념
- CDN도 일종의 “the Edge”로 볼 수 있음
- CDNs과 비슷하게 전 세계 여러 장소에 분배되어 있지만, 코드를 실행시킬 수 있다는 차이점
- caching과 code execution이 유저에게 가까운 Edge에서 수행될 수 있음
- 전통적으로 client-side나 server-side에서 수행되던 작업을 Edge에서 수행할 수 있게 됨으로써 애플리케이션의 성능을 향상 시킬 수 있음
    - client에게 전송되는 코드의 양이 줄고
    - 사용자의 request 중에 origin server로 가지 않아도 되는 부분이 생겨서
    - latency가 줄어듦
- Next.js에서는 [Middleware](https://nextjs.org/docs/middleware)와 [React Server Components](https://nextjs.org/docs/advanced-features/react-18/overview#react-server-components-alpha)를 통해 Edge에서 코드를 실행 가능
