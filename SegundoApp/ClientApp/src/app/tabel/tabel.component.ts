import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html'
})

export class TabelComponent {
  //public forecasts: WeatherForecast[];
  public trabalhadores: Array<Trabalhador>;
  public listaFiltrada: Array<Trabalhador>;
  public filtro: number;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    let exemplo = 12;

    http.get<Array<Trabalhador>>(baseUrl + 'api/Trabalhadores').subscribe(result => {
      this.trabalhadores = result;
      this.mudarFiltro()
    }, error => console.error(error));
  }

  mudarFiltro() {
    if (this.filtro == 0) {
      this.listaFiltrada = this.trabalhadores;
      return;
    }
    this.listaFiltrada = this.trabalhadores.filter(t => t.status == (this.filtro == 1))
  }
}

interface Trabalhador {
  nome: string;
  status: boolean;
}
