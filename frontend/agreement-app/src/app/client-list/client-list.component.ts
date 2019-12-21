import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ClientsComponent } from 'src/app/clients-add/clients.component';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(public dialog: MatDialog, private matDialogRef: MatDialogRef<ClientListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  public close() {
    this.matDialogRef.close();
  }
  public addUser() {
    this.dialog.open(ClientsComponent, { data: { name: 'angular lessons' } });
  }
  public changeUser() {
    this.matDialogRef.close();
  }
  public findUser() {
    this.matDialogRef.close();
  }
}
