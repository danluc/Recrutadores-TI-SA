import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { candidatos } from '../../models/candidatos';
import { CandidatosService } from '../../services/candidatos.service';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {

  registerForm: FormGroup;
  candidato = new candidatos();
  constructor(private router: Router, private acRoute: ActivatedRoute,  private CandidatosService: CandidatosService, private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {
    this.Validar();
    this.BuscaCandidato();
  }

  BuscaCandidato() {
    var id = this.acRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.CandidatosService.BuscarPorId(id).subscribe(
      (res: any) => {
        this.candidato = res.dados;
      },
      error => {
        console.log(error)
      }
    );
  }

  Validar() {
    this.registerForm = this.fb.group({
      id: this.acRoute.snapshot.paramMap.get('id'),
      nome: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
      telefone: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
      urlLinkedin: ['', [Validators.maxLength(500)]],
      usuarioGithub: ['', [Validators.maxLength(150)]],
    });
  }

  Salvar() {
    this.candidato = this.registerForm.value;
    this.CandidatosService.Atualizar(this.candidato).subscribe(
      (res) => {
        this.toastr.success('Atualizado com Sucesso!');
        this.router.navigate(['/candidatos']);
      }, error => {
        console.log(error);
        this.toastr.error(`Erro ao Atualizar: ${error}`);
      }
    )
  }

}
