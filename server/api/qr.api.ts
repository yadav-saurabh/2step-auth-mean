import * as QRCode from 'qrcode';

export default class QrApi { 
  
  public genrate(stringData) {
    return new Promise((resolve, reject) => {
      QRCode.toDataURL(stringData, (err, data) => {
        if(!err) {
          resolve(data);
        }
        reject('qr genration failed');
      });
    });
  }

}