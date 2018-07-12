import * as speakeasy from 'speakeasy';
import Qr from './qr.api';

export default class SpeakeasyApi {

  private token: string;
  private qr: Qr = new Qr();
  private secret: {
    ascii: string,
    hex: string,
    base32: string,
    otpauth_url: string
  };


  public genrateSecret() {
    return speakeasy.generateSecret({ length: 20 });
  }

  genrateToken(passkey) {
    return speakeasy.totp({
      secret: passkey,
      encoding: 'base32'
    });
  }

  verifyToken(passkey,userToken) {
    return speakeasy.totp.verify({
      secret: passkey,
      encoding: 'base32',
      token: userToken,
      window: 6
    });
  }

}