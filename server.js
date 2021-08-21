// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');

const session = require('express-session');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');

const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

// Express App
const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Sets up the sessions
const sess = {
  secret: process.env.SECRET,
  cookie: {  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Sets Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

// Starts server to begin listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});