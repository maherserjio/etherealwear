import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiURL = 'https://strapi-cms-eon8.onrender.com';
  retry = 1;
  constructor(private _http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public get<T>(url: string): Observable<any> {
    const fullUrl = `/${url}`;
    return this._http.get<T>(this.apiURL + fullUrl);
  }
}
