//Require modules
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");
// const cloudinary = require("cloudinary").v2;
// const multer = require("multer");

//set up multer
// let storage = multer.diskStorage({
//   filename: (req, file, cb) => {
//     cb(null, `${file.fieldname}-${Date.now()}`)
//   },
//   destination: (req, file, cb) => {
//     cb(null, '/tmp/my-uploads')
//   }
// })
// var upload = multer({ dest: './uploads'})

require("dotenv").config();
const port = process.env.PORT || 3000;

//require routers
const indexRouter = require("./routes/index");
const citiesRouter = require("./routes/cities");
const landmarksRouter = require("./routes/landmarks");
const travelersRouter = require("./routes/travelers");

//require express app
const app = express();

//connect to the database with Mongoose
require("./config/database");
require("./config/passport");

//configure the app (app.set)
app.set("view engine", "ejs");

//Mount middleware (app.use)
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret:
      "I used to be a traveler like you, until I took an arrow to the knee...",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Mount Routes
app.use("/", indexRouter);
app.use("/cities", citiesRouter);
app.use("/", landmarksRouter);
app.use("/", travelersRouter);

//App to listen
app.listen(port, function () {
  console.log(`App is listening on port:${port}...`);
});
