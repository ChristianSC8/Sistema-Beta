import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { ClientComponent } from './client/client.component';
import { ModelsModule } from '../models/models.module';
import { ServicesModule } from '../services/services.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StartComponent,
    ProductComponent,
    CategoryComponent,
    ClientComponent
  ],
  imports: [
    CommonModule,
    ModelsModule,
    ServicesModule,
    ReactiveFormsModule
  ],
  exports:[
    StartComponent,
    ProductComponent,
    CategoryComponent,
    ClientComponent
  ]
})
export class MainContentModule { }
