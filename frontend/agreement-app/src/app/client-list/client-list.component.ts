import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ClientsComponent } from 'src/app/clients-add/clients.component';
import { Client } from 'src/app/interfaces/interfaces';
import { Observable, Subscription } from 'rxjs';
import { Params, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientService } from 'src/app/Services/client.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients$: Observable<Client[]>;
  clients: Client[];
  aSub: Subscription;
  clientR: Client;
  flagDisabled = true;
  dataSource;
  selection;
  name: string;
  surname: string;
  patronymic: string;
  favoriteSeason: string;
  serialJson;
  displayedColumns: string[] = ['fio', 'dateBorn', 'passport', 'client_id'];
  constructor(public dialog: MatDialog,
    private matDialogRef: MatDialogRef<ClientListComponent>,

    private router: Router,
    private clientService: ClientService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.clients$ = this.clientService.getAllClients();
    this.clients$.subscribe((data =>
      this.clients = data),
      error => this._snackBar.open('Ошибка в получении данных с сервера', 'Выйти', { duration: 5000 }),
      () => {
        this.dataSource = new MatTableDataSource<Client>(this.clients);
        this.selection = new SelectionModel<Client>(true, []);
      }
    );

  }
  public close() {
    this.matDialogRef.close();
  }
  public addUser() {
    this.dialog.open(ClientsComponent);
  }
  public changeUser() {

    this.matDialogRef.close();
  }
  public findUser(username: string,
    userSurname: string,
    userPatronymic: string) {
    this.clients$ = this.clientService.findClient(username, userSurname, userPatronymic);
    this.clients$.subscribe((data =>
      this.clients = data),
      error => this._snackBar.open('Ошибка в получении данных с сервера', 'Выйти', { duration: 5000 }),
      () => {
        this.dataSource = new MatTableDataSource<Client>(this.clients);
        this.selection = new SelectionModel<Client>(true, []);
      }
    );
  }
  checkRadio(client: any) {
    this.flagDisabled = false;
    console.log(client);
    this.clientR = client;
    this.serialJson = JSON.stringify(this.clientR);
    localStorage.setItem('client', this.serialJson);
  }
}
