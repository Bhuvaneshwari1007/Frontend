import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventory } from './inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  constructor(private httpClient:HttpClient) { }

  getAllInventory():Observable<Inventory[]>{
    return this.httpClient.get<Inventory[]>(`http://localhost:9003/inventory/all`);
  }
  getById(id:number):Observable<Inventory>{    
    return this.httpClient.get<Inventory>(`http://localhost:9003/inventory/${id}`);  
  }
 saveInventory(data:any):Observable<Inventory>{
 return this.httpClient.post<Inventory>(`http://localhost:9003/inventory/addinventory`,data);
  }
  
  deleteInventory(id:number): Observable<Inventory>{
    return this.httpClient.delete<Inventory>(`http://localhost:9003/inventory/delete/${id}`);
  }
  updateInventory(payload:any): Observable<Inventory>{
    return this.httpClient.put<Inventory>(`http://localhost:9003/inventory/updateinventory`,payload);
  }
}
