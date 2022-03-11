const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const port = `3333`;

const app = express();

// Use Helmet for vulnerability
app.use(helmet());

//parse requests of content-type -application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

//User Channels
require("./routes/backjack.routes")(app);

// simple route
app.get(`/`, (req, res) => {
  // initial();
  res.json({
    message: `
    Two players: You and the Dealer
   A deck is represented as a json list of Card objects.
   Your application should accept an URL on the command line.
   The response will contain a json list of Card objects: {"suit":"HEARTS","value":"5"} ,
   where suit is one of HEARTS | CLUBS | SPADES | DIAMONDS and value is one of the set
   2,3,4,5,6,7,8,9,10,J,Q,K,A
   If no URL is given on the command line, you should default to http://navdeckofcards.herokuapp.com/shuﬄe`,
  });
});

// set port, listen for requests
const PORT = process.env.PORT || port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
