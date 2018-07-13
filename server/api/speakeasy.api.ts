import * as speakeasy from 'speakeasy';

export default class SpeakeasyApi {

  /**
   * genrate new secret key
   */
  public genrateSecret() {
    return speakeasy.generateSecret({ length: 20 });
  }

  /**
   * genrate new token from the secret key
   */
  public genrateToken(passkey) {
    return speakeasy.totp({
      secret: passkey,
      encoding: 'base32'
    });
  }

  /**
   * verify user token and genrate token 
   */
  public verifyToken(passkey,userToken) {
    return speakeasy.totp.verify({
      secret: passkey,
      encoding: 'base32',
      token: userToken,
      window: 2 * 10 // valid only for 5 minutes
    });
  }

}