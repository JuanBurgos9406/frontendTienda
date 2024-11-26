import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cliente} from "./Cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = 'http://localhost:8080/api/clientes';
  constructor(private httpClient: HttpClient) { }

  getAllClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${this.baseUrl}`);
  }

  crearCliente(cliente: Cliente): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, cliente);
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.baseUrl}/${id}`);
  }

  updateCliente(id: number, cliente: Cliente): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, cliente);
  }

  deleteCliente(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
