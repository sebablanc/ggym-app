import { Injectable } from '@angular/core';
import { ClientModel } from 'src/app/models/clientModel';

@Injectable({
  providedIn: 'root'
})
export class ClientSingletonService {
  private cliente: ClientModel | null = null;

  constructor() {
  }

  setClient(cliente: ClientModel) {
    this.cliente = cliente;
  }

  getCliente() {
    return this.cliente;
  }
}
