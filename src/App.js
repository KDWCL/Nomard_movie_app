import React from 'react';


function Food(props){
  {/* 부모 컴포넌트에서 props를 받아와서 쓰기 위해선 매개변수를 props로 준다. */}
  console.log(props, props.fav)
  return (
  <h1>I like {props.fav} </h1>

  )
}
function App() {
  return (
    <div className="App"> Hello!
    <Food fav="kimchi"></Food>
    {/* property을 props이라고 jsx에서 사용한다
        fav라는 proverty를 kimchi라는 value로 준거임
        value의 값으로 something = {true}, something ={[1,2,3]}
        이런식으로 원하는 자료형으로 보낼 줄 수 있다.
    */}
    <Food fav="nomard"></Food>
    <Food fav="ramen"></Food>
    <Food fav="samgiopsal"></Food>
    <Food fav="chicken"></Food>
    </div>
  ); 
}

export default App;

/* 리액트는 컴포넌트를 사용해서 HTML처럼 작성하려는 경우에 필요하다
   jsx는 자바스크립트안의 HTML이다. 컴포넌트를 만들고 어떻게 사용하는지에 대한 것이다 */

/* 리액트의 장점
    재사용이 가능하다(jsx+props로 가능함)
*/