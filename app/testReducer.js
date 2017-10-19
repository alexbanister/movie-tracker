const testReducer = (store = [], action) => {
  switch (action.type) {
  case 'TEST':
    return 'bob';
  default:
    return store;
  }
};

export default testReducer;
