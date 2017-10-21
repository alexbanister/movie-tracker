export const addRecentMovies = (recentMovies) => ({
  type: 'ADD_RECENT_MOVIES',
  recentMovies
});

export const addFavorite = (favMov) => ({
  type: 'ADD_FAVORITE',
  favMov
});

export const getFavorites = (favoriteMovies) => {
  return {
    type: 'GET_FAVORITES',
    favoriteMovies
  };
};

export const removeFavorites = (favoriteMovies) => {
  return {
    type: 'REMOVE_FAVORITES',
    favoriteMovies
  };
};
