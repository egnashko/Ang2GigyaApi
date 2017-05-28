import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Jsonp, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class jsonpService {

  constructor(private jsonp: Jsonp, private http: Http) { }

  jsonpGet(user, secret, api): Observable<any> {
    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp
      .get(`https://accounts.gigya.com/accounts.getPolicies?userkey=${user}&secret=${secret}&apikey=${api}&format=jsonp&callback=JSONP_CALLBACK`)
      .map(res => res.json().accountOptions)
      .catch(this.handleError); 
  }

  httpSet(user, secret, api, body): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post(`https://accounts.gigya.com/accounts.setPolicies?userkey=${user}&secret=${secret}&apikey=${api}&format=jsonp&callback=JSONP_CALLBACK`, body)
      .map(res =>  res.json())
  }

  private handleError(error:any) {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }

}
