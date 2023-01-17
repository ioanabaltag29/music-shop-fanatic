import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CD } from '../classes/cd';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  apiUrl = "http://localhost:3000";
  httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getAllCDs(): Observable<CD[]> {
    return this.http.get<CD[]>(this.apiUrl + '/store');
  }

  getCDById(id: number): Observable<CD> {
    return this.http.get<CD>(this.apiUrl + "/store/" + id);
  }

  getCDsByGenre(genre): Observable<CD[]> {
    return this.http.get<CD[]>(this.apiUrl + "/store?genre_like=" + genre);
  }


  updateCD(cd: CD): Observable<CD> {
    return this.http.put<CD>(this.apiUrl + "/store/" + cd.id, cd);
  }

  searchCD(searchKey): Observable<CD[]> {
    return this.http.get<CD[]>(this.apiUrl + "/store?artist_like=" + searchKey && this.apiUrl + "/store?album_name_like=" + searchKey);
  }

  getInCartCDs(): Observable<CD[]> {
    return this.http.get<CD[]>(this.apiUrl + "/store?in_cart_like=true");
  }
}
