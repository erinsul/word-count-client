'use strict';

const app = require('../app.js');

const createSuccess = (data) => {
  let addTitle = require('../templates/add-title.handlebars');
    $('#content').append(addTitle(data));
    $('#create').children().children('input[type=text]').val('');

};

const displayProjects = (projects) => {
  let titleListingTemplate = require('../templates/title-listing.handlebars');
  $('#content').html(titleListingTemplate(projects));
  $('#show').hide();
  $('#create').show();
};

const displayProjectDetails = (project) =>{
  let projectDisplay = require('../templates/project.handlebars');
  $('#content').html(projectDisplay(project));
  $('#show').show();
  $('#create').hide();
};

const displayDelete = (id) =>{
  console.log(id)
  console.log("success")
  $('').hide()
}

const failure = (error) => {
  console.error(error);
};

module.exports = {
  createSuccess,
  failure,
  displayProjects,
  displayProjectDetails
};
