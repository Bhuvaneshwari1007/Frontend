import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.css']
})
export class GetByIdComponent implements OnInit{
  getstaffById: any = {
    id: 0,
    employeeName: '',
    phoneNo: '',
    email: '',
    age: '',
    employeeAddress: '',
    salary: '',
  };
  constructor(private service: StaffService, private route: ActivatedRoute) {}

getById(id:number){
  this.service.getById(id).subscribe(
    (data)=>{
    this.getstaffById=data;
    console.log(data);
  })
}

ngOnInit(){
this.route.paramMap.subscribe(
  (param)=>{
    console.log(param);
    var id= Number(param.get('id'));
    this.getById(id);
  }
)
}
}
