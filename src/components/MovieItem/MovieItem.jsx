import PropTypes from 'prop-types';

import { Li } from './MovieItem.styled';

const MovieItem = ({ title }) => {
  return (
    <Li>
      <a href="" alt={title}>
        {title}
      </a>
    </Li>
  );
};

MovieItem.prototype = {
  title: PropTypes.string,
};

export default MovieItem;
