import {Component, OnInit} from '@angular/core';
import {Cliente} from "../Cliente";
import {ClienteService} from "../cliente.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateClienteComponent implements OnInit{
  cliente: Cliente = new Cliente();
  constructor(private clienteService: ClienteService,
              private router: Router
  ) { }

  ngOnInit(): void {
  }
  saveCliente(){
    //send employee to backend
    this.clienteService.crearCliente(this.cliente).subscribe(data => {
        console.log(data);
      },
      error => console.log(error));
  }
  goToClienteList(){
    //navigate back to employee list
    this.router.navigate(['/clientes']);
  }

  onSubmit(){
    this.saveCliente();
    this.goToClienteList();
  }

}
