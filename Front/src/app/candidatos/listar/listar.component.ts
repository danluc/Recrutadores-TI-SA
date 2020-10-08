import { Component, OnInit } from '@angular/core';
import { candidatos } from '../../models/candidatos';
import { CandidatosService } from '../../services/candidatos.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  Candidatos: candidatos[];
  

  constructor(private CandidatosService: CandidatosService,) { }

  ngOnInit() {
    this.BuscaCandidatos();
  }

  BuscaCandidatos() {
    this.CandidatosService.BuscarTodos().subscribe(
      (res: candidatos[]) => {
        this.Candidatos = res;
      },
      error => {
        console.log(error)
      }
    );
  }

}
