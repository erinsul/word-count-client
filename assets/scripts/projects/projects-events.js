'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./projects-api');
const ui = require('./projects-ui');


const onCreateProject = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  api.createProject(data)
  .done(ui.createSuccess)
  .fail(ui.createFail);
};

const onShowProjects = () => {
  event.preventDefault();
  api.showProjects()
  .done(ui.displayProjects);
};

const onProjectDetails = () => {
  event.preventDefault();
  api.showProjectDetails($(event.target).data('id'))
  .done(ui.displayProjectDetails);
};

const onProjectDelete = () => {
  event.preventDefault();
  api.deleteProject($(event.target).data('id'))
  .done($(event.target).parent().remove());
};

const onProjectUpdate = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateProject(data, $(event.target).data('id'))
  .success(onProjectDetails())
  .fail(ui.updateDateFailWarning);
};

const addHandlers = () => {
  $('#create').on('submit', onCreateProject);
  $('#show').on('click', onShowProjects);
  $('#content').on('click', '.view', onProjectDetails);
  $('#content').on('click', '.delete', onProjectDelete);
  $('#content').on('submit', '.update', onProjectUpdate);
};
//
module.exports = {
  addHandlers,
  onShowProjects,
};
