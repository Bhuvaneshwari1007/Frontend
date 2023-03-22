import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Staff } from './staff';

@Injectable({
  providedIn: 'root'
})

export class StaffService {
  constructor(private httpClient: HttpClient) { }


  getAllStaff(): Observable<Staff[]>{
    return this.httpClient.get<Staff[]>("http://localhost:9005/staff/all");
  }
  getById(id:number): Observable<Staff>{
    return this.httpClient.get<Staff>(`http://localhost:9005/staff/${id}`);
  }
  saveStaff(data:any):Observable<Staff>{ 
    return this.httpClient.post<Staff>(`http://localhost:9005/staff/addstaff`,data);
  }
  updateStaff(staff:Staff):Observable<Staff>{
  return this.httpClient.put<Staff>(`http://localhost:9005/staff/updatestaff`,staff);
  }
  deleteStaff(id:number){
    return this.httpClient.delete<number>(`http://localhost:9005/staff/deletestaff/${id}`);
  }
}
