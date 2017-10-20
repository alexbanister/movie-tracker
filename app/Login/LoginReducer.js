export const user = (store = {}, action) => {
  switch (action.type) {
  case 'LOGIN_ACTION':
    return Object.assign({}, action.user);
  case 'LOG_OUT':
    return {};
  default:
    return store;
  }
};

export const favorite =(store = [], action) => {
  switch (action.type) {
  case 'GET_FAVORITES':
    return action.favoriteMovies;
  default:
    return store;
  }
};
