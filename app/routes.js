const express = require('express');
const router = express.Router();


// Contains any function
function containsAny(source, target) {
  var result = source.filter(function(item) { return target.indexOf(item) > -1 });
  return (result.length > 0);
}


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


// Funding details > Check your answers
router.post('/v1/funding-details',function(req, res) {
  res.redirect('check-your-answers');
});


// Check your answers > Confirmation
router.post('/v1/check-your-answers',function(req, res) {
  res.redirect('confirmation');
});


module.exports = router;
