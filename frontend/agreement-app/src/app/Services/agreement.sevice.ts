import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Agreements, Client } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AgreementsService {
  private url = 'http://localhost:8080/allAgreement';
  private urlFindAgreementById = 'http://localhost:8080/findByIdAgreement?id=';
  private urlAddAgreement = 'http://localhost:8080/addAgreement';
  private urlfindByAgreementNumber = 'http://localhost:8080/findByAgreementNumber?agreementNumber=';
  private urlPrizeByAgreementNumber = 'http://localhost:8080/GetPrizeForAgreement?typeDrawell=';

  constructor(private http: HttpClient) {
  }

  getAllAgreements(): Observable<Agreements[]> {
    console.log(this.http.get<Agreements[]>(this.url));
    return this.http.get<Agreements[]>(this.url);
  }
  getAgreementById(id): Observable<Agreements> {
    return this.http.get<Agreements>(this.urlFindAgreementById + id);
  }
  addAgreement(agreements: Agreements): Observable<any> {
    return this.http.post<any>(this.urlAddAgreement, agreements);
  }
  getfindByAgreementNumber(agreementNumber): Observable<Boolean> {
    return this.http.get<Boolean>(this.urlfindByAgreementNumber + agreementNumber);
  }
  getPrizeByAgreementNumber(typeDrawell: string, yearDrawell: string,
    strachSumm: string, squareDrawell: string,
    dateFrom: string, dateTo: string): Observable<any> {
    return this.http.get<any>(this.urlPrizeByAgreementNumber + typeDrawell + '&yearDrawell=' + yearDrawell
      + '&strachSumm=' + strachSumm + '&squareDrawell=' + squareDrawell + '&dateFrom=' + dateFrom + '&dateTo=' + dateTo);
  }
}
