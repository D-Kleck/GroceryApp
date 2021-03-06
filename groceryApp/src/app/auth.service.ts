import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// tslint:disable-next-line: class-name
interface myData {
  success: boolean;
  message: string;
}

// tslint:disable-next-line: class-name
interface registerResponse {
  success: boolean;
}

@Injectable()
export class AuthService {

  loggedInState = false;

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInState = value;
    localStorage.setItem('loggedIn', 'true');
  }

  get isLoggedIn() {
    return this.loggedInState;
  }

  // getUserDetails(username, password) {
  //   // post these details to API server return user info if correct
  //   return this.http.post<myData>('/api/auth.php', {
  //     username,
  //     password
  //   });
  // }

  // registerUser(firstName, lastName, username, password) {
  //   return this.http.post<registerResponse>('/api/register', {
  //     firstName,
  //     lastName,
  //     username,
  //     password
  //   });
  // }

}
