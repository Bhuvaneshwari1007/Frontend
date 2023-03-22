import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  private unsubscriber: Subject<void> = new Subject<void>();
  constructor(private fb: FormBuilder, private service: GuestService, private route: ActivatedRoute, private router: Router) {


  }
  ngOnInit(): void {
    history.pushState(null, '', location.href); 
    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)).subscribe((_) => { 
      history.pushState(null, ''); 
      alert(`You can't go back at this time.`); });
  }


  creationForm = new FormGroup({
    guestId: new FormControl(''),
    name: new FormControl(''),
    contact: new FormControl((''), [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    gender: new FormControl(''),
    email: new FormControl((''),[Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    address: new FormControl('')
  });
  addguest() {
    this.service.addguest(this.creationForm.value).subscribe({
      next: (result) => {
        this.router.navigate(["/res/add"])
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}

