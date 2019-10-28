import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { stringify } from '@angular/core/src/render3/util';

@Component({
    selector: 'app-editar-cliente',
    templateUrl: './editar-cliente.component.html'
})

export class EditarClienteComponents implements OnInit {
    trabalhador: Trabalhador = new Trabalhador();
    id: number;

    constructor(public http: HttpClient, @Inject('BASE_URL') public baseUrl: string, public route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.id = Number(params.get('id'));
            console.log(this.id);
            this.buscarTrabalhadorId();
        });
    }

    buscarTrabalhadorId() {
        this.http.get<any>(this.baseUrl + 'api/Trabalhadores/'+this.id).subscribe(result => {
            this.trabalhador = result;
            console.log("get");
        }, error => console.error(error));
    }

    editarCliente() {
        this.trabalhador.nome = this.trabalhador.nome.trim();
        console.log(this.trabalhador.nome);
        if (!(this.trabalhador.nome)) {
            console.log("campo vazio");
            return;
        }
        this.http.put(this.baseUrl + 'api/Trabalhadores', this.trabalhador).subscribe(result => {
            console.log("put");
        }, error => console.error(error));
    }
}

class Trabalhador {
    nome: string;
    status: boolean;
}