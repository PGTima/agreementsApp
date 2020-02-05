import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Client } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  private url = 'http://localhost:8080/allClient';
  private urlAddClient = 'http://localhost:8080/addClient';
  private urlfindClient = 'http://localhost:8080/findClient';
  private urleditClient = 'http://localhost:8080/editClient';
  private urlgetfindByClient = 'http://localhost:8080//findClientBySeriesNomer?series=';

  constructor(private http: HttpClient) {
  }
  /**
   * Получение списка всех клиентов
   */
  getAllClients(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  /**
   * Добавление клиента
   * @param clients 
   */
  addClient(clients: Client): Observable<any> {
    return this.http.post<any>(this.urlAddClient, clients);
  }
  /**
   * Поиск клиента по ФИО
   * @param username 
   * @param userSurname 
   * @param userPatronymic 
   */
  findClient(username: string, userSurname: string, userPatronymic: string): Observable<Client[]> {
    const params = new HttpParams().set('name', username).set('surname', userSurname).set('patronymic', userPatronymic);
    const options = { params: params };
    return this.http.get<Client[]>(this.urlfindClient, options);
  }
  /**
   * Редактирование клиента
   * @param clients 
   */
  editClient(clients: Client): Observable<any> {
    return this.http.post<any>(this.urleditClient, clients);
  }
  /**
   * Проверка на наличие клиента
   * @param series 
   * @param SeriesNomer 
   */
  getfindByClient(series:String, SeriesNomer: String): Observable<Boolean> {
    return this.http.get<Boolean>(this.urlgetfindByClient + series + '&nomer='+SeriesNomer);
  }
}
