const express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./config/database");

const app = express();
const urlencodedParser = bodyParser.urlencoded({
  extended: true,
});

const port = 3001;

app.use(urlencodedParser);
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
require("./controllers/products")(app);
app.listen(port, () => console.log(`Listening ! on port ${port}`));
