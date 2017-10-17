import { connect } from 'react-redux';
import { addTodo } from './CardCatelogActions';
import React, { Component } from 'react';
import { fetchRecentMovies } from '../API/movieDatabase';

export default class CardCatelog extends Component {

  async componentDidMount() {
    const recentMovies = await fetchRecentMovies();
  }

  render() {
    return (
      <div>
        <h1>Movie Watcher</h1>
        <h1>Movie Watcher</h1>
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
