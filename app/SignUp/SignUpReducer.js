export const newUser = (store = {}, action) => {
  switch (action.type) {
  case 'SIGN_UP_ACTION':
    return Object.assign({}, action.newUser);
  default:
    return store;
  }
};
