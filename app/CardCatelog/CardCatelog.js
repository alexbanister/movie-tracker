import { connect } from 'react-redux';
import { addTodo } from './CardCatelogActions';
import React, { Component } from 'react';
import { fetchRecentMovies } from '../API/movieDatabase';
import Card from '../Card/Card';
import Slider from 'react-slick';

export default class CardCatelog extends Component {
  constructor(){
    super();
    this.state = {
      recentMovies: []
    };
  }

  async componentDidMount() {
    //set state
    const recentMovies = await fetchRecentMovies();
    this.setState({
      recentMovies: recentMovies
    });
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
    const allMovies = this.state.recentMovies.map( (movie) => {
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

// return (
//   <div className='CardCatelog'>
//     <ReactSiema>
//       {allMovies}
//     </ReactSiema>
//   </div>


const mapStateToProps =  (store) => ({
  todos: store.todos
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (text, id) => {
    dispatch(addTodo(text, id));
  }
});

// export default connect(mapStateToProps, mapDispatchToProps)(CardCatelog);
