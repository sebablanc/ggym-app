import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ClientModel } from 'src/app/models/clientModel';
import { ClientResponseModel } from 'src/app/models/clientResponseModel';
import { HttpResponseModel } from 'src/app/models/httpResponseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private SAVE_URL = '/client/save';
  private DELETE_URL = '/client/delete'
  private GET_BY_ID_URL = '/client/get_one_client';
  private GET_ALL_URL = '/client/get_all';

  private clientes$ = new Subject<ClientModel[]>();

  private clienteWorkingWith$ = new Subject<ClientModel>();

  constructor(private http: HttpClient) { }

  save(client: ClientModel) {
    return this.http.post<HttpResponseModel>(environment.baseUrl + this.SAVE_URL, client);
  }

  delete(id: number) {
    return this.http.delete<ClientResponseModel>(environment.baseUrl + this.DELETE_URL + '?id=' + id);
  }

  getById(id: string) {
    return this.http.get<ClientResponseModel>(environment.baseUrl + this.GET_BY_ID_URL + '?id=' + id);
  }

  getAll() {
    return this.http.get<ClientResponseModel>(environment.baseUrl + this.GET_ALL_URL);
  }

  refreshClienteList() {
    this.getAll().subscribe(data => {
      this.clientes$.next(data.clients);
    });
  }

  getClientes$(): Observable<ClientModel[]> {
    return this.clientes$.asObservable();
  }

  setClienteWorkingWith(cliente: ClientModel) {
    this.clienteWorkingWith$.next(cliente);
  }

  getClienteWorkingWith$(): Observable<ClientModel> {
    return this.clienteWorkingWith$.asObservable();
  }
}
