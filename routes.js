var handlers = require('./requestHandlers');
var express = require('express');

module.exports = function (app, express) {
  app.get('/api/contactInfo', handlers.getContactInfo);
  app.get('/api/name', handlers.getName);
  app.get('/api/email', handlers.getEmailAddress);
  app.get('/api/phone', handlers.getPhoneNumber);
};