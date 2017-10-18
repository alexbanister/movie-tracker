export const CardCatelogReducer = (store = [], action) => {
  switch (action.type) {
  case 'ADD_RECENT_MOVIES':
    return [...store, ...action.recentMovies];
  default:
    return store;
  }
};
