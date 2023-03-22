import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from './guest';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  constructor(private httpClient: HttpClient) { }

  getAllGuest(): Observable<Guest[]> {
    return this.httpClient.get<Guest[]>(`http://localhost:9002/guest/all`);
  }

  addguest(data: any): Observable<any> {
    return this.httpClient.post<any>(`http://localhost:9002/guest/addguest`, data);

  }
  deleteguest(id: number): Observable<Guest> {
    return this.httpClient.delete<Guest>(`http://localhost:9002/guest/deleteguest/${id}`);
  }
  getById(id: number): Observable<Guest> {
    return this.httpClient.get<Guest>(`http://localhost:9002/guest/${id}`);
  }
  updateguest(payload: any): Observable<Guest> {
    return this.httpClient.put<Guest>(`http://localhost:9002/guest/updateguest`, payload);
  }
}