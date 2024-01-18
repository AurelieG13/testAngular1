import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { TicketingComponent } from './ticketing/ticketing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EditprofiluserComponent } from './editprofiluser/editprofiluser.component';
import { BookingComponent } from './booking/booking.component';
import { SoloComponent } from './ticketing/solo/solo.component';
import { DuoComponent } from './ticketing/duo/duo.component';
import { FamilyComponent } from './ticketing/family/family.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    TicketingComponent,
    SidebarComponent,
    EditprofiluserComponent,
    BookingComponent,
    SoloComponent,
    DuoComponent,
    FamilyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
