import React from "react"
import {Link} from "react-router-dom"

function Navigation(props) {
    console.log(props)
    // 라우트를 통하지 않은 props에서는 location, history등이 나오지 않는다
    // 출력값으로 {title:"a"}만 나옴
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Navigation;

// 리액트는 SPA인데 a태그를 사용하게 되면 html이기 때문에 그냥 페이지를 새로고침 시켜버린다
// 리액트가 죽고 새페이지가 새로고침 되는 것임.
// 해결책으로 Link라는 것을 사용한다.
// Link라는 것을 사용하기 위해선 Router 안에 있어야 한다. 우리는 지금 해시라우터안에 있음
