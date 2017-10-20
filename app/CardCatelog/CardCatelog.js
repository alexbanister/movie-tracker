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
    console.log('mounting');
    const recentMovies = await fetchRecentMovies();
    this.props.addRecentMovies(recentMovies);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user.id) {
      console.log('got props');
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

  render() {
    const allMovies = this.props.recentMovies.map( (movie, index) => {
      return (<Card key={index }
        movie={movie}
        addFavoriteMovie={this.addFavoriteMovie.bind(this)} />);
    });
    return (
      <div className='CardCatelog'>
        <div className='slider'>
          <Slider {...sliderOptions}>
            {allMovies}
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
  favoriteMovie: PropTypes.func
};

const mapStateToProps =  (store) => ({
  recentMovies: store.recentMovies,
  favorites: store.favorites,
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
