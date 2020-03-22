import React from 'react';
import axios from "axios"


class App extends React.Component{
  state = {
    isLoading: true
  }
  async componentDidMount(){
    console.log("mount")
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    // yts 사이트에 들어가서 API -> list_movies -> Endpoint 사용
    // 불법적인 사이트라서 노마드가 만든 proxy end point 사용 
    // 검사 -> Network -> list_movies.json 확인
    console.log(movies)   
    // async, await를 쓰기위해서는 반환되는 값이 프로미스이여야 함.
    // 관련 설명은 https://joshua1988.github.io/web-development/javascript/js-async-await/#async--await%EB%8A%94-%EB%AD%94%EA%B0%80%EC%9A%94 참고
    // 자바스크립트는 비동기이기 때문에 callback, 프로미스, async/await 중에 하나를 사용해서 관리가 필요
  };
  render(){
  console.log("rendered")
  const {isLoading} = this.state;
  return <div>{isLoading ? "Loading.." : "We are ready"}</div>
  }
}

export default App;

// axios(악시우스)는 마치 fetch 위에 있는 작은 layer임
// axios는 땅콩 주위의 멋진 초콜릿임. 기본적으로 이게 axios임