import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { Guest } from '../guest';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private unsubscriber: Subject<void> = new Subject<void>();

  guests: Guest[] = [];
  constructor(private guestService: GuestService,private router:Router) {

  }
  ngOnInit() {

    this.getGuest();
    history.pushState(null, '', location.href);
    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)).subscribe((_) => {
        history.pushState(null, '');
        alert(`You can't go back at this time.`);
      });
  } getGuest() {
    this.guestService.getAllGuest().subscribe(data => this.guests = data);


  }

  deleteguest(guestId: number) {
    if (confirm('Are you sure to delete?'))
      this.guestService.deleteguest(guestId).
        subscribe((result) => {
          console.log(result);
        })

  }
  navigate() {
    var role = JSON.parse(localStorage.getItem('currentRole')!);
    console.log(role)
    if (role.role == 'ROLE_OWNER') { 
      this.router.navigate(['owner']); 
    } else if (role.role == 'ROLE_MANAGER') { 
      this.router.navigate(['manager']); 
    } else if (role.role == 'ROLE_RECEPTIONIST') { 
      this.router.navigate(['receptionist']); }
  }
}