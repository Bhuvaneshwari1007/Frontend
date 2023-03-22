import { Component ,OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { Guest } from '../guest';
import { GuestService } from '../guest.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  private unsubscriber: Subject<void> = new Subject<void>();

  id:number=0;
  constructor(private fb: FormBuilder,private service:GuestService,private route: ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=> {
      this.id = Number(param.get('id'))
      this.getGuest(this.id);
    }

    )
    history.pushState(null, '', location.href); 
    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)).subscribe((_) => { 
      history.pushState(null, ''); 
      alert(`You can't go back at this time.`); });
  }
  creationForm = this.fb.group(
    {
      name: [''],
      contact: [''],
      gender: [''],
      email: [''],
      address: [''],
 } );

 guest : Guest={
      guestId: this.id,
      name: '',
      contact: '',
      gender: '',
      email: '',
      address: '',

 }
getGuest(id:number){
  this.service.getById(id).subscribe(
    (guest)=>this.creationForm.setValue(
      {
        name: guest.name,
        contact: guest.contact,
        gender: guest.gender,
        email: guest.email,
        address: guest.address


      })
  )
}
update(){
  this.guest={
    guestId:this.id,
    name:this.creationForm.get('name')?.value!,
    contact:this.creationForm.get('contact')?.value!,
    gender:this.creationForm.get('gender')?.value!,
    email:this.creationForm.get('email')?.value!,
    address:this.creationForm.get('address')?.value!,
  }
  this.service.updateguest(this.guest).subscribe({
    next: (data)=>this.router.navigate([`guest/all`]),
    error:(data)=>console.log(data)
  })
}
}
