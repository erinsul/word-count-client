'use strict';

const app = require('../app.js');

const success = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const displayProjects = (projects) => {
  let titleListingTemplate = require('../templates/title-listing.handlebars');
  $('.content').html(titleListingTemplate(projects));
}

const failure = (error) => {
  console.error(error);
};

module.exports = {
  success,
  failure,
  displayProjects,
};
