import { Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

  public menuItems = routes // Rutas principales
  .map( route => route.children ?? [])  // Para obtener solo las rutas hijas dentro de la ruta principal
  .flat() // Para aplanar el arreglo de arreglos
  .filter( route => route && route.path) // Para obtener solo las rutas que tengan un path
  .filter( route => !route.path?.includes(':'))

  constructor() {
    // const dashboardRoute = routes // Rutas principales
    // .map( route => route.children ?? [])  // Para obtener solo las rutas hijas dentro de la ruta principal
    // .flat() // Para aplanar el arreglo de arreglos
    // .filter( route => route && route.path) // Para obtener solo las rutas que tengan un path
    // .filter( route => !route.path?.includes(':'))

    // console.log(dashboardRoute)
  }
}
