'use strict';

const app = require('../app.js');
const projects = require('../projects/projects-events.js')

const signUpSuccess = () => {
  $('#sign-up').hide();
  $('#sign-up').children().children('input[type=password], input[type=text]').val('');
};

const changePasswordSuccess = ()=>{
  $('#change-password').hide();
  $('#change-password').children().children('input[type=password]').val('');
}

const failure = (error) => {
  console.error(error);
};

const displayWelcome = (user) => {
  let welcomeTemplate = require('../templates/homepage.handlebars');
  $('.before-sign-in').append(welcomeTemplate(user));
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app.user);
  $('.user-only').show();
  $('#open-sign-up').hide();
  $('#open-sign-in').hide();
  $('#sign-in').hide();
  $('#content').show();
  displayWelcome(data);
  projects.onShowProjects();
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
};

module.exports = {
  signUpSuccess,
  failure,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess
};
