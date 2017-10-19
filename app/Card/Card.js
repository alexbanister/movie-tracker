import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ movie }) => {
  const backgroundImage = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`
  };
  return (
    <span className='movieCardContainer'>
      <div className='movieCard' style={backgroundImage}>
        <div className='movieInfo'>
          <h2>{movie.title}</h2>
          <h4>{movie.release_date}</h4>
          <div>
            Add Favorite
          </div>
        </div>
      </div>
    </span>
  );
};

Card.propTypes = {
  movie: PropTypes.object
};
export default Card;
