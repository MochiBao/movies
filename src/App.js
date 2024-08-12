import axios from "axios";
import {Routes, Route, useParams} from 'react-router-dom';
import Search from "./pages/Search";
import PopularFilms from "./pages/PopularFilms";
// import NotFound from "./pages/NotFound";
import Header from "./components/Header/Header";
// import MoviesDetails from "./pages/MoviesDetails";
// import MoviesReview from "./pages/MoviesReview";
import { Suspense, lazy } from "react";

const MoviesDetails = lazy(
  () => import("./pages/MoviesDetails")
/*webpackChunkName: "MoviesDetails" */)
const MoviesReview = lazy(() => import("./pages/MoviesReview"))
const NotFound = lazy(() => import("./pages/NotFound"))
const Actors = lazy(() => import("./pages/Actors"))

function App() {
  
  return (
    <>
    <Header />
    <Suspense fallback={<h1>ЗАВАНТАЖЕННЯ</h1>} >
    <Routes>
      <Route path="/search" element={ <Search />} />
      <Route path="/" element={ <PopularFilms />}/>
      <Route path="/movies/:movieId" element={<MoviesDetails/>}></Route>
      <Route path="*" element={ <NotFound/>}/>
      <Route path="/reviews/:reviewsId" element={<MoviesReview />} />
      <Route path="/actors/:actorsId" element={<Actors/>}/>
    </Routes>
    </Suspense>
    </>
  );
}

export default App;
