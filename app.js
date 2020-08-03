//Require modules
const express = require("express");
const morgan = require("morgan");
const port = 3000;

//require routers
const indexRouter = require("./routes/index");
const citiesRouter = require("./routes/cities");

//require express app
const app = express();

//connect to the database with Mongoose
require("./config/database");

//configure the app (app.set)
app.set("view engine", "ejs");

//Mount middleware (app.use)
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

//Mount Routes
app.use("/", indexRouter);
app.use("/cities", citiesRouter);

//App to listen
app.listen(port, function () {
  console.log(`App is listening on port:${port}...`);
});
