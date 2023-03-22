import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ListResComponent } from './list-res/list-res.component';
import { CreateResComponent } from './create-res/create-res.component';
import { GetByIdResComponent } from './get-by-id-res/get-by-id-res.component';
import { UpdateResComponent } from './update-res/update-res.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListResComponent,
    CreateResComponent,
    GetByIdResComponent,
    UpdateResComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReservationModule { }
