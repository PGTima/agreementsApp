import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State, Adress, Dwelling } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdressService {

  private url = 'http://localhost:8080/allState';
  private urlTypeDrawelling = 'http://localhost:8080/allDrawelling';
  private urlAddDrawelling = 'http://localhost:8080/addDwelling';
  private urlAddAdress = 'http://localhost:8080/addAdress';

  constructor(private http: HttpClient) {
  }
 /**
 * Получение списка государств
 */
  getState(): Observable<State[]> {
    return this.http.get<State[]>(this.url);
  }
  /**
   * Получение списка жилища
   */
  getDrawelling(): Observable<State[]> {
    return this.http.get<State[]>(this.url);
  }
  /**
   * Добавление жилища
   * @param dwelling 
   */
  addDrawelling(dwelling: Dwelling): Observable<any> {
    return this.http.post<any>(this.urlAddDrawelling, dwelling);
  }
  /**
   * Добавление адреса
   * @param adress 
   */
  addAdress(adress: Adress): Observable<any> {
    return this.http.post<any>(this.urlAddAdress, adress);
  }
}
