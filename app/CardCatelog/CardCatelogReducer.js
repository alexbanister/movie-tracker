export const recentMovies = (store = [], action) => {
  switch (action.type) {
  case 'ADD_RECENT_MOVIES':
    return [...store, ...action.recentMovies];
  default:
    return store;
  }
};

export const favoriteMovies = (store = [], action) => {
  switch (action.type) {
  case 'GET_FAVORITES':
    return store;
  case 'ADD_FAVORITE':
    return [...store, action.favMov];
  default:
    return store;
  }
};
