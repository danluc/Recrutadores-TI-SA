import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AtualizarComponent } from './candidatos/atualizar/atualizar.component';
import { ListarComponent } from './candidatos/listar/listar.component';
import { CadastrarComponent } from './candidatos/cadastrar/cadastrar.component';


@NgModule({
  declarations: [
    AppComponent,
    AtualizarComponent,
    ListarComponent,
    CadastrarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'candidatos', component: ListarComponent },
      { path: 'candidatos/cadastrar', component: CadastrarComponent },
      { path: 'candidatos/atualizar/:id', component: AtualizarComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
