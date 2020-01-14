import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Agreements, Client} from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AgreementsService {
  private url = 'http://localhost:8080/allAgreement';
  private urlFindAgreementById = 'http://localhost:8080/findByIdAgreement?id=';
  private urlAddAgreement = 'http://localhost:8080/addAgreement';
  private urlfindByAgreementNumber = 'http://localhost:8080/findByAgreementNumber?agreementNumber=';

  constructor(private http: HttpClient) {
  }

  getAllAgreements(): Observable<Agreements[]> {
    console.log(this.http.get<Agreements[]>(this.url));
    return this.http.get<Agreements[]>(this.url);
  }
  getAgreementById(id): Observable<Agreements> {
    console.log(this.http.get<Agreements>(this.urlFindAgreementById));
    return this.http.get<Agreements>(this.urlFindAgreementById + id);
  }
  addAgreement(agreements: Agreements): Observable<any> {
    return this.http.post<any>(this.urlAddAgreement, agreements);
  }
  getfindByAgreementNumber(agreementNumber): Observable<Boolean> {
    return this.http.get<Boolean>(this.urlfindByAgreementNumber + agreementNumber);
  }
}
