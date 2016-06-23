'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./projects-api');
const ui = require('./projects-ui');


const onCreateProject = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createProject(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onShowProjects = (event) => {
  event.preventDefault();
  api.showProjects()
  .done(function(data){
    ui.displayProjects(data);
  });
};

// const onSignIn = (event) => {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   api.signIn(data)
//   .done(ui.signInSuccess)
//   .fail(ui.failure);
// };
//
// const onSignOut = (event) => {
//   event.preventDefault();
//   api.signOut()
//   .done(ui.signOutSuccess)
//   .fail(ui.failure);
// };
//
// const onChangePassword = (event) => {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   api.changePassword(data)
//   .done(ui.success)
//   .fail(ui.failure);
// };


const addHandlers = () => {
  $('#create').on('submit', onCreateProject);
  $('#show').on('click', onShowProjects);
};
//
module.exports = {
  addHandlers,
};
