import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountriyPageComponent } from './pages/by-countriy-page/by-countriy-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountriyPageComponent } from './pages/countriy-page/countriy-page.component';

const routes: Routes = [{
  path: 'by-capital',
  component:ByCapitalPageComponent
},{
  path:'by-country',
  component:ByCountriyPageComponent
},{
  path:'by-region',
  component:ByRegionPageComponent
},{
  path:'by/:id',
  component:CountriyPageComponent
},{
  path:'**',
  redirectTo:'by-capital'
}]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class CountriesRoutingModule { }
