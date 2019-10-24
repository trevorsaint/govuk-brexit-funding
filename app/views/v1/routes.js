const express = require("express");
const router  = express.Router();


// v1 routes
router.use('/', require('./views/v1/routes.js'));


// 1. Start page
router.get('/', (req, res) => {
  res.render('v1/index');
});


// 2. Who should we contact about the grant award?
router.get('/v1/who-should-we-contact-about-the-grant-award', (req, res) => {

  let action;
  let referer = req.get("Referer");
  let url = new URL(referer);

  if (url.pathname == "/v1/check-your-answers") {
    action = "/v1/check-your-answers";
  } else {
    action = "/v1/organisation-type";
  }

  res.render('v1/who-should-we-contact-about-the-grant-award', { formAction: action });

});


module.exports = router;
