import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { SearchById } from '../api/SearchApi';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [moveDates, setMoveDates] = useState();

  useEffect(() => {
    SearchById(movieId)
      .then(results => {
        console.log(results);
        setMoveDates(results);
      })
      .catch(error => {
        console.log(error.message);
        return error.message;
      });
  }, [movieId]);

  return (
    <article>
      <h2>{moveDates.original_title}</h2>
    </article>
  );
};

export default MovieDetails;
