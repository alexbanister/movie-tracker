import { connect } from 'react-redux';
import { addTodo } from './CardCatelogActions';
import React, { Component } from 'react';
import { fetchRecentMovies } from '../API/movieDatabase';
import Card from '../Card/Card'

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
    const allMovies = this.state.recentMovies.map( (movie) => {
      return (<Card key={movie.id} movie={movie} />);
    });
    return (
      <div>
        {allMovies}
      </div>
    );
  }
}


const mapStateToProps =  (store) => ({
  todos: store.todos
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (text, id) => {
    dispatch(addTodo(text, id));
  }
});

// export default connect(mapStateToProps, mapDispatchToProps)(CardCatelog);
