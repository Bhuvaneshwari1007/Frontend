import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { GetByIdComponent } from './get-by-id/get-by-id.component';
import { UpdateComponent } from './update/update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    GetByIdComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class StaffModule { }
