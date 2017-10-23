import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Card = ({
  key,
  history,
  user,
  movie,
  cardStyle,
  favoriteText,
  addToFavorites,
  removeFavorites }) => {

  const backgroundImage = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`
  };

  const handleFavorite = () => {
    if (!user.id) {
      history.push('/login');
    } else if (cardStyle === '') {
      addToFavorites(movie);
    } else {
      removeFavorites(movie);
    }
  };

  return (
    <span className='movieCardContainer' key={key}>
      <div className={`movieCard ${cardStyle}`} style={backgroundImage}>
        <div className='movieInfo'>
          <h2>{movie.title}</h2>
          <h4>{movie.release_date}</h4>
        </div>
        <div className='favoriteText' onClick={handleFavorite}>
          {favoriteText}
        </div>
      </div>
    </span>
  );
};


Card.propTypes = {
  movie: PropTypes.object,
  user: PropTypes.object,
  removeFavorites: PropTypes.func,
  addToFavorites: PropTypes.func,
  cardStyle: PropTypes.string,
  favoriteText: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  key:PropTypes.string
};

export default withRouter(Card);
