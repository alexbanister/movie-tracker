import { combineReducers } from 'redux';
import { user } from './Login/LoginReducer';
import {
  recentMovies,
  favoriteMovies
} from './CardCatelog/CardCatelogReducer';

export default combineReducers({
  recentMovies,
  favoriteMovies,
  user
});
