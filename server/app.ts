import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';

import setRoutes from './routes';
import Speakeasy from './api/speakeasy.api';
// import MongodbApi from './api/mongodb.api';

const speakeasy = new Speakeasy(); 
speakeasy.genrateSecret();
// const mongo = new MongodbApi();
// mongo.insertDocuments();

const app = express();
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

setRoutes(app);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(app.get('port'), () => {
  console.log('Node server listening on port ' + app.get('port'));
});

export { app };