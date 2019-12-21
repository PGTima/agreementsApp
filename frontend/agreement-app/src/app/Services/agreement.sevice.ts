import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agreements } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AgreementsService {
  private url = 'http://localhost:8080/allAgreement';
  /* private urlAddNews = 'http://localhost:8000/news/add-news/';*/

  constructor(private http: HttpClient) {
  }

  getAllAgreements(): Observable<Agreements[]> {
    console.log(this.http.get<Agreements[]>(this.url));
    return this.http.get<Agreements[]>(this.url);
  }
  /*
    addNews(news: AddNews): Observable<any> {
      return this.http.post<any>(this.urlAddNews, news);
    }
  */
}
