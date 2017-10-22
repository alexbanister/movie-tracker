import * as actions from './SignUpAction';
import * as reducers from './SignUpReducer';

describe('Login action', ()=>{

  it('SignUpAction should take object return an action', () => {
    const newUser = {
      name: 'Mr. Mike',
      email: 'Mr.Mike@Mr.Mike.com',
      password: 'Password'
    };
    const expected = {
      type: 'SIGN_UP_ACTION',
      newUser: {
        name: 'Mr. Mike',
        email: 'Mr.Mike@Mr.Mike.com',
        password: 'Password'
      }
    };

    expect(actions.SignUpAction(newUser)).toEqual(expected);
  });
});

describe('CardCatalog Reducers', () => {
  it('newUser should set default state', () => {
    const expectation = {};

    expect(reducers.newUser(undefined, {})).toEqual(expectation);
  });

  it('SIGN_UP_ACTION should add a new user to state', () => {
    const action = {
      type: 'SIGN_UP_ACTION',
      newUser: {
        name: 'Mr. Mike',
        email: 'Mr.Mike@Mr.Mike.com',
        password: 'Password'
      }
    };
    const expectation = action.newUser;

    expect(reducers.newUser(undefined, action)).toEqual(expectation);
  });
});
