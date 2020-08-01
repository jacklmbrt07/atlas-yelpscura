//Require modules
const express = require("express");
const indexRouter = require("./routes/index");
//require express app
const app = express();
const port = 3000;

//configure the app (app.set)
app.set("view engine", "ejs");

//Mount middleware (app.use)

//Mount Routes
app.use("/", indexRouter);

//App to listen
app.listen(port, function () {
  console.log(`App is listening on port:${port}...`);
});
