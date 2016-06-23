'use strict';

const app = require('../app.js');

const createProject = (data) => {
  return $.ajax({
    url: app.host + '/projects',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const showProjects = () => {
  return $.ajax({
    url: app.host + '/projects',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const showProjectDetails = (id) =>{
  return $.ajax({
    url: app.host + '/projects/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const deleteProject = (id) =>{
  return $.ajax({
    url: app.host + '/projects/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const updateProject = (data, id) => {
  return $.ajax({
    url: app.host + '/projects/' + id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

module.exports = {
  createProject,
  showProjects,
  showProjectDetails,
  deleteProject,
  updateProject
};
