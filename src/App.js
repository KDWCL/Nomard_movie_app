import React from 'react';
import {HashRouter, Route} from "react-router-dom"
import Home from "./routes/Home"
import About from "./routes/About"
import Detail from "./components/Detail"
import Navigation from "./components/Navigation"


function App(){
  return (
    <>
    <HashRouter>
      <Navigation title="a"/>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/movie/:id" component={Detail}/>
    </HashRouter>
    <footer>나는 푸터얌</footer>
    </>
  )
}

export default App;

/* 라우터의 역할
    /, /about와 같은 페이지가 있다면 그 페이지로 이동시
    / -> Home.js
    /about -> About.js
    그 페이지에 맞는 컴포넌트들을 화면에 출력해준다
    즉 url을 확인하고 명령(라우트 사용)에 따라 js파일을 화면에 표시해줌
*/

/* 라우트란
    "/" <- 이런것을 의미
    지금 보면 props(프로퍼티)인 path에 경로를 적어주고 component에 그 경로에 어떤 컴포넌트를 나타낼껀지 적어준다.
    원래는 <Route path="/"><Home/></Route> 이렇게도 가능하다
*/

/* 
	해시라우터는 
  처음에 localhost:3000에 접속하면 localhost:3000/#/ 이렇게 뜨고 
  테스트를 위해서는 localhost:3000/#/about 이렇게 들어가주면 된다.
	브라우저라우터 사용시에는 # 같은것이 뜨지 않는다. 하지만 설정해주는데 좀 복잡하므로
	여기서는 해시라우터를 사용한다.
*/

/* 
  리액트의 라우터는
  /home/information <- 을 들어가게되면
  /
  /home
  /home/information
  을 전부 찾아서 랜더링해버린다. 컴포넌트 3개가 겹쳐서 화면에 출력되어버림.
  
  해결방법
  <Route path="/" exact={true} component={Home}/>
  exact를 쓰는 것이다. 정확히 라우트가 동일하면 라우터가 실행하게 만들어준다.
 */