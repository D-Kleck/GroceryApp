import { User } from './../../../api/models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { tokenNotExpired } from 'angular2-jwt';

export interface SignupResponse {
  success: boolean;
  msg: string;
  token: string;
  user: any;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  authToken: any;
  user: any;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post<SignupResponse>(`${environment.apiUrl}/users/register`, user, { headers: this.headers });
  }

  authenticate(user: User) {
    return this.http.post<SignupResponse>(`${environment.apiUrl}/users/login`, user, { headers: this.headers });
  }

  getUser(): Observable<SignupResponse> {
    this.loadToken();
    const headers = new HttpHeaders().set('Authorization', this.authToken).set('Content-Type', 'application/json');
    return this.http.get<SignupResponse>(`${environment.apiUrl}/users/profile`,   { headers } );
  }

  updateUser(user): Observable<SignupResponse> {
    const id = JSON.parse(localStorage.getItem('user')).id;
    const headers = new HttpHeaders().set('Authorization', this.authToken).set('Content-Type', 'application/json');
    return this.http.put<SignupResponse>(`${environment.apiUrl}/users/update/${id}`, user,  { headers } ).pipe();
  }

  deleteUser(): Observable<SignupResponse> {
    const id = JSON.parse(localStorage.getItem('user')).id;
    const headers = new HttpHeaders().set('Authorization', this.authToken).set('Content-Type', 'application/json');
    return this.http.delete<SignupResponse>(`${environment.apiUrl}/users/delete/${id}`, {headers} ).pipe();
  }

  // getAllUsers() {
  //   return this.http.get<User[]>(`${environment.apiUrl}/users`);
  // }

  // getAllLists(user: User) {
  //   return this.http.get<grocerList[]>(`${environment.apiUrl}/users/${user.id}/groceryLists`);
  // }

  // getAllItems(user: User, list: grocerList) {
  //   return this.http.get<item[]>(`${environment.apiUrl}/users/${user.id}/groceryLists/${list.id}/items`);
  // }

  // getUserById(id: number) {
  //   return this.http.get(`${environment.apiUrl}/users/${id}`);
  // }

  // updateList(user: User, list: grocerList) {
  //   return this.http.put(`${environment.apiUrl}/users/${user.id}/groceryLists/${list.id}`, list);
  // }

  // updateItem(user: User, list: grocerList, item: item) {
  //   return this.http.put(`${environment.apiUrl}/users/${user.id}/groceryLists/${list.id}/items/${item.name}`, item);
  // }

  // delete(id: number) {
  //   return this.http.delete(`${environment.apiUrl}/users/${id}`);
  // }

  // getListById(userId: number, id: string) {
  //   return this.http.get(`${environment.apiUrl}/users/${userId}/groceryLists/${id}`);
  // }

  // Helper functions

  storeData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
   }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
 }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  signOut() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
