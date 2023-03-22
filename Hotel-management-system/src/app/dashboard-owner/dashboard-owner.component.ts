import { Component, OnInit } from '@angular/core';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-dashboard-owner',
  templateUrl: './dashboard-owner.component.html',
  styleUrls: ['./dashboard-owner.component.css']
})
export class DashboardOwnerComponent implements OnInit{
  private unsubscriber: Subject<void> = new Subject<void>();

  constructor(private service: AuthService) {  }  
  logout() {    
    this.service.loggedOut();  
  }
  ngOnInit(): void {
    history.pushState(null, '', location.href); 
    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)).subscribe((_) => { 
      history.pushState(null, ''); 
      alert(`You can't go back at this time.`); });  }

}
