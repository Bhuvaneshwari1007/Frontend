import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardManagerComponent } from './dashboard-manager/dashboard-manager.component';
import { DashboardOwnerComponent } from './dashboard-owner/dashboard-owner.component';
import { DashboardReceptionistComponent } from './dashboard-receptionist/dashboard-receptionist.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: HomeComponent
},{
  path: 'receptionist',
  component: DashboardReceptionistComponent,
  canActivate: [AuthGuard]
},{
  path: 'manager',
  component: DashboardManagerComponent,
  canActivate: [AuthGuard]
},{
  path: 'owner',
  component: DashboardOwnerComponent,
  canActivate: [AuthGuard]
},{
  path:'payment',
  component: PaymentComponent,
  canActivate: [AuthGuard]
}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
