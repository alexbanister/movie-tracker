import * as actions from './LoginAction';
import * as reducers from './LoginReducer';

describe('Login action', ()=>{

  it('logOutAction should return an action', () => {
    const user = {
      id:1,
      name: 'Mr. Mike',
      email: 'Mr.Mike@Mr.Mike.com',
      password: 'Password'
    };
    const expected = {
      type: 'LOGIN_ACTION',
      user: {
        id:1,
        name: 'Mr. Mike',
        email: 'Mr.Mike@Mr.Mike.com',
        password: 'Password'
      }
    };

    expect(actions.LoginAction(user)).toEqual(expected);
  });
});

describe('CardCatalog Reducers', () => {
  it('user should set default state', () => {
    const expectation = {};

    expect(reducers.user(undefined, {})).toEqual(expectation);
  });

  it('LOGIN_ACTION should add a user to state', () => {
    const action = {
      type: 'LOGIN_ACTION',
      user: {
        id:1,
        name: 'Mr. Mike',
        email: 'Mr.Mike@Mr.Mike.com',
        password: 'Password'
      }
    };
    const expectation = action.user;

    expect(reducers.user(undefined, action)).toEqual(expectation);
  });

  it('LOG_OUT should return user state to an empty object', () => {
    const action = {
      type: 'LOG_OUT'
    };
    const expectation = {};

    expect(reducers.user(undefined, action)).toEqual(expectation);
  });

});
