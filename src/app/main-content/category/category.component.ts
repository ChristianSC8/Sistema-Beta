import { Component, ElementRef, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CategoryModel } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  @ViewChild('open') openBtn!: ElementRef;
  @ViewChild('container') container!: ElementRef;
  @ViewChild('close') closeBtn!: ElementRef;
  @ViewChild('modal') modal!: ElementRef;
  @ViewChild('cancel') cancel!: ElementRef;

  openModal() {
    this.container.nativeElement.classList.add('active-filter');
    this.modal.nativeElement.classList.add('active-modal');
  }

  closeModal() {
    this.container.nativeElement.classList.remove('active-filter');
    this.modal.nativeElement.classList.remove('active-modal');
    this.cancel.nativeElement.classList.remove('active-modal');
  }


// creuds ------------------------------------------------
  
listCategory: CategoryModel [] = [];
formCategory: FormGroup = new FormGroup({});
opUpdate: boolean = false;

constructor(private categoryService: CategoryService){
    
}
ngOnInit(): void {
  this.list(); 
  this.formCategory = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    estado: new FormControl(true),

  })
}
list(){
  this.categoryService.getcategory().subscribe(resp =>{
    
    if(resp){
      this.listCategory = resp;
    }
  })
}
save() {
  this.categoryService.createcategory(this.formCategory.value).subscribe(resp => {
    if (resp) {
      this.list();
      this.formCategory.reset();
    }
  });
}
update() {
  this.categoryService.updatecategory(this.formCategory.value).subscribe(resp => {
    if (resp) {
      this.list();
      this.formCategory.reset();
    }
  });
}
delete(id: number) {
  this.categoryService.deletecategory(id).subscribe(
    () => {
      this.list(); 
    },
    (error: any) => {
      console.error(error);
    }
  );
}
getEstadoLabel(estado: boolean): string {
  return estado ? 'activo' : 'inactivo';
}
selectItem(category: CategoryModel) {
  this.opUpdate = true;
  this.formCategory.patchValue({
    id: category.id,
    nombre: category.nombre,
    descripcion: category.descripcion,
    estado: category.estado,

  });

  this.openModal(); 
}
}
