import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private serverApi = 'http://127.0.0.1:3000/api';
  private headers  = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  public getQrCode(): Observable<{}> {
    return this.httpClient.get( this.serverApi + '/qrcode' , { headers: this.headers});
  }

  public verifySecretKey(data): Observable<{}> {
    return this.httpClient.post( this.serverApi + '/verifytoken',data , { headers: this.headers});
  }

}
