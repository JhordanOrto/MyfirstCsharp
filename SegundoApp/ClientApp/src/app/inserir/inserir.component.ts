import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-inserir',
  templateUrl: './inserir.component.html'
})

export class InserirComponent {
    trabalhador : Trabalhador = new Trabalhador();

    constructor(public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) { 
      
    }

    inserir(){
        //this.trabalhador.nome = document.getElementById("entrada").value;
        console.log("entrei " + this.trabalhador.nome);
        this.trabalhador.status = true;
        this.trabalhador.nome = this.trabalhador.nome.trim();
       
        if(!(this.trabalhador.nome)){
          console.log("campo vazio");
          return;
        }/*else if(this.trabalhador.nome = " "){
          console.log("campo vazio2");
          return;
        }*/
        this.http.post(this.baseUrl + 'api/Trabalhadores',this.trabalhador).subscribe(result => {
          this.trabalhador.nome = "";
            console.log("efetuado com sucesso");
        }, error => console.error(error));
    }
  }

  class Trabalhador {
    nome: string;
    status: boolean;
  }