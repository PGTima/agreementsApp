import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientService } from 'src/app/Services/client.service';
import { Client } from '../interfaces/interfaces';
import { Observable, Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  client: Client;
  client$: Observable<Client>;
  aSub: Subscription;
  form: FormGroup;
  constructor(private matDialogRef: MatDialogRef<ClientEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clientService: ClientService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(this.data.id, [
        Validators.required
      ]),
      surname: new FormControl(this.data.surname, [
        Validators.required
      ]),
      name: new FormControl(this.data.name, [
        Validators.required
      ]),
      patronymic: new FormControl(this.data.patronymic, [
        Validators.required
      ]),
      dateBorn: new FormControl(this.data.dateBorn, [
        Validators.required
      ]),
      clientPassportSeries: new FormControl(this.data.clientPassportSeries, [
        Validators.required, Validators.maxLength(4),
        Validators.minLength(4)
      ]),
      clientPassportNumber: new FormControl(this.data.clientPassportNumber, [
        Validators.required, Validators.maxLength(6),
        Validators.minLength(6)
      ]),
    });
  }
  public close() {
    this.matDialogRef.close();
  }
  public onSubmit() {
    this.form.disable();
    this.client$ = this.clientService.editClient(this.form.value);
    this.client$.subscribe((data =>
      this.client = data),
      error => this._snackBar.open('Ошибка в получении данных с сервера', 'Выйти', { duration: 5000 }),
      () => {
        this._snackBar.open('Клиент успешно изменен', 'Выйти', { duration: 5000 }),
          this.matDialogRef.close();
      }
    );
    this.matDialogRef.close();
  }

}
