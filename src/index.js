const express = require('express');
const bodyParser = require('body-parser');
const signupRouter = require('./auth/signup');
const loginRouter = require('./auth/login');
const homeScreenRouter = require('./screens/home_screen');
const detailScreenRouter = require('./screens/detail_screen');
const settingsScreenRouter = require('./screens/settings_screen');
const settingsMenuRouter = require('./settings/settings_menu');

const app = express();
app.use(bodyParser.json());

app.use('/auth', signupRouter);
app.use('/auth', loginRouter);
app.use('/', homeScreenRouter);
app.use('/', detailScreenRouter);
app.use('/', settingsScreenRouter);
app.use('/', settingsMenuRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
