'use strict';
const createSuccess = (data) => {
  let addTitle = require('../templates/add-title.handlebars');
    $('#content').append(addTitle(data));
    $('#create').children().children('input[type=text], input[type=date]').val('');
    $('#create').children('.error-message').text('');
};

const createFail = () => {
  $('#create').children('.error-message').text('Make sure all fields are filled out and the end date is in the future.');
};

const updateDateFailWarning = () => {
  $('#project-info').children().children().children('.error-message').text('Make sure the deadline is in the future!');
};

const displayProjects = (projects) => {
  let titleListingTemplate = require('../templates/title-listing.handlebars');
  $('#content').html(titleListingTemplate(projects));
  $('#show').hide();
  $('#create').show();
};

const displayProjectDetails = (project) =>{
  project.project.percent = Math.round((project.project.current_count/project.project.total_count) * 100);
  project.project.amount_remaining = project.project.total_count - project.project.current_count;
  project.project.amount_per_day = Math.round(project.project.amount_remaining / project.project.days_left);
  let projectDisplay = require('../templates/project.handlebars');
  $('#content').html(projectDisplay(project));
  $('#show').show();
  $('#create').hide();
};

const displayDelete = () =>{
  $('').hide();
}

module.exports = {
  createSuccess,
  displayProjects,
  displayProjectDetails,
  createFail,
  updateDateFailWarning
};
