export const recentMovies = (store = [], action) => {
  switch (action.type) {
  case 'ADD_RECENT_MOVIES':
    return [...action.recentMovies];
  default:
    return store;
  }
};

export const favoriteMovies = (store = [], action) => {
  switch (action.type) {
  case 'GET_FAVORITES':
    return [...action.favoriteMovies];
  case 'ADD_FAVORITE':
    return [...store, action.favMov];
  case 'REMOVE_FAVORITES':
    return [...action.favoriteMovies];
  case 'LOG_OUT':
    return [];
  default:
    return store;
  }
};
