'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');


const onSignUp = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .done(ui.signUpSuccess)
  .fail(ui.signUpFail);
};

const onSignIn = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.signInFail);
};

const onSignOut = (event) => {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
};

const onChangePassword = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .done(ui.changePasswordSuccess)
  .fail(ui.changePasswordFail);
};

const openSignUp = (event) =>{
  event.preventDefault();
  $('#sign-up').toggle();
}

const openSignIn = (event) =>{
  event.preventDefault();
  $('#sign-in').toggle();
}

const openChangePassword = (event) =>{
  event.preventDefault();
  $('#change-password').toggle();
}


const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('click', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#open-sign-up').on('click', openSignUp);
  $('#open-sign-in').on('click', openSignIn);
  $('#open-change-password').on('click', openChangePassword);
};
//
module.exports = {
  addHandlers,
};
