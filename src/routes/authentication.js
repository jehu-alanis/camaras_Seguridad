const express = require('express');
const router = express.Router();

const passport = require('passport');
const { isLoggedIn } = require('../lib/auth');


// SIGNUP



router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/personalnew',
  failureRedirect: '/signup',
  failureFlash: true
}));



router.post('/editpassword', passport.authenticate('local.signup2', {
  successRedirect: '/',
  failureRedirect: '/signin',
  failureFlash: true
}));


router.post('/editusername', passport.authenticate('local.signup3', {
  successRedirect: '/perfil',
  failureRedirect: '/perfil',
  failureFlash: true
}));


router.post('/editusername_te', passport.authenticate('local.signup4', {
  successRedirect: '/perfil_te',
  failureRedirect: '/perfil_te',
  failureFlash: true
}));

// SINGIN



router.get('/signin', (req, res) => {
  res.render('signin.ejs');
});
router.post('/signin', (req, res, next) => {
  
  passport.authenticate('local.signin', {
    successRedirect: '/tipo_usuario',
    failureRedirect: '/signin',
    failureFlash: true
  })(req, res, next);
});


router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});



module.exports = router;
