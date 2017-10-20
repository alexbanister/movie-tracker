import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ movie, clickAction, cardStyle, favoriteText }) => {
  const backgroundImage = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`
  };

  const handleAddFavorite = () => {
    clickAction(movie);
  };

  return (
    <span className='movieCardContainer'>
      <div className={`movieCard ${cardStyle}`} style={backgroundImage}>
        <div className='movieInfo'>
          <h2>{movie.title}</h2>
          <h4>{movie.release_date}</h4>
          <div onClick={handleAddFavorite}>
            {favoriteText}
          </div>
        </div>
      </div>
    </span>
  );
};

Card.propTypes = {
  movie: PropTypes.object,
  clickAction: PropTypes.func,
  cardStyle: PropTypes.string,
  favoriteText: PropTypes.string
};
export default Card;
