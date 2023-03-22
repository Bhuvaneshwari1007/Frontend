import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  private unsubscriber: Subject<void> = new Subject<void>();

  constructor(private staff:StaffService, private route: ActivatedRoute,private router:Router){}  
  ngOnInit(): void {
    history.pushState(null, '', location.href); 
    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)).subscribe((_) => { 
      history.pushState(null, ''); 
      alert(`You can't go back at this time.`); });  }
  addStaff=new FormGroup({    
    id:new FormControl(''),
    employeeName:new FormControl(''),    
    phoneNo:new FormControl((''), [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")] ),  
    email:new FormControl(''),
    age:new FormControl(''),
    employeeAddress:new FormControl(''),
    salary:new FormControl('')  
  
  });   
  SaveData(){ 
    this.staff.saveStaff(this.addStaff.value).subscribe({
      next:(result)=>{   
          this.router.navigate(["/staff/all"])
      },
      error:(error) =>
      {
      console.log(error);    
      }
    }) 
  }
}
