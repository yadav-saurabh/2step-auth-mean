import * as speakeasy from 'speakeasy';
import Qr from './qr.api';
import { HexBase64BinaryEncoding, Utf8AsciiBinaryEncoding } from 'crypto';

export default class Speakeasy {

  private token: string;
  private qr: Qr = new Qr();
  private secret: {
    ascii: Utf8AsciiBinaryEncoding,
    hex: HexBase64BinaryEncoding,
    base32: string,
    otpauth_url: string
  };


  genrateSecret() {
    this.secret = speakeasy.generateSecret({ length: 20 });
    console.log('this.secret');
    console.log(this.secret);
    // this.qr.get(this.secret); 
    this.genrateToken();
    this.verifyToken()
  }

  genrateToken() {
    this.token = speakeasy.totp({
      secret: this.secret.base32,
      encoding: 'base32'
    });
    console.log('this.token');
    console.log(this.token);
  }

  verifyToken() {
    const tokenValidates = speakeasy.totp.verify({
      secret: this.secret.base32,
      encoding: 'base32',
      token: 'aaaaaa',
      window: 6
    });
    console.log('tokenValidates');
    console.log(tokenValidates);
  }

}