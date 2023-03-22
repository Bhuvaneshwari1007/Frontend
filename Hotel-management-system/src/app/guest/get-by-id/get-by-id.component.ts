import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.css']
})


export class GetByIdComponent {
  getByguestId: any = {
    guestId: '',
    name: '',
    contact: '',
    gender: '',
    email: '',
    address: '',
  };
  constructor(private service: GuestService, private route: ActivatedRoute) { }
  getById(id: number) {
    this.service.getById(id).subscribe(
      (data: any) => {
        this.getByguestId = data;
      })
  } ngOnInit() {
    this.route.paramMap.subscribe(
      (param) => {
        console.log(param);
        var id = Number(param.get('id'));
        this.getById(id);
      }
    )
  }
}
