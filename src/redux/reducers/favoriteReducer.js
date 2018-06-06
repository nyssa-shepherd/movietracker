export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE' :
      return [...state, action.favoriteMovie];
    default:
      return state;
  } 
}