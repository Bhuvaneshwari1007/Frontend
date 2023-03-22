import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { AuthService } from '../auth.service';
import { AuthRequest } from '../authrequest';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  errorMsg: string = '';
  private unsubscriber: Subject<void> = new Subject<void>();

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }
  ngOnInit(): void {
    history.pushState(null, '', location.href); 
    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)).subscribe((_) => { 
      history.pushState(null, ''); 
      alert(`You can't go back at this time.`); });
  }

  request: AuthRequest = {
    userName: '',
    password: ''
  }

  signinForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', Validators.required],
  });
  get password() {
    return this.signinForm.get('password');
  }
  login() {
    this.request.userName = this.signinForm.get('username')?.value!;
    this.request.password = this.signinForm.get('password')?.value!;
    this.authService.login(this.request).subscribe({
      next:(data) => {
          this.authService.storeToken(data.jwt);
           this.authService.getUserRole(this.request.userName).subscribe(
            {
            next: (role) => {
              localStorage.setItem('currentRole', JSON.stringify(role));
              if (role.role == 'ROLE_RECEPTIONIST') {
                console.log(role.role);
                this.router.navigate(['receptionist'])
              } else if (role.role == 'ROLE_MANAGER') {
                console.log(role.role);
                this.router.navigate(['manager'])
              } else if (role.role == 'ROLE_OWNER') {
                console.log(role.role);
                this.router.navigate(['owner'])
              }
            },
          });
        },
        error: (data) => { this.errorMsg = "Invalid Username/Password"; }
   }
    )
  }
}