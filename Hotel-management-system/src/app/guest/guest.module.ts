import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { GuestRoutingModule } from './guest-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { GetByIdComponent } from './get-by-id/get-by-id.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    UpdateComponent,
    GetByIdComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GuestModule { }
