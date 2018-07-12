import * as express from 'express';
import QrCtrl from './controllers/qr.ctrl';
import SpeakeasyCtrl from './controllers/speakeasy.ctrl';

export default function setRoutes(app) {

  const router = express.Router();

  const qrCtrl = new QrCtrl;
  const speakeasyCtrl = new SpeakeasyCtrl;

  
  router.route('/qrcode').get(qrCtrl.getQrCode);

  router.route('/verifytoken').post(speakeasyCtrl.verifytoken);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}