import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component{
  constructor(props){
    super(props)
    console.log("constructor")
  }
  state = {
    count: 0
  }
  add = () =>{this.setState(current => ({count: current.count + 1}))}
  minus = () => {this.setState(current => ({count: current.count - 1}))}
  componentDidMount(){
    console.log("component rendered")
  }
  componentDidUpdate(){
    console.log("I just updated")
  }
  componentWillUnmount(){
    console.log("Goodbye")
  }
  render(){
    console.log("I'm rendered")
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

// lifecycle method는 기본적으로 리액트가 컴포넌트를 생성하고 없애는 함수이다.
/* mounting이란 태어나는 것을 의미
 constructor()는 자바스크립트에서 클래스를 만들때 호출되는 것임
 render()
 componentDidMount()
 */

/* updating이란 업데이트를 의미(업데이트의 원인은 사용자임. 내가 버튼을 누를때 등)
    shouldComponentUpdate() <- 애는 랜더링할건지 안할건지 정하는 함수
    render()
    componentDidUpdate() <- 업데이트 되어졌을때 실행
*/
/* unmounting이란 컴포넌트가 죽는 것을 의미(페이지를 바꿀때등)
    componentWillUnmount()
*/

/* 실행순서
  setState 호출 -> render() -> componentDidUpdate()
*/