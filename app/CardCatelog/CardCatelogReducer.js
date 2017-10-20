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
  default:
    return store;
  }
};
