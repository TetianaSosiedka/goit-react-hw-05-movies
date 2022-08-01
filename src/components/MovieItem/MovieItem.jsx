import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Li } from './MovieItem.styled';

const MovieItem = ({ movieDetails }) => {
  const saveMovieDetails = () => {
    localStorage.setItem('saveMovieDetails', JSON.stringify(movieDetails));
  };

  return (
    <Li>
      <Link to={`/movies/${movieDetails.id}`} onClick={saveMovieDetails}>
        {movieDetails.title}
      </Link>
    </Li>
  );
};

MovieItem.prototype = {
  movieDetails: PropTypes.array.isRequired,
};

export default MovieItem;
