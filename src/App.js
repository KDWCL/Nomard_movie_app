import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component{
  state = {
    isLoading: true
    // 미래를 위한 state 값은 굳이 미리 초기화시켜줄필요가 없다.
    // 나중애 setState를 통해 넣어줘도 된다
  }
  componentDidMount(){
    console.log("mount")
    // 컴포넌트가 마운트 되자말자 호출되어지는 함수, 즉 여기서 data를 fetch할꺼임
    // constructor() -> render() -> componentDidMount()
    setTimeout(()=>{ // 자바스크립트 함수임
      this.setState({isLoading:false})
    }, 6000);
  };
  render(){
  console.log("rendered")
  const {isLoading} = this.state;
  return <div>{isLoading ? "Loading.." : "We are ready"}</div>
  }
}

export default App;