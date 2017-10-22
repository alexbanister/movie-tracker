import * as actions from './HeaderAction';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from 'redux-mock-store';
import Header from './Header';


describe('Header Action', ()=>{

  it('logOutAction should return an action', () => {
    const expected = {
      type: 'LOG_OUT'
    };

    expect(actions.logOutAction()).toEqual(expected);
  });
});

describe('Header snapshot', () => {

  it('should always match the snapshot', () => {
    const mockStore = configureStore();
    const initialState = {
      recentMovies: [{title: ''}],
      favoriteMovies: [],
      user: {},
      newUser: {}
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<Header
      store = {store}
    />);

    expect(wrapper).toMatchSnapshot();

  });
});
