'use strict';

const app = require('../app.js');

const success = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app.user);
  $('.user-only').show();
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  app.user = null;
  $('.user-only').hide();
  $('.content').html('');
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess
};
