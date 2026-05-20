import { Location } from '@angular/common';
import { Component, inject, input } from '@angular/core';


@Component({
  selector: 'app-non-found',
  imports: [],
  templateUrl: './non-found.component.html',
})
export class NonFoundComponent {

  message = input<string>('');

  // Inyectamos el servicio Location para poder 
  // navegar hacia atrás en caso de que el usuario 
  // quiera volver a la página anterior
  location = inject(Location);

  goBack(){
    this.location.back();
  }


}
