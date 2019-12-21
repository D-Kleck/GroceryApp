import { User } from './../../../api/models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  constructor() { }

  AuthenticateRegistration(user: any) {
    // tslint:disable-next-line: triple-equals
    if ( user.firstName == undefined || user.lastName == undefined ||
     // tslint:disable-next-line: triple-equals
     user.username == undefined || user.password == undefined) {
       return false;
    } else {
      return true;
    }
  }

  AuthenticateUserUpdate(user: any) {
    // tslint:disable-next-line: triple-equals
    if ( user.firstName == undefined || user.lastName == undefined ||
     // tslint:disable-next-line: triple-equals
     user.username == undefined ||  user.password == undefined || user.admin == undefined ) {
       return false;
    } else {
      return true;
    }
  }

  AuthenticateLogin(user: any) {
    // tslint:disable-next-line: triple-equals
    if ( user.username == undefined ||  user.password == undefined) {
       return false;
    } else {
      return true;
    }
  }
}
