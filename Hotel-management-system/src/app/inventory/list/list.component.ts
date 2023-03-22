import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { Inventory } from '../inventory';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private unsubscriber: Subject<void> = new Subject<void>();

  inventory: Inventory[] = [];
  constructor(private inventoryService: InventoryService, private router: Router) { }
  ngOnInit() {
    
    history.pushState(null, '', location.href); 
    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)).subscribe((_) => { 
      history.pushState(null, ''); 
      alert(`You can't go back at this time.`); });
      this.getInventory();
  }

  getInventory() {
    this.inventoryService.getAllInventory()
      .subscribe(data =>
        this.inventory = data);
  }
  deleteInventory(inventoryCode: number) {
    if (confirm('Are you sure to delete?'))
      this.inventoryService.deleteInventory(inventoryCode).
        subscribe((result) => {
          console.log(result);
        })
  }
  navigate(){    
    var role = JSON.parse(localStorage.getItem("currentRole")!);       
    if(role.role == "ROLE_OWNER"){      
      this.router.navigate(['owner']);    
    }     
    else if(role.role == "ROLE_MANAGER"){      
      this.router.navigate(['manager']);    
    }       
    else if(role.role == "ROLE_RECEPTIONIST"){      
      this.router.navigate(['receptionist']);  
    }}
}
