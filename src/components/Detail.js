import React from 'react';

class Detail extends React.Component {
  componentDidMount() {
    // 랜더함수뒤에 실행되는 함수
    console.log(this.props);
    const { location, history } = this.props;
    // 라우터를 통해서 주어진 props는 안에 location, history, match등이 있나보다.
    if (location.state === undefined) {
      // Home으로 리다이렉트 시킬 것임
      // this.props.history에서 push를 보면 push(path,state)함수가 들어가져 있음
      // 이것을 활용할 것임
      history.push('/');
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
    // if문을 써주는 이유는 render가 실행된 뒤에 componentDidMount가 실행되기 때문이다
  }
}

export default Detail;
