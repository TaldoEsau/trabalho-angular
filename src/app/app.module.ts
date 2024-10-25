import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HardwareProductsComponent } from './hardware-products/hardware-products.component';
import { HardwareDetailsComponent } from './hardware-details/hardware-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HardwareProductsComponent,
    HardwareDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
