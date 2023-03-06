const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config()

const slackRoute = require("./Routes/Slack");

const app = express();
app.use(bodyParser.json());

app.use('/slack',slackRoute);


app.listen(3000, () => {
  console.log("Server started on port 3000");
});
