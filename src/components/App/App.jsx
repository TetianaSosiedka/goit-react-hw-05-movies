import { Routes, Route, NavLink } from 'react-router-dom';

import { Li, Header } from './App.styled.jsx';

import Home from '../../pages/home';
import Movies from '../../pages/movies';
import MovieDetails from '../../pages/movieDetails';

export const App = () => {
  return (
    <div>
      <Header>
        <nav>
          <ul>
            <Li>
              <NavLink to="/">Home</NavLink>
            </Li>
            <Li>
              <NavLink to="/movies">Movies</NavLink>
            </Li>
          </ul>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home title={'Trending today'} />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
