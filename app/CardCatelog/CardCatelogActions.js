export const addRecentMovies = (recentMovies) => ({
  type: 'ADD_RECENT_MOVIES',
  recentMovies
});

export const getFavorites = () => ({
  type: 'GET_FAVORITES'
});

export const addFavorite = (favMov) => ({
  type: 'ADD_FAVORITE',
  favMov
});
