import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { AuthService } from '../auth.service';
import { match } from '../passwordvalidator';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  roleHasError = true;

  user: User = {    
    userName: '',   
     password: '',    
     active: false,    
     role: ''  
    }
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

  signupForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z\s]*$')]],
    roles: ['Role',Validators.required],
    password: ['', [Validators.required,Validators.minLength(5)]],
    confirmPassword: ['', Validators.required]
  },
  {
    validators: match('password', 'confirmPassword')
  }
  );
  

  validateRole(value: any) {
    if (value === "Role") {
      this.roleHasError = true;
    } else {
      this.roleHasError = false;
    }
  }
  get username() {
    return this.signupForm.get('username');
  }
  get roles() {
    return this.signupForm.get('roles');
  } 
  get password() {
    return this.signupForm.get('password');
  }
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  onSubmit() { 
    if(confirm('Registered Successfully'))   
    
    this.user = {      
      userName: this.signupForm.get('username')?.value!,      
      password: this.signupForm.get('password')?.value!,      
      active: true,      
      role: this.signupForm.get('roles')?.value!    
    }    
    console.log(this.user);    
    this.authService.register(this.user).subscribe(      
      {        
        next: (data) => this.router.navigate(['signin']),        
        error: (data)=>console.log(data)      
      }    
      );  
    }

}
