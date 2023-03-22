import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { GetByIdComponent } from './get-by-id/get-by-id.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path:'inventory/all',
    component:ListComponent
  },
  {
    path:'inventory/update/:id',
    component:UpdateComponent
  },
  {
    path:'inventory/add',
    component:CreateComponent
  },
  {
    path:'inventory/:id',
    component:GetByIdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})  
export class InventoryRoutingModule { }
