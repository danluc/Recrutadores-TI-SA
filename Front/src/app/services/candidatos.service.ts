import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { candidatos } from "../models/candidatos";

@Injectable({
  providedIn: "root"
})

export class CandidatosService {
  baseURL = "https://localhost:5001/api/candidatos";

  constructor(private http: HttpClient) {}

  BuscarTodos(): Observable<candidatos[]> {
    return this.http.get<candidatos[]>(`${this.baseURL}`);
  }

  Cadastrar(dados: candidatos){
    return this.http.post(this.baseURL, dados);
  }

  Atualizar(dados: candidatos) {
    return this.http.put(`${this.baseURL}/${dados.id}`, dados);
  }

  BuscarPorId(id: any): Observable<candidatos> {
    return this.http.get<candidatos>(`${this.baseURL}/${id}`);
  }

}