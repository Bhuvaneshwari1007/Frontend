import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.css']
})
export class GetByIdComponent {
  getroomById: any = {
    roomNumber: 0,
    roomStatus: false
  };
  constructor(private service: RoomService, private route: ActivatedRoute) {}

getById(roomNumber:number){
  this.service.getById(roomNumber).subscribe(
    (data)=>{
    this.getroomById=data;
    console.log(data);
  })
}

ngOnInit(){
this.route.paramMap.subscribe(
  (param)=>{
    console.log(param);
    var roomNumber= Number(param.get('id'));
    this.getById(roomNumber);
  }
)
}
}
