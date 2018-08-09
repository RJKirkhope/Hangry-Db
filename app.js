const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const routes = require("./restaurant_list");

app.use(bodyParser.json());

app.use("/restaurant_list", routes);

// catch 404 and forward to error handler
app.use((request, response, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
app.use((err, request, response, next) => {
    response.status(err.status || 500);
    response.json({
      message: err.message,
      error: request.app.get("env") === "development" ? err.stack : {}
    });
});

module.exports = app;