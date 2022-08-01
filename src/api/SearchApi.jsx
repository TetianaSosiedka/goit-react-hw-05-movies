import axios from 'axios';

const KEY = 'aec86298015b623e3598e86276b5a670';
const URL = 'https://api.themoviedb.org/3/';

export const TrendingMovies = () => {
  return axios.get(`${URL}trending/movie/day?api_key=${KEY}`).then(response => {
    if (response.status === 200 && response.data.total_results !== 0) {
      return response.data;
    }
    return response;
  });
};

export const SearchById = id => {
  return axios
    .get(`${URL}movie/${id}?api_key=${KEY}&language=en-US`)
    .then(response => {
      if (response.status === 200 && response.data.total_results !== 0) {
        return response.data;
      }
      return response;
    });
};
