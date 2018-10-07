import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpConnectorService {

  constructor(private http: Http) { }

  get(url, headers){
    return this.http.get(url);
  }

}
