import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientEditComponent } from 'src/app/client-edit/client-edit.component';
import { ClientListComponent } from 'src/app/client-list/client-list.component';
import { Client, Agreements } from 'src/app/interfaces/interfaces';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { AgreementsService } from 'src/app/Services/agreement.sevice';
import { Observable, Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-agr-edit',
  templateUrl: './agr-edit.component.html',
  styleUrls: ['./agr-edit.component.css']
})
export class AgrEditComponent implements OnInit, OnDestroy {
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  clJson: JSON;
  agreement_id: Number;
  client: Client;
  aSub: Subscription;
  fio: String = '';
  dateBornx: Date;
  series: String = '';
  nomer: String = '';
  forms: FormGroup;
  agreement: Agreements;
  agreements$: Observable<Agreements>;
  constructor(public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private agreementsService: AgreementsService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.forms = new FormGroup({
      srachSumm: new FormControl('', [
        Validators.required
      ]),
      dateRasheta: new FormControl(null, [
        Validators.required
      ]),
      dateTo: new FormControl(null, [
        Validators.required
      ]),
      dateFrom: new FormControl(null, [
        Validators.required
      ]),
      prize: new FormControl(null, [
        Validators.required
      ]),
      dateComplet: new FormControl(null, [
        Validators.required
      ]),
      comment: new FormControl(null, [
        Validators.required
      ]),
      agreementNumber: new FormControl(null, [
        Validators.required
      ]),
      square: new FormControl(null, [
        Validators.required
      ]),
      yearPostroiki: new FormControl(null, [
        Validators.required
      ]),
      nameSurnamePatronymic: new FormControl(null, [
        Validators.required
      ]),
      dateBorn: new FormControl(null, [
        Validators.required
      ]),
      clientPassportSeries: new FormControl(null, [
        Validators.required
      ]),
      clientPassportNumber: new FormControl(null, [
        Validators.required
      ]),
      indexA: new FormControl(null, [
        Validators.required
      ]),
      punkt: new FormControl(null, [
        Validators.required
      ]),
      home: new FormControl(null, [
        Validators.required
      ]),
      respublika: new FormControl(null, [
        Validators.required
      ]),
      street: new FormControl(null, [
        Validators.required
      ]),
      korpus: new FormControl(null, [
        Validators.required
      ]),
      distrikt: new FormControl(null, [
        Validators.required
      ]),
      build: new FormControl(null, [
        Validators.required
      ]),
      kvartira: new FormControl(null, [
        Validators.required
      ])
    });
    // получим agreement_id  если мы выбрали открытие договора
    this.route.queryParams.subscribe((params: Params) => {
      this.agreement_id = params['agreementId'];
    });
    if (this.agreement_id !== null) {
      this.agreements$ = this.agreementsService.getAgreementById(this.agreement_id);
      this.agreements$.subscribe((data =>
        this.agreement = data),
        error => this._snackBar.open('Ошибка в получении данных с сервера', 'Выйти', { duration: 5000 }),
        () => {
          console.log(this.agreement.srachSumm); // this.forms.controls.srachSumm.setValue(this.agreement.srachSumm);
        }
      );
    }
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
  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }
  onSubmit() {
  }

}
