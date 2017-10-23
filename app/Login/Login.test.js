import * as actions from './LoginAction';
import * as reducers from './LoginReducer';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import Login from './Login';
import createRouterContext from 'react-router-test-context';
import PropTypes from 'prop-types';
import React from 'react';

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

describe('Login snapshot', () => {

  it('should always match the snapshot', () => {
    const mockStore = configureStore();
    const initialState = {
      user: {}
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<Login
      store = {store}
    />);

    expect(wrapper).toMatchSnapshot();

  });
});

describe('Login container', () => {

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
    const wrapper = mount(<Login
      store={store}
      users={{users: {}}}
    />, {context, childContextTypes});

    expect(wrapper.instance().props.users).toEqual({users: {}});

  });
});

describe('Login container', () => {

  it.skip('should have default state', () => {
    const mockStore = configureStore();
    const initialState = {
      user: {id:1}
    };
    const store = mockStore(initialState);
    const context = createRouterContext();
    const childContextTypes = {
      router: PropTypes.object
    };
    const wrapper = mount(<Login

      user={initialState}
    />);
    const expected = {
      email: 'Mr.Mike@mrmike.com',
      password: 'Sir Will',
      disabled: true,
      loginError: false
    };
    const email = wrapper.find('input').first()
    // const password =wrapper.find('input').last()
    console.log(wrapper.props());

    email.simulate('change', {target: {value: 'Mr.Mike@mrmike.com'}})
    // .simulate('change', {target: {value: 'Sir Will'}})
    console.log(wrapper.state());
    expect(wrapper.state().email).toEqual(expected.email);

  });
});
