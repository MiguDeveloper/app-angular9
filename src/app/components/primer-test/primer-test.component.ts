import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../../services/usuarios.service";

@Component({
  selector: 'app-primer-test',
  templateUrl: './primer-test.component.html',
  styleUrls: ['./primer-test.component.css']
})
export class PrimerTestComponent implements OnInit {

  catalogoProductos: string[] = [];
  usuarioActivo: boolean;
  showDiv: boolean;
  usuarios: any[] = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.fn_showdiv();
    sessionStorage.setItem('persona', JSON.stringify({nombre: 'Miguel', apellido: 'Chin'}));
    this.getAllUsuarios();
  }

  activarUsuario(): void{
    this.usuarioActivo = true;
  }

  fn_showdiv(){
    setTimeout(()=>{
      this.showDiv = true;
    }, 4000);
    console.log('Se ejecuto luego de 4 seg');
    console.log(JSON.parse(sessionStorage.getItem('persona')));
  }

  getAllUsuarios(){
    this.usuariosService.getUsuarios()
      .subscribe((data: any)=>{
        this.usuarios = data;
        console.log(this.usuarios)
      });
  }

}
