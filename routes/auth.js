const express = require("express");
const router = express.Router();

router.get('/login',m(req, res) => {
  if(req.session.user) {
    res.redirect('/');
  }
  else {
    res.render('pages/login');
  }
});

router.post("login', async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if(username === "admin" && password === "admin") {
    req.session.user = "admin";
    res.redirect("/");
  }
  else {
    return res.render("pages/login", {
      error: "Wrong username or password"
    });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/auth/login');
});

module.exports = router;
