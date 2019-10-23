const express = require('express');
const router = express.Router();

const helpers = require('./helpers');


// 1. Start page -> Contact information
router.post('/v1', function(req, res) {
  res.redirect('index');
});


// 2. Who should we contact about the grant award? -> Organisation type
router.post('/v1/who-should-we-contact-about-the-grant-award',function(req, res) {
  res.redirect('organisation-type');
});


// 3. Organisation type -> Organisation details
router.post('/v1/organisation-type',function(req, res) {
  res.redirect('organisation-details');
});


// 4. Organisation details -> What is the grant agreement number?
router.post('/v1/organisation-details',function(req, res) {
  res.redirect('what-is-the-grant-agreement-number');
});


// 5. What is the grant agreement number? -> What programme do you receive funding from?
router.post('/v1/what-is-the-grant-agreement-number',function(req, res) {
  res.redirect('what-programme-do-you-receive-funding-from');
});


// 6. What programme do you receive funding from? -> Project details
router.post('/v1/what-programme-do-you-receive-funding-from',function(req, res) {
  res.redirect('project-details');
});


// 7. Project details -> Check your answers
router.post('/v1/project-details',function(req, res) {
  res.redirect('check-your-answers');
});


// 8. Check your answers -> Confirmation
router.post('/v1/check-your-answers',function(req, res) {
  res.redirect('confirmation');
});


module.exports = router;
