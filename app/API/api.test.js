import React from 'react';
import fetchMock from 'fetch-mock';
import {  userLogin,
  userSignUp,
  addFavoriteFetch,
  fetchFavorites,
  fetchRemoveFavorite}
  from './api.test';
import App from '../App/App';
import {shallow} from 'enzyme';

describe('api test', () => {
  const mockUser = {
    data: {
      email:'something@something.com',
      id:1,
      name:'name',
      password:'password'
    }
  };

  const mockSignUp = {
    message:'New User Created'
  };

  const mocFetchFavorites = {
    data:[{
      id: 415842,
      movie_id: 415842,
      overview:'some stuff',
      poster_path:'some path',
      release_date:'11/23/1985',
      title:'Movie Title',
      user_id:1
    }]
  };

  const mockRemoveFavorites = {
    message:'1 row was removed'
  };

  const mockRecentMovies = [{
    id: 2342343,
    title: 'some title',
    poster_path: 'some path',
    release_date: '11/23/85'
  }];

  const pause = () => {
    return new Promise(res => {
      setTimeout(() => {
        res();
      });
    });
  };


  it('userLogin should make an api call to log in a user', async () =>{
    fetchMock.get('/api/users', {
      status:200,
      body: mockUser,
      headers: {'Content-Type': 'application/json'}
    });


    const user =  userLogin('something@something.com', 'password');

    await pause();

    expect(user).toEqual(mockUser.data);
  });

});
