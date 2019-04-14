import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
  //   { path: 'home', loadChildren: './home/home.module#HomePageModule' },
   { path: 'hospital-output', loadChildren: './hospital-output/hospital-output.module#HospitalOutputPageModule' },
  { path: 'customized-search', loadChildren: './customized-search/customized-search.module#CustomizedSearchPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
