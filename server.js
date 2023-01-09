const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const exphbs = require("express-handlebars");
// Import express-session
const session = require("express-session");

const routes = require("./controllers");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });
// // Set up sessions
const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 1800000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// requires the openai route for future coding or additions.
app.use("/openai", require("./controllers/api/openaiRoutes"));

// Enable body parser for openai
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});
