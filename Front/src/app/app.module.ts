import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { AtualizarComponent } from './candidatos/atualizar/atualizar.component';
import { ListarComponent } from './candidatos/listar/listar.component';
import { CadastrarComponent } from './candidatos/cadastrar/cadastrar.component';
import { GithubComponent } from './candidatos/github/github.component';


@NgModule({
  declarations: [
    AppComponent,
    AtualizarComponent,
    ListarComponent,
    CadastrarComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
	  ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: '/candidatos', pathMatch: 'full' },
      { path: 'candidatos', component: ListarComponent },
      { path: 'candidatos/cadastrar', component: CadastrarComponent },
      { path: 'candidatos/atualizar/:id', component: AtualizarComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
