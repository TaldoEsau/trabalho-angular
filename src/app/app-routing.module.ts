import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HardwareProductsComponent } from './hardware-products/hardware-products.component';
import { HardwareDetailsComponent } from './hardware-details/hardware-details.component';

const routes: Routes = [
  { path: '', component: HardwareProductsComponent },
  { path: 'detalhes/:id', component: HardwareDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
