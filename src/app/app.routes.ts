import { Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { HomeComponent } from './Components/home/home.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { StaffComponent } from './Components/staff/staff.component';
import path from 'path';

export const routes: Routes = [

    { path: '', component: LandingPageComponent },
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'staff', component: StaffComponent },
    { path: 'student', component: HomeComponent },
    { path: 'login', component: LoginComponent }

];
