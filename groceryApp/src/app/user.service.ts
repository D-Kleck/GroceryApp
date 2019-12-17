import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// tslint:disable-next-line: class-name
interface myData {
  message: string;
  success: boolean;
}

// tslint:disable-next-line: class-name
interface isLoggedIn {
  status: boolean;
}

// tslint:disable-next-line: class-name
interface logoutState {
  success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getData() {
    return this.http.get<myData>('/api/database.php');
  }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('/api/isLoggedIn.php');
  }

  logout() {
    return this.http.get<logoutState>('/api/logout.php');
  }
}
