'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
const authEvents = require('./auth/events.js');
const projectEvents = require('./projects/projects-events.js');

$(() => {
  $('#sign-up').hide();
  $('#sign-in').hide();
  $('.user-only').hide();
  $('#change-password').hide();
  $('#open-change-password').hide();
  $('#show').hide();
  authEvents.addHandlers();
  projectEvents.addHandlers();
});
