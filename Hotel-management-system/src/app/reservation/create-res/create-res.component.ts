import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-create-res',
  templateUrl: './create-res.component.html',
  styleUrls: ['./create-res.component.css']
})
export class CreateResComponent implements OnInit {
  
  roomTypeHasError: boolean = false;
  private unsubscriber: Subject<void> = new Subject<void>();

  constructor(private reservationService: ReservationService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    history.pushState(null, '', location.href); 
    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)).subscribe((_) => { 
      history.pushState(null, ''); 
      alert(`You can't go back at this time.`); });  }
  addReservation = new FormGroup({
    reservationCode: new FormControl(''),
    name: new FormControl(''),
    gender: new FormControl(''),
    checkIn: new FormControl(''),
    checkOut: new FormControl(''),
    roomType: new FormControl('')
  });
  addRes() {
    this.reservationService.saveReservation(this.addReservation.value).subscribe({
      next: (data) => 
      this.router.navigate(["/payment"]),

      error: (error) => 
      console.log(error)

    })
  }
  validateRoomType(value: any) { 
    if (value === 'RoomType'){ 
    this.roomTypeHasError = true; 
  } else { 
    this.roomTypeHasError = false; 
  } }
  CurrentDate:any=new Date();
}

