export const user = (store = {}, action) => {
  switch (action.type) {
  case 'LOGIN_ACTION':
    return {...action.user};
  default:
    return store;
  }
};
