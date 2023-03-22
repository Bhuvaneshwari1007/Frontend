import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { GuestModule } from './guest/guest.module';
import { InventoryModule } from './inventory/inventory.module';
import { ReservationModule } from './reservation/reservation.module';
import { RoomModule } from './room/room.module';
import { StaffModule } from './staff/staff.module';
import { HomeComponent } from './home/home.component';
import { DashboardReceptionistComponent } from './dashboard-receptionist/dashboard-receptionist.component';
import { DashboardManagerComponent } from './dashboard-manager/dashboard-manager.component';
import { DashboardOwnerComponent } from './dashboard-owner/dashboard-owner.component';
import { TokeninterceptorService } from './tokeninterceptor.service';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardReceptionistComponent,
    DashboardManagerComponent,
    DashboardOwnerComponent,
    PaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthenticationModule,
    HttpClientModule,
    StaffModule,
    InventoryModule,
    ReservationModule,
    GuestModule,
    RoomModule
  ],
  providers: [ {    
    provide: HTTP_INTERCEPTORS,    
    useClass: TokeninterceptorService,    
    multi: true  
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
