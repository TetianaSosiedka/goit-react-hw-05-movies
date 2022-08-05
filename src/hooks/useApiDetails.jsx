import { useState, useCallback } from 'react';

import {
  TrendingMovies,
  GetMovieDetails,
  GetCredits,
  GetReviews,
} from '../api/SearchApi';

const useApiDetails = () => {
  const [trendsMovies, setTrendsMovies] = useState([]);

  const [basicUrl, setBasicUrl] = useState('');
  const [title, setTitle] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [rating, setRating] = useState(0);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [poster, setPoster] = useState('');

  const [profileActors, setProfileActors] = useState([]);

  const [reviews, setReviews] = useState();

  const [errorMessage, setErrorMessage] = useState('');

  const getTrendingMovies = () => {
    TrendingMovies()
      .then(({ data }) => {
        setTrendsMovies(data.results);
      })
      .catch(error => {
        console.log(error.message);
        setErrorMessage('Request error !!!');
      });
  };

  const getMoveiDelalies = movieId => {
    GetMovieDetails(movieId)
      .then(({ data, BasicURL }) => {
        setBasicUrl(BasicURL);
        setTitle(data.original_title);
        setReleaseDate(data.release_date.slice(0, 4));
        setRating(data.vote_average);
        setOverview(data.overview);
        setGenres(data.genres);
        setPoster(data.poster_path);
      })
      .catch(error => {
        console.log(error.message);
        return error.message;
      });
  };

  const setCredits = movieId => {
    GetCredits(movieId)
      .then(({ data, BasicURL }) => {
        setProfileActors(data.cast);
        setBasicUrl(BasicURL);
      })
      .catch(error => {
        console.log(error.message);
        return error.message;
      });
  };

  const getReview = movieId => {
    GetReviews(movieId)
      .then(({ data }) => {
        setReviews(data.results);
      })
      .catch(error => {
        console.log(error.message);
        return error.message;
      });
  };

  const setApiMoveDetails = useCallback((locationPathname, movieId = 0) => {
    switch (locationPathname) {
      case '/':
        getTrendingMovies();
        break;

      case `/movies/${movieId}`:
        getMoveiDelalies(movieId);
        break;

      case `/movies/${movieId}/cast`:
        setCredits(movieId);
        break;

      case `/movies/${movieId}/reviews`:
        getReview(movieId);
        break;

      default:
        console.log('hook error');
        break;
    }
  }, []);

  return {
    errorMessage,
    trendsMovies,
    basicUrl,
    title,
    releaseDate,
    rating,
    overview,
    genres,
    poster,
    profileActors,
    reviews,
    setApiMoveDetails,
  };
};

export default useApiDetails;
