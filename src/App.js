import axios from "axios";
import {Routes, Route, useParams} from 'react-router-dom';
import Search from "./pages/Search";
import PopularFilms from "./pages/PopularFilms";
import NotFound from "./pages/NotFound";
import Header from "./components/Header/Header";
import MoviesDetails from "./pages/MoviesDetails";
import MoviesReview from "./pages/MoviesReview";



function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/search" element={ <Search />} />
      <Route path="/" element={ <PopularFilms />}/>
      <Route path="/movies/:movieId" element={<MoviesDetails/>}></Route>
      <Route path="*" element={ <NotFound/>}/>
      <Route path="/reviews/:reviewsId" element={<MoviesReview />} />
    </Routes>
    </>
  );
}

export default App;
