import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientService } from 'src/app/Services/client.service';
import { Client } from '../interfaces/interfaces';
import { Observable, Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit, OnDestroy {
  client: Client;
  client$: Observable<Client>;
  aSub: Subscription;
  form: FormGroup;
  constructor(private matDialogRef: MatDialogRef<ClientsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clientService: ClientService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.form = new FormGroup({
      surname: new FormControl(null, [
        Validators.required
      ]),
      name: new FormControl(null, [
        Validators.required
      ]),
      patronymic: new FormControl(null, [
        Validators.required
      ]),
      dateBorn: new FormControl(null, [
        Validators.required
      ]),
      clientPassportSeries: new FormControl(null, [
        Validators.required, Validators.maxLength(4),
        Validators.minLength(4)
      ]),
      clientPassportNumber: new FormControl(null, [
        Validators.required, Validators.maxLength(6),
        Validators.minLength(6)
      ]),
    });
  }

  public onSubmit() {
    this.form.disable();
    console.log(this.form.value);
    this.client$ = this.clientService.addClient(this.form.value);
    this.client$.subscribe((data =>
      this.client = data),
      error => this._snackBar.open('Ошибка в получении данных с сервера', 'Выйти', { duration: 5000 }),
      () => {
        this._snackBar.open('Клиент добавлен успешно', 'Выйти', { duration: 5000 }),
          this.matDialogRef.close();
      }
    );
    this.matDialogRef.close();
  }
  public close() {
    this.matDialogRef.close();
  }
  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }
}
