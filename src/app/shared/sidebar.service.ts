import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  sidebarToggle: EventEmitter<void> = new EventEmitter<void>();

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  toggleASidebar: EventEmitter<void> = new EventEmitter<void>();

  sidebarTogle(){
    this.toggleASidebar.emit();
  }
}
