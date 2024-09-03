import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'administracion';
  dataSource: any[] = [
    { id: 1, name: 'Transferencia',status:'Fallido',mensaje:'conexión fallida' },
    { id: 2, name: 'Venta', status:'Exitoso',mensaje:'' },
    { id: 3, name: 'Transferencia', status:'Exitoso',mensaje:'' }
  ];
}
