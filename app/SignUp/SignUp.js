import React from 'react';

const SignUp= () => {
  return (
    <form>
      <input type='text' placeholder='Name'/>
      <input type='email' placeholder='Email'/>
      <input type='password' placeholder='Password'/>
    </form>
  );
};

module.exports = {
  SignUp
};
