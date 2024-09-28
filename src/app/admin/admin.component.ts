import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  data: any[] = [
    { id: 1, transaction: 'Tx001', result: 'Failure', date: '2024-09-02', time: '20:23', status: 'Pending' },
    { id: 2, transaction: 'Tx002', result: 'Success', date: '2024-09-22', time: '12:57', status: 'Completed' },
    { id: 3, transaction: 'Tx003', result: 'Success', date: '2024-09-07', time: '11:19', status: 'Completed' },
    { id: 4, transaction: 'Tx004', result: 'Failure', date: '2024-09-02', time: '10:37', status: 'Success' },
    { id: 5, transaction: 'Tx005', result: 'Success', date: '2024-09-25', time: '13:33', status: 'Completed' },
    { id: 6, transaction: 'Tx006', result: 'Failure', date: '2024-09-23', time: '12:39', status: 'Success' },
    { id: 7, transaction: 'Tx007', result: 'Failure', date: '2024-09-04', time: '10:03', status: 'Success' },
    { id: 8, transaction: 'Tx008', result: 'Failure', date: '2024-09-14', time: '12:49', status: 'Failure' },
    { id: 9, transaction: 'Tx009', result: 'Failure', date: '2024-09-25', time: '05:13', status: 'Completed' },
    { id: 10, transaction: 'Tx010', result: 'Failure', date: '2024-09-17', time: '17:32', status: 'Pending' }
  ];
  

  dataProducts: any[] = [
    { id: 1,  name: 'Pierna', date: '2024-09-01', time: '14:30', status: 'Completed' },
    { id: 2,  name: 'Pork loin', date: '2024-09-01', time: '15:00', status: 'Pending' },
    { id: 3,  name: 'Belly', date: '2024-09-02', time: '09:00', status: 'Completed' },
  ];

  columns: any[] = [
    { dataField: 'id', caption: 'ID', width: 70 },
    { dataField: 'transaction', caption: 'Transaction' },
    { dataField: 'result', caption: 'Result' },
    { dataField: 'date', caption: 'Date', dataType: 'date' },
    { dataField: 'time', caption: 'Time', dataType: 'date', format: 'HH:mm' },
    { dataField: 'status', caption: 'Status' }
  ];

  columnsProducts: any[] = [
    { dataField: 'id', caption: 'ID', width: 70 },
    { dataField: 'name', caption: 'Result' },
    { dataField: 'date', caption: 'Date', dataType: 'date' },
    { dataField: 'time', caption: 'Time', dataType: 'date', format: 'HH:mm' },
    { dataField: 'status', caption: 'Status' }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  addNew() {
    alert('Add New button clicked');
  }

  onSendEmail(rowData: any) {
    alert(`Send email for transaction ID: ${rowData.id}`);
    // Aquí puedes agregar la lógica para enviar un correo electrónico
  }

  ngOnInit() {
  }

  logout() {
    // Lógica para cerrar sesión
    this.authService.logout();  // Llama al servicio de autenticación para cerrar sesión
  }

}
