const path = require("path");
const express = require("express");
const dotenv = require('dotenv').config();
const exphbs = require("express-handlebars");
// Import express-session
const session = require('express-session');

const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require('./utils/helpers');

const app = express();
// requires the openai route for future coding or additions.
app.use('/openai', require('./controllers/api/openaiRoutes'))

// Enable body parser for openai
app.use(express.json());
app.use(routes);
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


// // Set up sessions
const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: false,
    };

    app.use(session(sess));

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");


sequelize.sync({ force: false })

