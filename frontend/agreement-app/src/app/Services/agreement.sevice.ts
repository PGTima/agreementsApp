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
  /**
   * Получение списка всех договоров
   */
  getAllAgreements(): Observable<Agreements[]> {
    return this.http.get<Agreements[]>(this.url);
  }
  /**
   * Получение договора по ид
   * @param id 
   */
  getAgreementById(id): Observable<Agreements> {
    return this.http.get<Agreements>(this.urlFindAgreementById + id);
  }
  /**
   * Добавление договора
   * @param agreements 
   */
  addAgreement(agreements: Agreements): Observable<any> {
    return this.http.post<any>(this.urlAddAgreement, agreements);
  }
  /**
   * Поиск договора по номеру договора
   * @param agreementNumber 
   */
  getfindByAgreementNumber(agreementNumber): Observable<Boolean> {
    return this.http.get<Boolean>(this.urlfindByAgreementNumber + agreementNumber);
  }
  /**
   * Расчет премии
   * @param typeDrawell 
   * @param yearDrawell 
   * @param strachSumm 
   * @param squareDrawell 
   * @param dateFrom 
   * @param dateTo 
   */
  getPrizeByAgreementNumber(typeDrawell: string, yearDrawell: string,
    strachSumm: string, squareDrawell: string,
    dateFrom: string, dateTo: string): Observable<any> {
    return this.http.get<any>(this.urlPrizeByAgreementNumber + typeDrawell + '&yearDrawell=' + yearDrawell
      + '&strachSumm=' + strachSumm + '&squareDrawell=' + squareDrawell + '&dateFrom=' + dateFrom + '&dateTo=' + dateTo);
  }
}
