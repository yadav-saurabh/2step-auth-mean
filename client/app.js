const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
// const cors = require('cors');

const app = express();

// const log = require('./logger');
// const config = require('./configuration');
// const db = require('./repositories');

// const authController = require('./controllers/auth/auth.controller');
// const userController = require('./controllers/user/user.controller');
// const apidocController = require('./controllers/apidoc/apidoc.controller');
// const indexController = require('./controllers/index/index.controller');

// const errorHandler = require('./middlewares/error-handler/error-handler.middleware');

// const ClientError = require('./utils/error');

// app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));
app.use(express.static(path.join(__dirname, 'public', 'apidocs')));

app.set('port', config.get('app:port'));

app.use('/api/auth', authController);
app.use('/api/users', userController);

app.use('/__apidoc', apidocController);
app.use('/', indexController);

app.use(errorHandler.urlNotFoundError);
app.use(errorHandler.internalServerError);

db.sync().then(() => {
  app.listen(app.get('port'), () => {
    log.info(`server is listen on port ${app.get('port')}`);
  });
});