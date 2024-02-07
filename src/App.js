import axios from "axios";
import MoviesList from "./components/movies/moviesList/MoviesList";
import fetchTrendingFilms from "./API/FilmsApi";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
   fetchTrendingFilms().then(setData);
  }, []);
  
console.log(data);
  
  return (
    <MoviesList data={data}/>
  );
}

export default App;
