import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private httpClient: HttpClient) { }
  
  getAllRoom(): Observable<Room[]> {
    return this.httpClient.get<Room[]>("http://localhost:9001/room/all");
  }
  getById(id: number): Observable<Room> {
    return this.httpClient.get<Room>(`http://localhost:9001/room/${id}`);
  }
  saveRoom(data: any): Observable<Room> {
    return this.httpClient.post<Room>(`http://localhost:9001/room/addroom`, data);
  }
  updateRoom(room: Room): Observable<Room> {
    return this.httpClient.put<Room>(`http://localhost:9001/room/updateroom`, room);
  }
  deleteRoom(id: number) {
    return this.httpClient.delete<number>(`http://localhost:9001/room/deleteroom/${id}`);
  }

}
