const userLogin = (email, password) => {
  return fetch('/api/users', {
    method:'post',
    body: JSON.stringify({ email, password }),
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => response.json())
    .then(parsedResponse => parsedResponse)
    .catch(error => console.log(error.json()));
};

const userSignUp = (email, password, name) => {
  return fetch('/api/users/new', {
    method:'post',
    body: JSON.stringify({ email, password, name }),
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => response.json())
    .then(parsedResponse => parsedResponse)
    .catch(error => console.log(error.json()));
};

const addFavorite = (favMov) => {
  return fetch('/api/users/favorites/new', {
    method:'post',
    body: JSON.stringify(favMov),
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => response.json())
    .then(parsedResponse => parsedResponse)
    .catch(error => console.log(error.json()));
};

module.exports = {
  userLogin,
  userSignUp
};
