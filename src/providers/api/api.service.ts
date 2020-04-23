import { ConfigService } from './../config/config.service';
import { AuthenticationService } from './../authentication.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _authService: AuthenticationService,
    private http: HttpClient,
    private readonly _configService: ConfigService,
  ) { }

  getV1() {
    return this.http.get<any>(this._configService.url);
  }

}
