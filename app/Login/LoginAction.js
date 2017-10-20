export const LoginAction = (user) => {
  return {
    type: 'LOGIN_ACTION',
    user
  };
};

export const getFavorites = (favoriteMovies) => {
  return {
    type: 'GET_FAVORITES',
    favoriteMovies
  };
};
