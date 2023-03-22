import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { CreateComponent } from './create/create.component';
import { GetByIdComponent } from './get-by-id/get-by-id.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [{
  path:'guest/all',
  component: ListComponent,
  canActivate:[AuthGuard]
},{
  path:'guest/add',
  component: CreateComponent
},{
  path:'guest/update/:id',
  component: UpdateComponent
},{
  path: 'guest/:id',
  component: GetByIdComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
