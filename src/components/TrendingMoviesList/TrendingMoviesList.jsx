import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { TrendingMovies } from '../../api/SearchApi';
import { Ul, H2 } from './TrendingMovisList.styled';
import MovieItem from '../MovieItem';

const TrendingMovisList = ({ homeTitle }) => {
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
    <>
      <H2>{homeTitle}</H2>
      <Ul>
        {trendsMovies.map(movie => (
          <MovieItem key={movie.id} movieDetails={movie} />
        ))}
      </Ul>
    </>
  );
};

TrendingMovisList.prototype = {
  homeTitle: PropTypes.string,
};

export default TrendingMovisList;
