import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminDetail } from './UserDetail';
import { Insurance } from './insurance';

@Injectable({
  providedIn: 'root'
})
export class InsuranceServiceService {

  private baseUrl = 'http://localhost:8080/Insurance/insurance';

  constructor(private http: HttpClient) { }

  getInsurance(id: number): Observable<any> {
    return this.http.get<Insurance>(`${this.baseUrl}/${id}`);
  }

  createInsuarance(insurance: Object): Observable<Object> {
console.log("insurance"+insurance.valueOf);
    return this.http.post(`${this.baseUrl}`, insurance);
  }

  updateInsurance(id: number, value: Object): Observable<Object> {
    console.log(value);
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteInsurance(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }



  getInsuranceList(userId:number): Observable<any> {
    console.log("getInsuranceList"+userId);
    return this.http.get(`${this.baseUrl}/Users/${userId}`);
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
  getInsuarancesId(): Observable<any> {

    return this.http.get(`${this.baseUrl}/getInsuranceId`, { responseType: 'text' });

    
  }
  saveAdminDetails(adminDetail : AdminDetail) : Observable<any>
  {
      let url = "http://localhost:8080/Insurance/users";
      return this.http.post(url,adminDetail);

      
  }
  }