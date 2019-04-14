import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HospitalOutputPage } from './hospital-output.page';

const routes: Routes = [
  {
    path: '',
    component: HospitalOutputPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HospitalOutputPage]
})
export class HospitalOutputPageModule {}
