const userLogin = (email, password) => {
  return fetch('/api/users', {
    method:'post',
    body: JSON.stringify({ email, password }),
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => response.json())
    .then(parsedResponse => parsedResponse)
    .catch(error => error.json())
    .then(parsedError => parsedError);
};

const userSignUp = (email, password, name) => {
  return fetch('/api/users/new', {
    method:'post',
    body: JSON.stringify({ email, password, name }),
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => response.json())
    .then(parsedResponse => parsedResponse)
    .catch(error => error.json())
    .then(parsedError => parsedError);
};

const addFavoriteFetch = (favMov) => {
  return fetch('/api/users/favorites/new', {
    method:'post',
    body: JSON.stringify(favMov),
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => response.json())
    .then(jsonResponse => jsonResponse)
    .catch(error => error.json()).
    then(parsedError => parsedError);
};

const fetchFavorites = (id) => {
  return fetch(`/api/users/${id}/favorites`)
    .then(response => response.json())
    .then(jsonResponse => jsonResponse);
};

const fetchRemoveFavorite = (userId, favId) => {
  return fetch(`/api/users/${userId}/favorites/${favId}`, {
    method:'delete',
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => response.json())
    .then(parsed => parsed);
};

module.exports = {
  userLogin,
  userSignUp,
  addFavoriteFetch,
  fetchFavorites,
  fetchRemoveFavorite
};
