import { Component } from '@angular/core';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  rooms: Room[] = [];
  
  constructor(private roomService: RoomService){
  }
  ngOnInit() {
    this.getRoom();
  }
  getRoom(){
    this.roomService.getAllRoom().subscribe(data =>
      this.rooms = data
    );
  }
  deleteRoom(roomNumber:number){
    if (confirm('Are you sure to delete?'))
    this.roomService.deleteRoom(roomNumber).subscribe(
      (result)=>{
        console.log(result);
      }
    )
  }
}
