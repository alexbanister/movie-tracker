const userLogin = (email, password) => {
  return fetch('/api/users', {
    method:'post',
    body: JSON.stringify({ email, password }),
    headers: {'Content-Type': 'application/json'}
})
    .then(response => response.json())
    .then(parsedResponse => parsedResponse)
    .catch(err => console.log(err.json()));
};
module.exports = {
  userLogin
};
