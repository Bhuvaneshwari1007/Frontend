import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { Staff } from '../staff';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  private unsubscriber: Subject<void> = new Subject<void>();

  id:number=0;
  constructor(public fb: FormBuilder, private service:StaffService,private route:ActivatedRoute, private router:Router ){}

  updateStaff = this.fb.group({
    employeeName:[''],
    phoneNo:[''],
    email:[''],
    age:[0],
    employeeAddress:[''],
    salary:[0]
  })

  staff: Staff={
    id:this.id,
    employeeName:'',
    phoneNo:'',
    email:'',
    age:0,
    employeeAddress:'',
    salary:0
  }
  getStaff(id:number){
    this.service.getById(id).subscribe(
      (staff)=>this.updateStaff.setValue({
        employeeName:staff.employeeName,
        phoneNo:staff.phoneNo,
        email:staff.email,
        age:staff.age,
        employeeAddress:staff.employeeAddress,
        salary:staff.salary
      })
      )
  }
  ngOnInit(){
    this.route.paramMap.subscribe(
      (param)=>{
        this.id =Number(param.get('id'))
        this.getStaff(this.id)
      }
    )
    history.pushState(null, '', location.href); 
    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)).subscribe((_) => { 
      history.pushState(null, ''); 
      alert(`You can't go back at this time.`); });
  }
  UpdateData(){
    this.staff={
      id:this.id,
      employeeName:this.updateStaff.get('employeeName')?.value!,
      phoneNo:this.updateStaff.get('phoneNo')?.value!,
      email:this.updateStaff.get('email')?.value!,
      age:this.updateStaff.get('age')?.value!,
      employeeAddress:this.updateStaff.get('employeeAddress')?.value!,
      salary:this.updateStaff.get('salary')?.value!
    }
    this.service.updateStaff(this.staff).subscribe({
      next:(data)=>this.router.navigate(['staff/all']),
      error:(data)=>console.log(data)
    })
  }
}
