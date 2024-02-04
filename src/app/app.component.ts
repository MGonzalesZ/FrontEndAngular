import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatosComponent } from './datos/datos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatosComponent],
  // template: `<h1>Mi primer proyecto en Angular</h1>
  //   <p>Hecho por: Mauricio Gonzales</p>`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-1';
  autor = 'Mauricio Gonzales Zubieta';
  registrado = true;
}
