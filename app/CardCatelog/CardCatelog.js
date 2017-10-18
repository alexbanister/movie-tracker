import { connect } from 'react-redux';
import { addTodo } from './CardCatelogActions';
import React, { Component } from 'react';
import { fetchRecentMovies } from '../API/movieDatabase';
import Card from '../Card/Card';
import ReactSiema from 'react-siema';
// import Slide from '../Slide/Slide';

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
    const imageURL = 'https://image.tmdb.org/t/p/w500/';
    const allMovies = this.state.recentMovies.map( (movie) => {
      return <Card key={movie.id} movie={movie} />;
      // <Slide src={`${imageURL}${movie.poster_path}`} />;
      // (<Card key={movie.id} movie={movie} />);
    });
    return(
      <div>
      {allMovies}
    </div>
    )

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
