import configureStore from 'redux-mock-store';
import {shallow } from 'enzyme';
import CardCatelog from './CardCatelog';
import * as actions from './CardCatelogActions';
import * as reducers from './CardCatelogReducer';
import React from 'react';

describe('CardCatalog Actions', () => {

  it('addRecentMovies should take and array and return an action', () => {
    const recentMovies = [{
      id: 1,
      title: 'movieTitle',
      release_date: 'tomorrow',
      poster_path: 'this is a path'
    }];
    const expected = {
      type: 'ADD_RECENT_MOVIES',
      recentMovies: [{
        id: 1,
        title: 'movieTitle',
        release_date: 'tomorrow',
        poster_path: 'this is a path'
      }]
    };

    expect(actions.addRecentMovies(recentMovies)).toEqual(expected);
  });

  it('addFavorite should take and object and return an action', () => {
    const favMov = {
      id: 1,
      title: 'movieTitle',
      release_date: 'tomorrow',
      poster_path: 'this is a path'
    };
    const expected = {
      type: 'ADD_FAVORITE',
      favMov: {
        id: 1,
        title: 'movieTitle',
        release_date: 'tomorrow',
        poster_path: 'this is a path'
      }
    };
    expect(actions.addFavorite(favMov)).toEqual(expected);
  });

  it('getFavorites should take an array and return an action', () => {
    const favoriteMovies = [{
      id: 1,
      title: 'movieTitle',
      release_date: 'tomorrow',
      poster_path: 'this is a path'
    }];
    const expected = {
      type: 'GET_FAVORITES',
      favoriteMovies: [{
        id: 1,
        title: 'movieTitle',
        release_date: 'tomorrow',
        poster_path: 'this is a path'
      }]
    };
    expect(actions.getFavorites(favoriteMovies)).toEqual(expected);
  });

  it('removeFavorites should take an array and return an action', () => {
    const favoriteMovies = [{
      id: 1,
      title: 'movieTitle',
      release_date: 'tomorrow',
      poster_path: 'this is a path'
    }];
    const expected = {
      type: 'REMOVE_FAVORITES',
      favoriteMovies: [{
        id: 1,
        title: 'movieTitle',
        release_date: 'tomorrow',
        poster_path: 'this is a path'
      }]
    };
    expect(actions.removeFavorites(favoriteMovies)).toEqual(expected);
  });
});

describe('CardCatalog Reducers', () => {
  it('recentMovies should set default state', () => {
    const expectation = [];

    expect(reducers.recentMovies(undefined, {})).toEqual(expectation);
  });

  it('ADD_RECENT_MOVIES should add recent movies to state', () => {
    const action = {
      type: 'ADD_RECENT_MOVIES',
      recentMovies: [{
        id: 1,
        title: 'movieTitle',
        release_date: 'tomorrow',
        poster_path: 'this is a path'
      }]
    };
    const expectation = action.recentMovies;

    expect(reducers.recentMovies(undefined, action)).toEqual(expectation);
  });

  it('favoriteMovies should set a default state', () => {
    const expectation = [];
    expect(reducers.favoriteMovies(undefined, {})).toEqual(expectation);
  });

  it('GET_FAVORITES should update favorite movies to state', () => {
    const action = {
      type: 'GET_FAVORITES',
      favoriteMovies: [{
        id: 1,
        title: 'movieTitle',
        release_date: 'tomorrow',
        poster_path: 'this is a path'
      }]
    };
    const expectation = action.favoriteMovies;

    expect(reducers.favoriteMovies(undefined, action)).toEqual(expectation);
  });

  it('ADD_FAVORITE should add a favorite movies to state', () => {
    const action = {
      type: 'ADD_FAVORITE',
      favMov: {
        id: 1,
        title: 'movieTitle',
        release_date: 'tomorrow',
        poster_path: 'this is a path'
      }
    };
    const expectation = [action.favMov];

    expect(reducers.favoriteMovies(undefined, action)).toEqual(expectation);
  });

  it('REMOVE_FAVORITES should remove a favorite movies in state', () => {
    const action = {
      type: 'REMOVE_FAVORITES',
      favoriteMovies: [{
        id: 1,
        title: 'movieTitle',
        release_date: 'tomorrow',
        poster_path: 'this is a path'
      }]
    };
    const expectation = action.favoriteMovies;

    expect(reducers.favoriteMovies(undefined, action)).toEqual(expectation);
  });

  it('LOG_OUT should remove all favorite movies in state', () => {
    const action = {
      type: 'LOG_OUT'
    };
    const expectation = [];

    expect(reducers.favoriteMovies(undefined, action)).toEqual(expectation);
  });

});

describe('CardCatalog snapshot', () => {

  it('should always match the snapshot', () => {
    const mockStore = configureStore();
    const initialState = {
      recentMovies: [{title: ''}],
      favoriteMovies: [],
      user: {},
      newUser: {}
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<CardCatelog
      store = {store}
    />);

    expect(wrapper).toMatchSnapshot();

  });
});

describe('CardCatalog container', () => {

  it('should have default state', () => {
    const mockStore = configureStore();
    const initialState = {
      recentMovies: [{title: ''}],
      favoriteMovies: [],
      user: {},
      newUser: {}
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<CardCatelog
      store={store}
      recentMovies={{recentMovies: [{title: ''}]}}
      favoriteMovies={{favoriteMovies: []}}
      users={{users: {}}}
      newUsers={{newUsers: {}}}
    />);

    expect(wrapper.instance().props.recentMovies).toEqual(
      {recentMovies: [{title: ''}]}
    );
    expect(wrapper.instance().props.favoriteMovies).toEqual(
      {favoriteMovies: []}
    );
    expect(wrapper.instance().props.users).toEqual({users: {}});
    expect(wrapper.instance().props.newUsers).toEqual({newUsers: {}});

  });
});
