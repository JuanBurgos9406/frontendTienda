import {Component, OnInit} from '@angular/core';
import {ClienteService} from "../cliente.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Cliente} from "../Cliente";

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrl: './update-cliente.component.css'
})
export class UpdateClienteComponent implements OnInit{
  id!: number;
  cliente: Cliente = new Cliente();

    constructor(
      private clienteService: ClienteService,
      private router: Router,
      private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.clienteService.getClienteById(this.id).subscribe(data => {
        this.cliente = data;
      }, error => console.log(error));
    }
    goToClienteList() {
      this.router.navigate(['/employees']);
    }

  onSubmit() {
    console.log(this.cliente);
    this.clienteService.updateCliente(this.id, this.cliente).subscribe( data =>{
      this.goToClienteList();
    }, error => console.log(error));
  }

}
