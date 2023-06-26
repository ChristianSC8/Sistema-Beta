import { Component, ElementRef, ViewChild } from '@angular/core';
import { ClientModel } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';
import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{
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
    this.formClients.reset();
  }

  //Crud- Models -------------------------------------------------

  listClients: ClientModel [] = [];
  formClients: FormGroup = new FormGroup({});
  opUpdate: boolean = false;
  
  constructor(private clientService: ClientService){
    
  }
  ngOnInit(): void {
      this.list(); 
      this.formClients = new FormGroup({
        id: new FormControl(''),
        nombres: new FormControl(''),
        apellidos: new FormControl(''),
        documento: new FormControl(''),
        sexo: new FormControl(true),
        direccion: new FormControl(''),
        telefono: new FormControl(''),
      })
  }

  list(){
    this.clientService.getClients().subscribe(resp =>{
      
      if(resp){
        this.listClients = resp;
      }
    })
  }
  save() {
    this.clientService.createCliente(this.formClients.value).subscribe(resp => {
      if (resp) {
        this.list();
        this.formClients.reset();
      }
    });
  }
  update() {
    this.clientService.updateCliente(this.formClients.value).subscribe(resp => {
      if (resp) {
        this.list();
        this.formClients.reset();
      }
    });
  }

  delete(id: number) {
    this.clientService.deleteCliente(id).subscribe(
      () => {
        this.list(); 
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  
  getSexoLabel(sexo: boolean): string {
    return sexo ? 'Masculino' : 'Femenino';
  }



  selectItem(client: ClientModel) {
    this.opUpdate = true;
    this.formClients.patchValue({
      id: client.id,
      nombres: client.nombres,
      apellidos: client.apellidos,
      documento: client.documento,
      sexo: client.sexo,
      direccion: client.direccion,
      telefono: client.telefono
    });
  
    this.openModal(); 
  }
}
