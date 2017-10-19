export const newUser = (store = {}, action) => {
  switch (action.type) {
  case 'SignUp_ACTION':
    return Object.assign({}, action.newUser);
  default:
    return store;
  }
};
