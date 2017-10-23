import * as actions from './SignUpAction';
import * as reducers from './SignUpReducer';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import SignUpContainer, { SignUp } from './SignUp';
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
    const wrapper = shallow(<SignUpContainer
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
    const wrapper = mount(<SignUpContainer
      store={store}
      users={{users: {}}}
    />, {context, childContextTypes});

    expect(wrapper.instance().props.users).toEqual({users: {}});

  });
});

describe('SignUp state', () => {
  it('should have default state', () => {
    const context = createRouterContext();
    const initialState = {};
    const expected = {
      name: 'Yung-Jhun',
      email: 'Yung@Jhun.tacos',
      password: 'complete',
      retypePassword: 'complete',
      signUpError: false,
      disabled: false,
      passwordValidationError: false
    };

    const wrapper = shallow(<SignUp
      user={initialState}
    />, context);

    const name = wrapper.find('[type="text"]');
    const email = wrapper.find('[type="email"]');
    const password = wrapper.find('[type="password"]').first();
    const rePassword = wrapper.find('[type="password"]').last();

    name.simulate('change', {target: {value: 'Yung-Jhun'}});
    email.simulate('change', {target: {value: 'Yung@Jhun.tacos'}});
    password.simulate('change', {target: {value: 'complete'}});
    rePassword.simulate('change', {target: {value: 'complete'}});

    expect(wrapper.state()).toEqual(expected);
  });
});
