import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {

  backgroundImage = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path})`
  };

  componentWillReceive(nextProps) {
    return  this.props.favoriteMovies !== nextProps.favoriteMovies;
  }

  componentWillUpdate(nextProps) {
    return  this.props.favoriteMovies !== nextProps.favoriteMovies;
  }

  handleFavorite = () => {
    if (this.props.cardStyle === '') {
      this.props.addToFavorites(this.props.movie);
    } else {
      this.props.removeFavorites(this.props.movie);
    }
  };

  render() {
    return (
      <span className='movieCardContainer'>
        <div className={`movieCard ${this.props.cardStyle}`} style={this.backgroundImage}>
          <div className='movieInfo'>
            <h2>{this.props.movie.title}</h2>
            <h4>{this.props.movie.release_date}</h4>
            <div onClick={this.handleFavorite}>
              {this.props.favoriteText}
            </div>
          </div>
        </div>
      </span>
    );
  }
}


Card.propTypes = {
  movie: PropTypes.object,
  removeFavorites: PropTypes.func,
  addToFavorites: PropTypes.func,
  cardStyle: PropTypes.string,
  favoriteText: PropTypes.string,
  favoriteMovies: PropTypes.array
};

export default Card;
