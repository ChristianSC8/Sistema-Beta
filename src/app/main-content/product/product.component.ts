import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
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
}
