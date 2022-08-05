import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from '../SharedLayout';

const Home = lazy(() =>
  import('../../pages/home' /* webpackChunkName: "Home" */)
);
const Movies = lazy(() =>
  import('../../pages/movies' /* webpackChunkName: "Movies" */)
);
const MovieDetails = lazy(() =>
  import('../../pages/movieDetails' /* webpackChunkName: "MovieDetails" */)
);
const Cast = lazy(() => import('../Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import('../Reviews' /* webpackChunkName: "Reviews" */)
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
