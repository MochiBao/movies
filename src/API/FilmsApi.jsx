import axios from "axios";


const fetchTrendingFilms = async (keyWord="Barbie") => {
    try {
      const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5456eae918aecb3e2e60ac718603b47e&query=${keyWord}&page=1`)
      console.log(keyWord);
      if (!data.results.length ) {
        throw new Error('Not found');
      };
      console.log(data.results);
      return data.results
    } catch (error) {
      throw error;
    }
  };

  const fetchPopularFims = async () => {
    try {
      const fetch = await axios.get('https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=5456eae918aecb3e2e60ac718603b47e')
      console.log(fetch)
      return fetch;
    } catch (error) {
      throw error;
    }
  }

  fetchPopularFims().then(data => {console.log(data)})

  export default fetchTrendingFilms;