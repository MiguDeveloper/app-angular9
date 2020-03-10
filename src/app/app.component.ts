import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-angular9';

  // Metodo del sweer alert
  verSweetalert(){
    Swal.fire({
      allowOutsideClick: false,
      icon: 'success',
      title: 'Configuracion correcta',
      text: 'Excelente procediste con todo bien configurado',
    })
  }
}


