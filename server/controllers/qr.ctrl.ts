import QrApi from '../api/qr.api';
import SpeakeasyApi from '../api/speakeasy.api';

export default class QrCtrl {

  qr = new QrApi();
  speakeasy = new SpeakeasyApi();

  getQrCode = (req, res) => {
    const secret = this.speakeasy.genrateSecret();
    this.qr.genrate(secret.otpauth_url)
      .then((data) => {
        res.json({ img: data, key: secret.base32 });
      }).catch(err => {
        res.status(500).send({ error: 'something blew up' });
      });
  }


} 