export const LoginAction = (user) => {
console.log(user);
  return {
    type: 'LOGIN_ACTION',
    user
  };
};
