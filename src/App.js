import axios from "axios";
import {Routes, Route, useParams} from 'react-router-dom';
import Search from "./pages/Search";
import PopularFilms from "./pages/PopularFilms";
import NotFound from "./pages/NotFound";
import Header from "./components/Header/Header";



function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/search" element={ <Search />} />
      <Route path="/" element={ <PopularFilms />}/>
      <Route path="*" element={ <NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
