const blackJackController = require("../controllers/blackjack.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept",
      "Access-Control-Allow-Origin",
      "*",
      "Access-Control-Allow-Methods",
      "GET,POST,OPTIONS,DELETE,PUT"
    );
    next();
  });

app.post("shuﬄe", (req, res) => {
    blackJackController.shuffleCard(req, res);
})







};
