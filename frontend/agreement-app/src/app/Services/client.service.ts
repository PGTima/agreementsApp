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

  constructor(private http: HttpClient) {
  }
  // получение всех клиентов
  getAllClients(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  // создание клиента
  addClient(clients: Client): Observable<any> {
    return this.http.post<any>(this.urlAddClient, clients);
  }
  findClient(username: string, userSurname: string, userPatronymic: string): Observable<Client[]> {
    const params = new HttpParams().set('name', username).set('surname', userSurname).set('patronymic', userPatronymic);
    const options = { params: params };
    return this.http.get<Client[]>(this.urlfindClient, options);
  }
  editClient(clients: Client): Observable<any> {
    return this.http.post<any>(this.urleditClient, clients);
  }
}
