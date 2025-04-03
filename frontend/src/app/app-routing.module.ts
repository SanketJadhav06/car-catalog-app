import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { BrandListComponent } from './brand-list/brand-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'brands', pathMatch: 'full' }, 
  { path: 'brands', component: BrandListComponent },
  { path: 'brands/:brandName', component: CarListComponent },
  { path: '**', redirectTo: 'brands' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
