import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddHospitalComponent } from './add-hospital/add-hospital.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';

const routes: Routes = [
  {path:'', component:LoginAdminComponent},
  { path: 'addHospital', component: AddHospitalComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
