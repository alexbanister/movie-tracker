export const user = (store = {}, action) => {
  switch (action.type) {
  case 'LOGIN_ACTION':
    return Object.assign({}, action.user);
  case 'LOG_OUT':
    return {};
  default:
    return store;
  }
};
