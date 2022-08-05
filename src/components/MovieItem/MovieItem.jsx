import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Li } from './MovieItem.styled';

const MovieItem = ({ movieDetails }) => {
  return (
    <Li>
      <Link to={`/movies/${movieDetails.id}`}>{movieDetails.title}</Link>
    </Li>
  );
};

MovieItem.prototype = {
  movieDetails: PropTypes.array.isRequired,
};

export default MovieItem;
