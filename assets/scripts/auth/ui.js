'use strict';

const app = require('../app.js');
const projects = require('../projects/projects-events.js');

const signUpSuccess = () => {
  $('#sign-up').hide();
  $('#sign-up').children().children('input[type=password], input[type=text]').val('');
  $('#sign-up').children('.error-message').text('');

};

const signUpFail = () => {
  $('#sign-up').children().children('input[type=password], input[type=text]').val('');
  $('#sign-up').children('.error-message').text('You must enter a valid email address and password longer than 5 letters.');
};

const changePasswordSuccess = ()=>{
  $('#change-password').hide();
  $('#change-password').children().children('input[type=password]').val('');
  $('#change-password').children('.error-message').text('');
};

const changePasswordFail = () => {
  $('#change-password').children().children('input[type=password]').val('');
  $('#change-password').children('.error-message').text('Wrong password entered./Passwords must be at least five characters long.');
};

const displayWelcome = (user) => {
  let welcomeTemplate = require('../templates/homepage.handlebars');
  $('.before-sign-in').append(welcomeTemplate(user));
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('.user-only').show();
  $('#open-sign-up').hide();
  $('#open-sign-in').hide();
  $('#sign-in').hide();
  $('#content').show();
  displayWelcome(data);
  projects.onShowProjects();
  $('#sign-in').children('.error-message').text('');
};

const signInFail = () => {
  $('#sign-in').children().children('input[type=password], input[type=text]').val('');
  $('#sign-in').children('.error-message').text('Incorrect username or password.');
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  app.user = null;
  $('.user-only').hide();
  $('#content').html('');
  $('#change-password').hide();
  $('#open-sign-up').show();
  $('#open-sign-in').show();
  $('.before-sign-in').children('#welcome').remove();
  $('#sign-in').children().children('input[type=password], input[type=text]').val('');
  $('#show').hide();
  $('#content').hide();
  $('#change-password').children('.error-message').text('');
};

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFail,
  signUpFail,
  signInFail
};
