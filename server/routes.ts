import * as express from 'express';
import ApiCtrl from './controllers/api.ctrl';
import RegisterCtrl from './controllers/reqister.crl';
import LoginCtrl from './controllers/login.ctrl';

export default function setRoutes(app) {

  const router = express.Router();

  const apiCtrl = new ApiCtrl;
  const loginCtrl = new LoginCtrl;
  const registerCtrl = new RegisterCtrl;

  router.route('/login').post(loginCtrl.verifyUser);

  router.route('/register').post(registerCtrl.register);
  
  router.route('/checkexistinguser').post(registerCtrl.checkExisting);

  router.route('/qrcode').get(apiCtrl.getQrCode);

  router.route('/verifytoken').post(apiCtrl.verifytoken);

  router.route('/genratewallet').get(apiCtrl.genrateRandomWallet);
  
  // router.route('/genratewalletfromkey').post(apiCtrl.genrateFromKey);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}