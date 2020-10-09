export class Cliente{
    cidade : string;
    cpf : string;
    email : string;
    endereço : string;
    estado :string;
    nome : string ;
    numero : string;
     telefone : string ;

     setData(objFirebase : any){
         this.cidade =  objFirebase.cidade;
         this.cpf = objFirebase.cpf;
         this.email = objFirebase.email;
         this.endereço = objFirebase.endereço;
         this.estado = objFirebase.estado;
         this.nome = objFirebase.nome;
         this.numero = objFirebase.numero;
         this.telefone = objFirebase.telefone;
     }
}