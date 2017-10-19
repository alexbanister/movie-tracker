import React from 'react';

const Card = ({ movie }) => {
  const backgroundImage = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`
  };
  return (
    <span className='movieCard' style={backgroundImage}>
      <div className='movieInfo'>
        <h2>{movie.title}</h2>
        <h4>{movie.release_date}</h4>
      </div>
    </span>
  );
};

export default Card;
