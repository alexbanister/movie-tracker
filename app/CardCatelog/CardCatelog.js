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
import { addFavoriteFetch } from '../API/User';
import sliderOptions from './sliderOptions';

class CardCatelog extends Component {
  async componentDidMount() {
    const recentMovies = await fetchRecentMovies();
    this.props.addRecentMovies(recentMovies);
    // this.props.getFavorites();
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
  favoriteMovies: store.favoriteMovies,
  user: store.user
});

const mapDispatchToProps = (dispatch) => ({
  addRecentMovies: ( recentMovies ) => {
    dispatch(addRecentMovies(recentMovies));
  },
  getFavorites: () => { dispatch(getFavorites()); },
  addFavorite: (favMov) => { dispatch(addFavorite(favMov)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(CardCatelog);
