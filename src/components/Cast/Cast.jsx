import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { InfoBlock } from './Cast.styled';
import useApiDetails from '../../hooks/useApiDetails';

const Cast = () => {
  const { basicUrl, profileActors, errorMessage, setApiMoveDetails } =
    useApiDetails();

  const { movieId } = useParams();
  const locationPathname = useLocation().pathname;

  useEffect(
    () => setApiMoveDetails(locationPathname, movieId),
    [locationPathname, movieId, setApiMoveDetails]
  );

  return (
    <>
      {errorMessage.length === 0 && profileActors.length === 0 && (
        <InfoBlock>Loading ...</InfoBlock>
      )}
      {errorMessage.length > 0 && <InfoBlock>{errorMessage}</InfoBlock>}
      <ul>
        {profileActors.map(
          actor =>
            [basicUrl, actor.profile_path].join('') && (
              <li key={actor.id}>
                <img
                  src={[basicUrl, actor.profile_path].join('')}
                  //src="http://dummyimage.com/150x200/329fd6.gif&text=Actor+Photo!"
                  alt={actor.name}
                  width="150"
                  loading="lazy"
                />
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            )
        )}
      </ul>
    </>
  );
};
export default Cast;
