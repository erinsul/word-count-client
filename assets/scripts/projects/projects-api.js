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

module.exports = {
  createProject,
  showProjects,
};
