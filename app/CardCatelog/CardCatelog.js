import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchRecentMovies } from '../API/movieDatabase';
import Card from '../Card/Card';
import Slider from 'react-slick';
import addRecentMovies from './CardCatelogActions';

class CardCatelog extends Component {
  constructor(){
    super();
    this.state = {
      recentMovies: []
    };
  }

  async componentDidMount() {
    const mockData = [
      {
        "vote_count": 881,
        "id": 335984,
        "video": false,
        "vote_average": 7.8,
        "title": "Blade Runner 2049",
        "popularity": 452.191852,
        "poster_path": "/aMpyrCizvSdc0UIMblJ1srVgAEF.jpg",
        "original_language": "en",
        "original_title": "Blade Runner 2049",
        "genre_ids": [
          28, 9648, 878, 53
        ],
        "backdrop_path": "/mVr0UiqyltcfqxbAUcLl9zWL8ah.jpg",
        "adult": false,
        "overview": "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
        "release_date": "2017-10-04"
      }];
      this.props.addRecentMovies(mockData);
    // const recentMovies = await fetchRecentMovies();
    // this.setState({
    //   recentMovies: recentMovies
    // });
  }

  render() {
    const options = {
      dots: true,
      infinite: false,
      accessibility: true,
      arrows: true,
      variableWidth: false,
      speed: 500,
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
    console.log(this.props.CardCatelogReducer);
    const allMovies = this.props.CardCatelogReducer.map( (movie) => {
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

const mapStateToProps =  (store) => ({
  CardCatelogReducer: store.CardCatelogReducer
});

const mapDispatchToProps = (dispatch) => ({
  addRecentMovies: ( recentMovies ) => {
    dispatch(addRecentMovies(recentMovies));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CardCatelog);
