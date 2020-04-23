import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config/config.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  private authStatus$ = new BehaviorSubject<boolean>(false);
  private user = new BehaviorSubject<string>('');

  constructor(
    private http: HttpClient,
    private readonly _configService: ConfigService,
  ) { }


  registerContact(register: any) {
    console.log('register in auth', register);
    return this.http.post<any>(this._configService.url + 'user/addContact', register)
      .pipe(map(user => {
      }));
  }

  editContact(id: string, contact: any) {
    return this.http.put<any>(this._configService.url + 'user/editContactList/' + id, contact);
  }

  deleteContact(id: string) {
    return this.http.delete<any>(this._configService.url + 'user/' + id);
  }

  getAllContacts() {
    return this.http.get<any>(this._configService.url + 'user/getAllcontact/');
  }

    getSelectedContact(id: string) {
    return this.http.get<any>(this._configService.url + 'user/getSelectedContact/' + id);
  }

 

}
