import * as actions from './SignUpAction';
import * as reducers from './SignUpReducer';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import ReactDOM from 'react-dom';
import SignUp from './SignUp';
import createRouterContext from 'react-router-test-context';
import PropTypes from 'prop-types';
import React from 'react';

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

describe('SignUp snapshot', () => {

  it('should always match the snapshot', () => {
    const mockStore = configureStore();
    const initialState = {
      user: {}
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<SignUp
      store = {store}
    />);

    expect(wrapper).toMatchSnapshot();

  });
});

describe('SignUp container', () => {

  it('should have default state', () => {
    const mockStore = configureStore();
    const initialState = {
      user: {}
    };
    const store = mockStore(initialState);
    const context = createRouterContext();
    const childContextTypes = {
      router: PropTypes.object
    };
    const wrapper = mount(<SignUp
      store={store}
      users={{users: {}}}
    />, {context, childContextTypes});

    expect(wrapper.instance().props.users).toEqual({users: {}});

  });
});
