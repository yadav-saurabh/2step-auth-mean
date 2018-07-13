import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import ClientConfig from '../../config';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private config = new ClientConfig();
  public isUserLoggedIn = false;
  private serverApi = this.config.serverApi;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient,private router: Router) { }

  public login(data): Observable<{}> {
    return this.httpClient.post(this.serverApi + '/login', data, { headers: this.headers });
  }

  public register(data): Observable<{}> {
    return this.httpClient.post(this.serverApi + '/register', data, { headers: this.headers });
  }

  public verifyUser(data): Observable<{}> {
    return this.httpClient.post(this.serverApi + '/checkexistinguser', data, { headers: this.headers });
  }

  public getQrCode(): Observable<{}> {
    return this.httpClient.get(this.serverApi + '/qrcode', { headers: this.headers });
  }

  public verifySecretKey(data): Observable<{}> {
    return this.httpClient.post(this.serverApi + '/verifytoken', data, { headers: this.headers });
  }

  public genrateWallet(): Observable<{}> {
    return this.httpClient.get(this.serverApi + '/genratewallet',  { headers: this.headers });
  }

  /**
   * activate certain routes only if user is logged in
   * if not then redirect to login page
   */
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean>| boolean {
    if (this.isUserLoggedIn) {
      return true;
    }
    this.router.navigate(['/user']);
    return false;
  }

}
