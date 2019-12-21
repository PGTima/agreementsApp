import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientEditComponent } from 'src/app/client-edit/client-edit.component';
import { ClientListComponent } from 'src/app/client-list/client-list.component';


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
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  public openDialog() {
    this.dialog.open(ClientEditComponent, { data: { name: 'angular lessons' } });
  }
  public openDialog1() {
    this.dialog.open(ClientListComponent, { data: { name: 'angular lessons' } });
  }
}
