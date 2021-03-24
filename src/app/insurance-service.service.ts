import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsuranceServiceService {

  private baseUrl = 'http://localhost:8081/Insurance/insurance';

  constructor(private http: HttpClient) { }

  getInsurance(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createInsuarance(insurance: Object): Observable<Object> {

    return this.http.post(`${this.baseUrl}`, insurance);
  }

  updateInsurance(id: number, value: Object): Observable<Object> {
    console.log(value);
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteInsurance(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getInsuranceList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getInsuranceListByPolicyTypeCode(policyTypeCode: String): Observable<any> {

    return this.http.get(`${this.baseUrl}/searchInsurance/${policyTypeCode}`);

  }

  updateInsuarances(id:number,insurance: Object): Observable<Object> {

    return this.http.put(`${this.baseUrl}/${id}`, insurance);
  }
  deleteInsuarances(id:number): Observable<any> {

    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });

  }
  }