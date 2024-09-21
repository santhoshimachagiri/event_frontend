import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { EventComponent } from './event/event.component';
import { VendorComponent } from './vendor/vendor.component';
import { GuestComponent } from './guest/guest.component';
import { LoginComponent } from './login/login.component'; // Login component
import { SignupComponent } from './signup/signup.component'; // Signup component

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'events', component: EventComponent },
  { path: 'vendor', component: VendorComponent },
  { path: 'guest', component: GuestComponent },
  { path: 'login', component: LoginComponent }, // Add Login route
  { path: 'signup', component: SignupComponent }, // Add Signup route
  { path: '**', redirectTo: '' } // Wildcard route for 404 page (optional)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
