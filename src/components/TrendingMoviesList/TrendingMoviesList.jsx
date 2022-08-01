import { useState, useEffect } from 'react';

import { TrendingMovies } from '../../api/SearchApi';
import { Ul } from './TrendingMovisList.styled';
import MovieItem from '../MovieItem';

const TrendingMovisList = () => {
  const [trendsMovies, setTrendsMovies] = useState([]);

  useEffect(() => {
    TrendingMovies()
      .then(({ results }) => {
        setTrendsMovies(results);
        console.log(results);
      })
      .catch(error => {
        console.log(error.message);
        return error.message;
      });
    // .finally(console.log('loding'));
  }, []);

  return (
    <Ul>
      {trendsMovies.map(movie => (
        <MovieItem key={movie.id} title={movie.original_title} />
      ))}
    </Ul>
  );
};

export default TrendingMovisList;
