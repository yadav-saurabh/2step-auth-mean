import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';
import * as  cors from 'cors';

import setRoutes from './routes';
import EthersApi from './api/ethers.api';

const app = express();
app.set('port', (process.env.PORT || 3000));

app.use(cors());
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

setRoutes(app);

const ethers = new EthersApi();

app.get('/*', function (req, res) {
  res.send("Invalid page");
});

app.listen(app.get('port'), () => {
  console.log('Node server listening on port ' + app.get('port'));
  console.log('Ng server running on localhost:4200');
});

export { app };