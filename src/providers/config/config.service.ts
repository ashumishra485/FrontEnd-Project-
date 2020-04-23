import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  constructor() { }

  public filesurl = 'http://172.19.97.121:8080/';  // aashu LAN

  public url = this.filesurl + 'v1/';
}
