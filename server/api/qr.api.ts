import * as QRCode from 'qrcode';


export default class Qr { 
  // Get the data URL of the authenticator URL
  
  get(secret) {
    console.log('qr  secret');
    console.log(secret.otpauth_url);
    QRCode.toDataURL(secret.otpauth_url, function(err, data_url) {
      console.log(data_url);
    });
  }

}