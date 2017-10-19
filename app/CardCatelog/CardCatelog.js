import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchRecentMovies } from '../API/movieDatabase';
import Card from '../Card/Card';
import Slider from 'react-slick';
import { addRecentMovies, getFavorites } from './CardCatelogActions';
import PropTypes from 'prop-types';

class CardCatelog extends Component {
  async componentDidMount() {
    const recentMovies = await fetchRecentMovies();
    this.props.addRecentMovies(recentMovies);
    this.props.getFavorites();
  }

  render() {
    const options = {
      infinite: false,
      accessibility: true,
      arrows: true,
      variableWidth: false,
      slidesToShow: 4,
      slidesToScroll: 1,
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

    const allMovies = this.props.recentMovies.map( (movie) => {
      return <Card key={movie.id} movie={movie} />;
    });
    return (
      <div className='CardCatelog'>
        <Slider {...options}>
          {allMovies}
        </Slider>
      </div>
    );
  }
}

CardCatelog.propTypes = {
  recentMovies: PropTypes.array,
  addRecentMovies: PropTypes.func,
  getFavorites: PropTypes.func
};

const mapStateToProps =  (store) => ({
  recentMovies: store.recentMovies,
  favoriteMovies: store.favoriteMovies
});

const mapDispatchToProps = (dispatch) => ({
  addRecentMovies: ( recentMovies ) => {
    dispatch(addRecentMovies(recentMovies));
  },
  getFavorites: () => { dispatch(getFavorites()); }
});

export default connect(mapStateToProps, mapDispatchToProps)(CardCatelog);
