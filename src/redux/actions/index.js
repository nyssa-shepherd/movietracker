import { fetchMovies } from '../../api/apiCalls.js';

export const fetchApiMovies = () => async (dispatch) => {
  const movies = await fetchMovies();
  return await dispatch(addMovies(movies));
};

export const addMovies = movies => {
  console.log(movies)
  return {
    type: 'ADD_MOVIES',
    movies
  }
};