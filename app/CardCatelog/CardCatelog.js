import { connect } from 'react-redux';
import { addTodo } from './CardCatelogActions';

const CardCatelog = () => {
  return 'im thecard catelog';
};

const mapStateToProps =  (store) => ({
  todos: store.todos
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (text, id) => {
    dispatch(addTodo(text, id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CardCatelog);
