import { combineReducers } from 'redux';
import { user } from './Login/LoginReducer';
import {
  recentMovies,
  favoriteMovies
} from './CardCatelog/CardCatelogReducer';
import { newUser } from './SignUp/SignUpReducer';

export default combineReducers({
  recentMovies,
  favoriteMovies,
  user,
  newUser
});
