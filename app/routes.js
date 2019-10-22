const express = require('express');
const router = express.Router();

const helpers = require('./helpers');


// Start page
router.post('/v1', function(req, res) {
  res.redirect('index');
});


// Contact information > Organisation type
router.post('/v1/contact-information',function(req, res) {
  res.redirect('organisation-type');
});


// Organisation type > Organisation details
router.post('/v1/organisation-type',function(req, res) {
  res.redirect('organisation-details');
});


// Organisation details > Funding details
router.post('/v1/organisation-details',function(req, res) {
  res.redirect('funding-details');
});


// Check your answers with session data
router.get('/v1/check-your-answers', function(req, res) {

  var pageObject = {
   fullName: req.session.data['full-name']
  }

  res.render('v1/check-your-answers', pageObject);

});


// Funding details > Check your answers
router.post('/v1/funding-details',function(req, res) {
  res.redirect('check-your-answers');
});


// Check your answers > Confirmation
router.post('/v1/check-your-answers',function(req, res) {
  res.redirect('confirmation');
});


module.exports = router;
