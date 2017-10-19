import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ movie, addFavoriteMovie }) => {
  const backgroundImage = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`
  };

  const handleAddFavorite = () => {
<<<<<<< HEAD
    addFavoriteMovie(movie);
  };
  
||||||| merged common ancestors
    addFavoriteMovie(movie)
  }
=======
    addFavoriteMovie(movie)
  }
  
>>>>>>> 2ccc02e5a91e0cd87042e4076b154abce977664d
  return (
    <span className='movieCardContainer'>
      <div className='movieCard' style={backgroundImage}>
        <div className='movieInfo'>
          <h2>{movie.title}</h2>
          <h4>{movie.release_date}</h4>
          <div onClick={handleAddFavorite}>
            Add Favorite
          </div>
        </div>
      </div>
    </span>
  );
};

Card.propTypes = {
  movie: PropTypes.object,
  addFavoriteMovie: PropTypes.func
};
export default Card;
