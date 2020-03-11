import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer-test',
  templateUrl: './primer-test.component.html',
  styleUrls: ['./primer-test.component.css']
})
export class PrimerTestComponent implements OnInit {

  catalogoProductos: string[] = [];
  usuarioActivo: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  activarUsuario(): void{
    this.usuarioActivo = true;
  }

}
