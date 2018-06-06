import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import { userReducer } from './userReducer';
import { favoriteReducer } from './favoriteReducer';

export const rootReducer = combineReducers({
  movies: movieReducer,
  user: userReducer,
  favorites: favoriteReducer
});
