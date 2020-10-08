import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { candidatos } from '../../models/candidatos';
import { CandidatosService } from '../../services/candidatos.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  registerForm: FormGroup;
  candidato = candidatos;
  constructor(private router: Router, private CandidatosService: CandidatosService, private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {
    this.Validar();
  }

  Validar() {
    this.registerForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
      telefone: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
      urlLinkedin: ['', [Validators.maxLength(500)]],
      usuarioGithub: ['', [Validators.maxLength(150)]],
    });
  }

  Salvar() {
    this.CandidatosService.Cadastrar(this.registerForm.value).subscribe(
      (res) => {
        this.toastr.success('Cadastrado com Sucesso!');
        this.router.navigate(['/candidatos']);
      }, error => {
        this.toastr.error(`Erro ao Cadastrar: ${error.message}`);
      }
    )
  }


}
