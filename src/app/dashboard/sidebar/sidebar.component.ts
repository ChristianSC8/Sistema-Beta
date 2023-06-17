import { Component, ElementRef, ViewChild, HostBinding } from '@angular/core';
import { SidebarService } from 'src/app/shared/sidebar.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService.sidebarToggle.subscribe(() => {
      this.toggleSidebar();
    });
  }

  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('searchInput') searchInput!: ElementRef;
  @ViewChild('title') title!: ElementRef;
  @ViewChild('line') line!: ElementRef;
  @ViewChild('textLogo') textLogo!: ElementRef;
  @ViewChild('cAtitle') cAtitle!: ElementRef;
  @ViewChild('cAline') cAline!: ElementRef;
  @ViewChild('linkText') linkText!: ElementRef;
  @HostBinding('class.text-link') isTextLinkVisible = false;
  @HostBinding('class.accout-text-link') isAccountLinkTextVisible = false;

  toggleSidebar(): void {

    // cerrar sidebar y abrir
    this.sidebar.nativeElement.classList.toggle('close');

    // ocultar placeholder del imput
    if (this.searchInput.nativeElement.placeholder === '') {
      this.searchInput.nativeElement.placeholder = 'Buscar';
    } else {
      this.searchInput.nativeElement.placeholder = '';
    }
    // remeve el pafing del input buscador
    this.searchInput.nativeElement.classList.toggle('remove-padding');

    // coulta el titulo de navegacion y muestra depende a la funicon
    this.title.nativeElement.classList.toggle('title-close');
    this.line.nativeElement.classList.toggle('text-line');

    // Oculata y nuestra el logo
    this.textLogo.nativeElement.classList.toggle('close-logo')
    //ocultar el titulo de navegacio accoun 
    this.cAtitle.nativeElement.classList.toggle('account-close');
    this.cAline.nativeElement.classList.toggle('close-line');
    //esconder los textos del menu de navegacion
    this.isTextLinkVisible = !this.isTextLinkVisible;
    //esconder los textos del accot 
    this.isAccountLinkTextVisible = !this.isAccountLinkTextVisible;

    
  }

  stopClickPropagation(event: Event): void {
    event.stopPropagation();
  }
}
