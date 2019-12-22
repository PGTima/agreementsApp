import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientEditComponent } from 'src/app/client-edit/client-edit.component';
import { ClientListComponent } from 'src/app/client-list/client-list.component';
import { Client } from 'src/app/interfaces/interfaces';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-agr-edit',
  templateUrl: './agr-edit.component.html',
  styleUrls: ['./agr-edit.component.css']
})
export class AgrEditComponent implements OnInit {
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  clJson: JSON;
  client: Client;
  fio: String = '';
  dateBornx: Date;
  series: String = '';
  nomer: String = '';
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  public openDialog() {
    if (this.client != null || this.client.clientPassportSeries !== 'undefined') {
      const dialogRef = this.dialog.open(ClientEditComponent, { data: this.client });
      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
      });
    }
  }
  public openDialog1() {
    const dialogRef = this.dialog.open(ClientListComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (localStorage.getItem('client') != null) {
        this.client = JSON.parse(localStorage.getItem('client'));
        this.fio = this.client.surname + ' ' + this.client.name + ' ' + this.client.patronymic;
        this.dateBornx = new Date(Date.parse(this.client.dateBorn.toString()));
        this.series = this.client.clientPassportSeries;
        this.nomer = this.client.clientPassportNumber;
      }
    });
  }
}
