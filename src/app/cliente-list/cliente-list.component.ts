import {Component, OnInit} from '@angular/core';
import { Cliente } from "../Cliente";
import {ClienteService} from "../cliente.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrl: './cliente-list.component.css'
})
export class ClienteListComponent implements OnInit{
  clientes: Cliente[] = [];

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ){
  }
  ngOnInit(): void {
    this.getClientes();
  }
  private getClientes(){
    this.clienteService.getAllClientes().subscribe(data => {
      this.clientes = data;
    });
  }

  updateCliente(id: number){
    this.router.navigate(['update-cliente', id]);
  }
  deleteCliente(id: number){
    const isConfirmed = window.confirm('esta seguro de eliminar a este cliente?');
    if (isConfirmed) {
      this.clienteService.deleteCliente(id).subscribe( data => {
        console.log(data);
        this.getClientes();
      })
    }

  }

}
