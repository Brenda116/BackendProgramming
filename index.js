const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session');
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(session({
  secret: 'some_secret_key',
  resave: false,
  saveUninitialized: true,
}));

const index = require("./routes/index");
const auth = require("./routes/auth");

app.use('/', index)
app.use("/auth", auth);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
