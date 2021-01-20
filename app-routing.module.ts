import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './auth-gaurd.service';


const routes: Routes = [
  {path:'employees', component: EmployeeComponent, canActivate:[AuthGaurdService]},
  {path:'create-employee', component: CreateEmployeeComponent, canActivate:[AuthGaurdService]},
  {path:'update-employee/:id', component: UpdateEmployeeComponent, canActivate:[AuthGaurdService]},
  {path:'employee-details/:id', component: EmployeeDetailsComponent, canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent , canActivate:[AuthGaurdService]},
  {path:'', redirectTo:'employees', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
