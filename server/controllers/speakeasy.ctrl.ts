import SpeakeasyApi from '../api/speakeasy.api';

export default class SpeakeasyCtrl {

  speakeasy = new SpeakeasyApi();

  verifytoken = (req, res) => {
    const userToken = req.body.usertoken;
    const passkey = req.body.passkey;
    res.json({ status: this.speakeasy.verifyToken(passkey, userToken) });
  }


}