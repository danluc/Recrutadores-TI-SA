import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { GitHub } from "../models/github";

@Injectable({
  providedIn: "root"
})

export class GithubService {
  baseURL = "https://api.github.com/users/";

  constructor(private http: HttpClient) {}

  Buscar(user: string): Observable<GitHub[]> {
    return this.http.get<GitHub[]>(`${this.baseURL}${user}/repos`);
  }
}