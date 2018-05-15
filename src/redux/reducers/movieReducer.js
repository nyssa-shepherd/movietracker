export const movieReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE' :
      return [...state, ...action.movies];
    default:
      return state;
  } 
}