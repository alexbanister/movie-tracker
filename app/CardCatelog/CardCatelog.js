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
    const options = {
      infinite: false,
      accessibility: true,
      arrows: true,
      variableWidth: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      focusOnSelect: true,
      responsive: [{
        breakpoint: 300, settings:
          { slidesToShow: 1 }
      }, {
        breakpoint: 600, settings:
          { slidesToShow: 2 }
      }, {
        breakpoint: 800, settings:
          { slidesToShow: 2 }
      }, {
        breakpoint: 1000, settings:
          { slidesToShow: 4 }
      }, {
        breakpoint: 1200, settings:
          { slidesToShow: 5 }
      }]
    };

    const allMovies = this.props.recentMovies.map( (movie, index) => {
      return (<Card key={index }
        movie={movie}
        addFavoriteMovie={this.addFavoriteMovie.bind(this)} />);
    });
    return (
      <div className='CardCatelog'>
        <div className='slider'>
          <Slider {...options}>
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
