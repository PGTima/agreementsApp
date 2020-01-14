import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdressService {
  private url = 'http://localhost:8080/allState';
  private urlTypeDrawelling = 'http://localhost:8080/allDrawelling';

  constructor(private http: HttpClient) {
  }

  getState(): Observable<State[]> {
    return this.http.get<State[]>(this.url);
  }
  getDrawelling(): Observable<State[]> {
    console.log(this.http.get<State[]>(this.url));
    return this.http.get<State[]>(this.url);
  }
}
