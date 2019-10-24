const express = require("express");
const router  = express.Router();


// Get path
function getPath(req) {
  let referer = req.get("Referer");
  let url = new URL(referer);
  return url.pathname;
}


// Start page
router.get('/v1', (req, res) => {
  res.render('v1/index');
});


// Who should we contact about the grant award?
router.get('/v1/who-should-we-contact-about-the-grant-award', (req, res) => {

  let action;

  if (getPath(req) == "/v1/check-your-answers") {
    action = "/v1/check-your-answers";
  } else {
    action = "/v1/organisation-type";
  }

  res.render('v1/who-should-we-contact-about-the-grant-award', { formAction: action });

});


// Who should we contact about the grant award?
router.get('/v1/organisation-type', (req, res) => {

  let action;

  if (getPath(req) == "/v1/check-your-answers") {
    action = "/v1/check-your-answers";
  } else {
    action = "/v1/organisation-details";
  }

  res.render('v1/organisation-type', { formAction: action });

});


// Organisation details
router.get('/v1/organisation-details', (req, res) => {

  let action;

  if (getPath(req) == "/v1/check-your-answers") {
    action = "/v1/check-your-answers";
  } else {
    action = "/v1/do-you-have-a-companies-house-or-charity-commission-number";
  }

  res.render('v1/organisation-details', { formAction: action });

});


// Do you have a Companies House or Charity Commission number?
router.get('/v1/do-you-have-a-companies-house-or-charity-commission-number', (req, res) => {

  let action;

  if (getPath(req) == "/v1/check-your-answers") {
    action = "/v1/check-your-answers";
  } else {
    action = "/v1/do-you-have-a-grant-agreement-number";
  }

  res.render('v1/do-you-have-a-companies-house-or-charity-commission-number', { formAction: action });

});


// Do you have a grant agreement number?
router.get('/v1/do-you-have-a-grant-agreement-number', (req, res) => {

  let action;

  if (getPath(req) == "/v1/check-your-answers") {
    action = "/v1/check-your-answers";
  } else {
    action = "/v1/what-programme-do-you-receive-funding-from";
  }

  res.render('v1/do-you-have-a-grant-agreement-number', { formAction: action });

});


// What programme do you receive funding from?
router.get('/v1/what-programme-do-you-receive-funding-from', (req, res) => {

  let action;

  if (getPath(req) == "/v1/check-your-answers") {
    action = "/v1/check-your-answers";
  } else {
    action = "/v1/project-details";
  }

  res.render('v1/what-programme-do-you-receive-funding-from', { formAction: action });

});


// Project details
router.get('/v1/project-details', (req, res) => {

  let action;

  if (getPath(req) == "/v1/check-your-answers") {
    action = "/v1/check-your-answers";
  } else {
    action = "/v1/does-the-project-have-partners-or-participants-outside-the-uk";
  }

  res.render('v1/project-details', { formAction: action });

});


// Does the project have partners or participants outside the UK?
router.get('/v1/does-the-project-have-partners-or-participants-outside-the-uk', (req, res) => {

  let action = "/v1/check-your-answers";

  res.render('v1/does-the-project-have-partners-or-participants-outside-the-uk', { formAction: action });

});


module.exports = router;
