import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  id:number=0;
  constructor(public fb: FormBuilder, private service:RoomService,private route:ActivatedRoute, private router:Router ){}

  updateRoom = this.fb.group({
    
    roomType:[''],
    roomStatus:[''],
  })

  room: Room={
    roomNumber:this.id,
    roomType:'',
    roomStatus:''
  }
  getRoom(roomNumber:number){
    this.service.getById(roomNumber).subscribe(
      (room)=>{
      console.log(room);
      this.updateRoom.setValue({
        roomType:room.roomType,
        roomStatus:room.roomStatus
      })}
      )
  }
  ngOnInit(){
    this.route.paramMap.subscribe(
      (param)=>{
        this.id =Number(param.get('id'))
        this.getRoom(this.id)
      }
    )
  }
  UpdateData(){
    this.room={
      roomNumber:this.id,
      roomType:this.updateRoom.get('roomType')?.value!,
      roomStatus:this.updateRoom.get('roomStatus')?.value!
    }
    
    this.service.updateRoom(this.room).subscribe({
      next:(data)=>this.router.navigate(['room/all']),
      error:(data)=>console.log(data)
    })
  }
}
