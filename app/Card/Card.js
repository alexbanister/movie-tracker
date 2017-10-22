import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'

const Card = ({
  history,
  user,
  movie,
  clickAction,
  cardStyle,
  favoriteText,
  addToFavorites,
  removeFavorites }) => {

  backgroundImage = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path})`
  };

  const handleFavorite = () => {
    if (!user.id) {
      history.push('/login');
    } else if (cardStyle === '') {
      addToFavorites(movie);
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
  user: PropTypes.object,
  clickAction: PropTypes.func,
  removeFavorites: PropTypes.func,
  addToFavorites: PropTypes.func,
  cardStyle: PropTypes.string,
  favoriteText: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(Card);
