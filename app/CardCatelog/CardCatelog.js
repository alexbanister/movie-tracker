import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchRecentMovies } from '../API/movieDatabase';
import Card from '../Card/Card';
import Slider from 'react-slick';
import {
  addRecentMovies,
  getFavorites,
  addFavorite
} from './CardCatelogActions';
import PropTypes from 'prop-types';
import { addFavoriteFetch, fetchFavorites } from '../API/User';
import sliderOptions from './sliderOptions';

class CardCatelog extends Component {
  async componentDidMount() {
    const recentMovies = await fetchRecentMovies();
    this.props.addRecentMovies(recentMovies);
    if (this.props.user.id) {
      this.getUserFavorites();
    }
  }

  async addFavoriteMovie(movie) {
    const favoriteMovieForFetch = {
      movie_id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      overview: movie.overview,
      user_id: this.props.user.id
    };
    const movieReturn = await addFavoriteFetch(favoriteMovieForFetch);
    this.props.addFavorite(movie);
  }

  async getUserFavorites() {
    const savedFavorites = await fetchFavorites(this.props.user.id);
    this.props.getFavorites(savedFavorites.data);
  }

  buildCards() {
    return this.props.recentMovies.map( (movie, index) => {
      let clickAction=this.addFavoriteMovie.bind(this);
      let cardStyle='';
      let favoriteText='Add to Favorites';
      const isFavorite = this.props.favoriteMovies.find( fav => (
        fav.movie_id === movie.id
      ));
      if (isFavorite) {
        clickAction=this.addFavoriteMovie.bind(this);
        cardStyle='isFavorite';
        favoriteText='Remove from Favorites';
      }
      return (<Card key={index}
        movie={movie}
        cardStyle={cardStyle}
        favoriteText={favoriteText}
        clickAction={clickAction} />);
    });
  }

  render() {
    return (
      <div className='CardCatelog'>
        <div className='slider'>
          <Slider {...sliderOptions}>
            {this.buildCards()}
          </Slider>
        </div>
      </div>
    );
  }
}

CardCatelog.propTypes = {
  recentMovies: PropTypes.array,
  addRecentMovies: PropTypes.func,
  user: PropTypes.object,
  getFavorites: PropTypes.func,
  favoriteMovies: PropTypes.array
};

const mapStateToProps =  (store) => ({
  recentMovies: store.recentMovies,
  favoriteMovies: store.favoriteMovies,
  user: store.user
});

const mapDispatchToProps = (dispatch) => ({
  addRecentMovies: ( recentMovies ) => {
    dispatch(addRecentMovies(recentMovies));
  },
  getFavorites: (favoriteMovies) => { dispatch(getFavorites(favoriteMovies)); },
  addFavorite: (favMov) => { dispatch(addFavorite(favMov)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(CardCatelog);
