import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    StartComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StartComponent,
    ProductsComponent
  ]
})
export class MainContentModule { }
