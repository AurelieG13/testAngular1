import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TicketingComponent } from './ticketing/ticketing.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { EditprofiluserComponent } from './editprofiluser/editprofiluser.component';
import { SoloComponent } from './ticketing/solo/solo.component';
import { DuoComponent } from './ticketing/duo/duo.component';
import { FamilyComponent } from './ticketing/family/family.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path:"home", component: HomeComponent},
  { path:"contact", component: ContactComponent},
  { path: "ticketing", component: TicketingComponent},
  { path: "ticketing/solo", component: SoloComponent},
  { path: "ticketing/duo", component: DuoComponent},
  { path: "ticketing/family", component: FamilyComponent},
  { path:"cart", component: CartComponent},
  { path:"register", component: RegisterComponent},
  { path:"login", component: LoginComponent},
  { path:"admindashboard", component: AdmindashboardComponent},
  { path:"userdashboard", component: UserdashboardComponent},
  { path:"editprofiluser", component: EditprofiluserComponent},
  { path:"", redirectTo: "home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
