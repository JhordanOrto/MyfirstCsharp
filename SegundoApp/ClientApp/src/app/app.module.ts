
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TabelComponent } from './tabel/tabel.component';
import { InserirComponent } from './inserir/inserir.component';
import { EditarClienteComponents } from './editar-cliente/editar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    TabelComponent,
    InserirComponent,
    EditarClienteComponents
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'tabel', component: TabelComponent },
      { path: 'inserir', component: InserirComponent },
      { path: 'editar/:id', component: EditarClienteComponents },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }