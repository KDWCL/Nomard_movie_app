import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component{
  state = {
    count: 0
  }
  add = () =>{
    // this.state.count = 1
    // 이렇게 해주지 않는 이유는 이렇게 쓰면 리액트가 render() 함수를 refresh하지 않기 때문임 
    // 이 말의 의미는 매번 state의 상태를 변경할때 리액트가 랜더함수를 호출해서 바꿔주기를 원한다는 것이다
    // 랜더함수를 재실행시키게 되면 리액트는 모든걸 다시칠하지만 버츄얼돔을 통해 필요한부분만 실제돔에 적용시킨다 <- 깜빡거리지도 않음
    this.setState(current => (
      console.log(current),
      {count: current.count + 1}))
    // setState함수를 이용하여 state에 새로운 객체를 주자
  }
  minus = () => {this.setState(current => ({count: current.count - 1}))}
  render(){
    return (
     <div>
        <h1>The Number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
    </div>
    )
  }
}

export default App;

// 리액트 컴포넌트는 뒤에 많은 것을 가지고 있는데 그중 하나가 stat임
// 리액트는 자동적으로 나의 클래스 컴포넌트의 render 함수를 자동으로 실행한다.
// 클래스 컴포넌트를 사용하는 이유는 state를 써보기 위해서임. 
// state는 객체이고 컴포넌트의 데이터르르 넣을 공간이며 이 데이터는 변함