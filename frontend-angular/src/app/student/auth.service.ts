import { Injectable } from '@angular/core';
// import { map } from 'rxjs/operator';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  // login(credentials) {
  //   this.http.post('https://my-app.com/api/authenticate', credentials)
  //     .map(res => res.json())
  //     .subscribe(
  //       // We're assuming the response will be an object
  //       // with the JWT on an id_token key
  //       data => localStorage.setItem('id_token', data.id_token),
  //       error => console.log(error)
  //     );
  // }
}
