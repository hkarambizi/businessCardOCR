var contactHelper = require('./helpers.js');

function getContactInfo (req, res) {
  var doc = req.query.doc;
  var contactInfo = contactHelper(doc);
  res.send(contactInfo);
};

function getName (req, res) {
  var doc = req.query.doc;
  var contactInfo = contactHelper(doc);
  res.send(contactInfo.Name);
};

function getPhoneNumber (req, res) {
  var doc = req.query.doc;
  var contactInfo = contactHelper(doc);
  res.send(contactInfo.Phone);
};

function getEmailAddress (req, res) {
  var doc = req.query.doc;
  var contactInfo = contactHelper(doc);
  res.send(contactInfo.Email);
};

module.exports = {
  getContactInfo: getContactInfo,
  getName: getName,
  getPhoneNumber: getPhoneNumber,
  getEmailAddress: getEmailAddress
}

