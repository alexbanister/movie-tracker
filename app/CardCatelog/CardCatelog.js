import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchRecentMovies } from '../API/movieDatabase';
import Card from '../Card/Card';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import sliderOptions from './sliderOptions';
import {
  addRecentMovies,
  getFavorites,
  addFavorite,
  removeFavorites
} from './CardCatelogActions';
import {
  addFavoriteFetch,
  fetchFavorites,
  fetchRemoveFavorite
} from '../API/User';

class CardCatelog extends Component {

  async componentDidMount() {
    const recentMovies = await fetchRecentMovies();
    this.props.addRecentMovies(recentMovies);
    if (this.props.user.id) {
      this.getUserFavorites();
    }
  }

  findFavToRemoveFromStore(favMovie) {
    console.log(favMovie);
    const updatedFavoriteMovies = this.props.favoriteMovies.filter((movie) => {
      console.log(favMovie.movie_id);
      console.log(movie.movie_id);
      return movie.movie_id !== favMovie.id;
    });
    console.log(updatedFavoriteMovies);
    this.props.removeFavorites(updatedFavoriteMovies);
  }

  removeFavorites = (movie) => {
    fetchRemoveFavorite(this.props.user.id, movie.id);
    this.findFavToRemoveFromStore(movie);
  }

  addFavoriteMovie = async (movie) => {
    const favoriteMovieForFetch = {
      movie_id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      overview: movie.overview,
      user_id: this.props.user.id
    };
    await addFavoriteFetch(favoriteMovieForFetch);
    this.props.addFavorite(favoriteMovieForFetch);
  }

  async getUserFavorites() {
    const savedFavorites = await fetchFavorites(this.props.user.id);
    const cleanfavorites = this.cleanfavorites(savedFavorites.data);
    this.props.getFavorites(cleanfavorites);
  }

  cleanfavorites(savedFavorites){
      const clean = savedFavorites.map((movie) =>{
      let movieId = {id: movie.movie_id};
        let obj = Object.assign({}, movie, movieId);
        return obj     
    });
    console.log(clean);
    return clean
  }

  buildCards(movies) {
    return movies.map( movie => {
      let cardStyle='';
      let favoriteText='Add to Favorites';
      const isFavorite = this.props.favoriteMovies.find( fav => {
        return fav.id === movie.id
      });
      if (isFavorite) {
        cardStyle='isFavorite';
        favoriteText='Remove from Favorites';
      }
      return (<Card key={movie.id}
        user={this.props.user}
        movie={movie}
        cardStyle={cardStyle}
        favoriteText={favoriteText}
        addToFavorites={this.addFavoriteMovie}
        removeFavorites={this.removeFavorites}
        favoriteMovies={this.props.favoriteMovies}
      />
      );
    });
  }


  render() {
    const moviesToLoad = this.props.match.path === '/favorites' ? this.props.favoriteMovies : this.props.recentMovies
    return (
      <div className='CardCatelog'>
        <div className='slider'>
          {/* <Slider {...sliderOptions}> */}
            {this.buildCards(moviesToLoad)}
          {/* </Slider> */}
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
  favoriteMovies: PropTypes.array,
  addFavorite: PropTypes.func,
  removeFavorites: PropTypes.func
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
  addFavorite: (favMov) => { dispatch(addFavorite(favMov)); },
  removeFavorites: (favoriteMovies) => { dispatch(removeFavorites(favoriteMovies)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(CardCatelog);
