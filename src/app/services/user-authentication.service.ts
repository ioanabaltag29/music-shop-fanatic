import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
  apiUrl = 'http://localhost:3000';
  user: User;

  httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/users', JSON.stringify(user), this.httpHeaders);
  }

  readUser(id: number): Observable<User> {
    return this.http.get<User>(this.apiUrl + '/users/' + id);
  }

  readAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + '/users');
  }
}
