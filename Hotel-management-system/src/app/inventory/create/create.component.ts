import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { InventoryService } from '../inventory.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  private unsubscriber: Subject<void> = new Subject<void>();

  constructor(private inventory:InventoryService, private route: ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    history.pushState(null, '', location.href); 
    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)).subscribe((_) => { 
      history.pushState(null, ''); 
      alert(`You can't go back at this time.`); });  }
  addInventory=new FormGroup({
    inventoryCode:new  FormControl(''),
    inventoryType:new FormControl(''),
    inventoryName:new FormControl(''),
    inventoryQuantity:new FormControl('')
  });
   SaveData(){
    this.inventory.saveInventory(this.addInventory.value).subscribe({
      next:(result)=>{
        this.router.navigate(["/inventory/all"])
      },
      error:(error) =>
      {
      console.log(error)
      }
    })
   }
  }
 
