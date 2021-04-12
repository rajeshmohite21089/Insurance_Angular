import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminDetail } from './UserDetail';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8081/springboot-crud-rest/employees';

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getEmployeesListByFistName(firstName: String): Observable<any> {

   // console.log('getEmployeesListByFistName'+firstName);
    return this.http.get(`${this.baseUrl}/searchEmployees/${firstName}`);

  }

  saveAdminDetails(adminDetail : AdminDetail) : Observable<any>
  {
      let url = this.baseUrl + "users";
      return this.http.post(url,adminDetail);
  }
  }