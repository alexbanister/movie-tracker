import { movieDataBaseKey } from './apiKey';

const  movieDataBaseURL = 'https://api.themoviedb.org/3/movie/';

const fetchRecentMovies = () => (
  fetch(`${movieDataBaseURL}upcoming?api_key=${movieDataBaseKey}`)
    .then(response => response.json())
    .then(parsedResponse => parsedResponse.results)
);

module.exports = {
  fetchRecentMovies
};
