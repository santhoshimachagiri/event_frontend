import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { EventComponent } from './event/event.component';
import { VendorComponent } from './vendor/vendor.component';
import { GuestComponent } from './guest/guest.component';
import { LoginComponent } from './login/login.component'; // Login component
import { SignupComponent } from './signup/signup.component'; // Signup component
import { EventCreateComponent } from './event-create/event-create.component';
import { VendorBudgetComponent } from './vendor/vendor-budget/vendor-budget.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'events', component: EventComponent }, // Keep this route
  { path: 'vendor', component: VendorComponent },
  { path: 'guest', component: GuestComponent },
  { path: 'login', component: LoginComponent }, // Add Login route
  { path: 'signup', component: SignupComponent }, // Add Signup route
  { path: 'event-create', component: EventCreateComponent }, // Event creation route
  { path: 'vendor/:category', component: VendorComponent },
  { path: 'vendor-budget', component: VendorBudgetComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' } // Wildcard route for 404 page (optional)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
