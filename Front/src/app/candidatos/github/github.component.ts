import { Component, OnInit, Input  } from '@angular/core';

import { GithubService } from '../../services/github.service';
import { GitHub } from '../../models/github';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  @Input() username : string;
  usuariogit : string = "";
  Gits: GitHub[];
  

  constructor(private GithubService: GithubService) {}

  ngOnInit() {
    setTimeout(() => {
      this.usuariogit = this.username;
      this.BuscarRepos();
    });
  }

  

  BuscarRepos() {
    this.GithubService.Buscar(this.usuariogit).subscribe(
      (res: any) => {
        this.Gits = res;
      },
      error => {
        console.log(error)
      }
    );
  }
}
