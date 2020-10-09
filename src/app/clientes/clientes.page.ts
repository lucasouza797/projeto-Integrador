import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  lista : Cliente[] = [];
  constructor(private ClienteServ : ClienteService) { }

  ngOnInit() {
    this.ClienteServ.listaDeClientes().subscribe(Response=>{
console.log(Response);
   this.lista = Response;
   console.log(this.lista);
},err=>{
      
  })
    
  }
  

}
