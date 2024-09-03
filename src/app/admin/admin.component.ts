import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  data: any[] = [
    { id: 1, transaction: 'Tx001', result: 'Success', date: '2024-09-01', time: '14:30', status: 'Completed' },
    { id: 2, transaction: 'Tx002', result: 'Failure', date: '2024-09-01', time: '15:00', status: 'Pending' },
    { id: 3, transaction: 'Tx003', result: 'Success', date: '2024-09-02', time: '09:00', status: 'Completed' },
  ];

  columns: any[] = [
    { dataField: 'id', caption: 'ID', width: 70 },
    { dataField: 'transaction', caption: 'Transaction' },
    { dataField: 'result', caption: 'Result' },
    { dataField: 'date', caption: 'Date', dataType: 'date' },
    { dataField: 'time', caption: 'Time', dataType: 'date', format: 'HH:mm' },
    { dataField: 'status', caption: 'Status' }
  ];

  constructor() {}

  addNew() {
    alert('Add New button clicked');
  }

  onSendEmail(rowData: any) {
    alert(`Send email for transaction ID: ${rowData.id}`);
    // Aquí puedes agregar la lógica para enviar un correo electrónico
  }

  ngOnInit() {
  }

}
