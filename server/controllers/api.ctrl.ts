import QrApi from '../api/qr.api';
import SpeakeasyApi from '../api/speakeasy.api';
import EthersApi from '../api/ethers.api';

export default class ApiCtrl {

  private qr = new QrApi();
  private speakeasy = new SpeakeasyApi();
  private ethers = new EthersApi();
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
   * verify user token for 2-step auth
   */
  verifytoken = (req, res) => {
    const userToken = req.body.usertoken;
    const passkey = req.body.passkey;
    res.json({ status: this.speakeasy.verifyToken(passkey, userToken) });
  }

  /**
   * genrate random ether wallet
   */
  genrateRandomWallet = (req,res) => {
    res.json(this.ethers.genrateRandom());
  }

  /**
   * genrate wallet from private key
   */
  genrateFromKey = (req,res)=>{
    console.log(req.body.key);
    res.json(this.ethers.genrateFromPrivateKey(req.body.key));
  }
} 