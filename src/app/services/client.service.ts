import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ClientModel } from '../models/client.model';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) {}

  getClients(): Observable<ClientModel[]>{
    return this.httpClient.get<ClientModel[]>('http://localhost:8090/cliente').pipe(map(res => res));
  }

  createCliente(cliente: ClientModel): Observable<ClientModel> {
    return this.httpClient.post<ClientModel>('http://localhost:8090/cliente', cliente);
  }

  updateCliente(cliente: ClientModel): Observable<ClientModel> {
    const url = `http://localhost:8090/cliente${cliente.id}`;
    return this.httpClient.put<ClientModel>(url, cliente);
  }
  getClienteById(id: number): Observable<ClientModel> {
    const url = `http://localhost:8090/cliente${id}`;
    return this.httpClient.get<ClientModel>(url);
  }

  deleteCliente(id: number): Observable<any> {
    const url = `http://localhost:8090/cliente/${id}`;
    return this.httpClient.delete(url);
  }

}
