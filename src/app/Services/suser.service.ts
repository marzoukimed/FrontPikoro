import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SuserService {

  private baseUrl = 'http://localhost:3000/user/'

  constructor(private http: HttpClient) { }

  SignIn(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}SignIn`, user);
  }

  SignUp(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}SignUp`,user);
  }


  
}
