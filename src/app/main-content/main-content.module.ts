import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    StartComponent,
    ProductComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StartComponent,
    ProductComponent,
    CategoryComponent
  ]
})
export class MainContentModule { }
