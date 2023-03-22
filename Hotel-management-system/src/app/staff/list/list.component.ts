import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { Staff } from '../staff';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private unsubscriber: Subject<void> = new Subject<void>();

  staffs: Staff[] = [];
  
  constructor(private staffService: StaffService, private router: Router){

  }
  ngOnInit() {
    this.getStaff();
    history.pushState(null, '', location.href); 
    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)).subscribe((_) => { 
      history.pushState(null, ''); 
      alert(`You can't go back at this time.`); });
  }
  getStaff(){
    this.staffService.getAllStaff().subscribe(data =>
      this.staffs = data
    );
  }
  deleteStaff(id:number){
    if (confirm('Are you sure to delete?'))
    this.staffService.deleteStaff(id).subscribe(
      (result)=>{
        console.log(result);
      }
    )
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

