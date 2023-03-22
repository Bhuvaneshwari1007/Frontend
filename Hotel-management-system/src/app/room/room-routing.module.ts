import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { GetByIdComponent } from './get-by-id/get-by-id.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [{
  path:'room/all',
  component: ListComponent
},{
  path:'room/add',
  component: CreateComponent
},{
  path:'room/update/:id',
  component: UpdateComponent
},{
  path:'room/:id',
  component: GetByIdComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
