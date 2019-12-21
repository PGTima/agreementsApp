import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<ClientEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

  }
  public close() {
    this.matDialogRef.close();
  }
  public save() {
    this.matDialogRef.close();
  }

}
