import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateResComponent } from './create-res/create-res.component';
import { GetByIdResComponent } from './get-by-id-res/get-by-id-res.component';
import { ListResComponent } from './list-res/list-res.component';
import { UpdateResComponent } from './update-res/update-res.component';

const routes: Routes = [{
  path:'res/all',
  component:ListResComponent
},{
  path:'res/update/:id',
  component:UpdateResComponent
},{
  path:'res/add',
  component:CreateResComponent
},{
  path:'res/:id',
  component:GetByIdResComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
