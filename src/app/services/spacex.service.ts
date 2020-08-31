import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(private http: HttpClient) { }
  url: any = "https://api.spaceXdata.com/v3/launches?limit=100";
  // basicUrl: string = "https://api.spaceXdata.com/v3/launches?li";

  buildQuery(data) {
    if (typeof (data) === 'string') return data;
    let query = [];

    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
      }
    }
    return query.join('&');
  };

  fetchData(): Observable<any> {
    return this.http.get(this.url, { responseType: 'json' })
  }

  fetchQueryData(queryObject: any): Observable<any> {

    let query = this.buildQuery(queryObject);
    console.log(this.url + '&' + query);

    // Object.keys(queryObject).map((object) => {
    //   console.log(object, queryObject[object]);
    // })
    // return null;
    return this.http.get(this.url + '&' + query, { responseType: 'json' })
  }

}
