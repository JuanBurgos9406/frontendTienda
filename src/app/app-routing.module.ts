import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClienteListComponent} from "./cliente-list/cliente-list.component";
import {CreateClienteComponent} from "./create-cliente/createcliente.component";
import {UpdateClienteComponent} from "./update-cliente/update-cliente.component";

const routes: Routes = [
  { path: 'clientes', component: ClienteListComponent },
  { path: 'create-cliente', component: CreateClienteComponent },
  { path: 'update-cliente/:id', component: UpdateClienteComponent },
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
