import QrApi from '../api/qr.api';
import SpeakeasyApi from '../api/speakeasy.api';

export default class ApiCtrl {

  private qr = new QrApi();
  private speakeasy = new SpeakeasyApi();

  /**
   * get qr code
   */
  getQrCode = (req, res) => {
    const secret = this.speakeasy.genrateSecret();
    this.qr.genrate(secret.otpauth_url)
      .then((data) => {
        res.json({ img: data, key: secret.base32 });
      }).catch(err => {
        res.status(500).send({ error: 'something blew up' });
      });
  }

  /**
   * verify user token
   */
  verifytoken = (req, res) => {
    const userToken = req.body.usertoken;
    const passkey = req.body.passkey;
    res.json({ status: this.speakeasy.verifyToken(passkey, userToken) });
  }

} 