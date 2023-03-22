import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-get-by-id-res',
  templateUrl: './get-by-id-res.component.html',
  styleUrls: ['./get-by-id-res.component.css']
})
export class GetByIdResComponent { 
  getResById:any={ 
    name:'',    
    gender:'',    
    checkIn:'' ,
    checkOut: '' ,
    roomType:''
  };
  constructor(private service:ReservationService, private route: ActivatedRoute){}
  getById(id:number){
  this.service.getById(id).subscribe(
    (data: any)=>{
      this.getResById=data;
    })
}

ngOnInit() {
  this.route.paramMap.subscribe(
    (param)=>{
      console.log(param);
      var id=Number(param.get('id'));
      this.getById(id);
    }
  )
}
}
