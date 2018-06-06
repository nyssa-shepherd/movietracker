import { fetchMovies } from '../../api/apiCalls.js';

export const fetchApiMovies = () => async (dispatch) => {
  const movies = await fetchMovies();
  return await dispatch(addMovies(movies));
};

export const addMovies = movies => ({
    type: 'ADD_MOVIES',
    movies
});

export const addUser = user => ({
  type: 'ADD_USER',
  user
});

export const addFavorite = favoriteMovie => ({
  type: 'ADD_FAVORITE',
  favoriteMovie
});