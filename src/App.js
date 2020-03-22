import React from 'react';
import axios from "axios";
import Movie from "./Movies";


class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const {data:{data:{movies}}} =  await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    // console.log(movies)
    this.setState({movies, isLoading: false})
    // 원래 movies:movies 이고 뒤에 movies는 axios로 가져온 데이터들이 들어있는 movies임
  }
  async componentDidMount(){
    // console.log("mount")
    this.getMovies()
  };
  render(){
    // console.log("rendered")
    const {isLoading, movies} = this.state;
    return <div>{isLoading ? "Loading.." : movies.map(movie=>{ //console.log(movie) 
      return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />})}</div>
  }
}

export default App;
