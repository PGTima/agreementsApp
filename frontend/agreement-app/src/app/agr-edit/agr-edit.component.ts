import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientEditComponent } from 'src/app/client-edit/client-edit.component';
import { ClientListComponent } from 'src/app/client-list/client-list.component';
import {Client, Agreements, State, TypeDrawelling} from 'src/app/interfaces/interfaces';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { AgreementsService } from 'src/app/Services/agreement.sevice';
import { Observable, Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdressService } from 'src/app/Services/adress.service';
import * as moment from 'moment';
import {error} from "util";
import {catchError, map, tap} from "rxjs/operators";

@Component({
  selector: 'app-agr-edit',
  templateUrl: './agr-edit.component.html',
  styleUrls: ['./agr-edit.component.css']
})
export class AgrEditComponent implements OnInit, OnDestroy {
  agreement_id: Number;
  client: Client;
  aSub: Subscription;
  fio: String = '';
  dateBornx: Date;
  series: String = '';
  nomer: String = '';
  forms: FormGroup;
  checkBool: Boolean;
  agreement: Agreements;
  agreements$: Observable<Agreements>;
  checkAgrNumber$: Observable<Boolean>;
  states: State[];
  state$: Observable<State[]>;
  typeDrawelling: TypeDrawelling[];
  selectedState: number;
  DateFrom: Date = new Date();
  DateFromMax: Date;
  DateTo: Date = new Date();
  DateToMax: Date = new Date();

  constructor(public dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute,
              private agreementsService: AgreementsService,
              private adressService: AdressService,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.typeDrawelling = [
      {id: 1, name: 'Квартира'},
      {id: 2, name: 'Дом'},
      {id: 3, name: 'Комната'}
    ];
    this.checkBool = false;
    this.forms = new FormGroup({
      srachSumm: new FormControl('', [
        Validators.required
      ]),
      dateRasheta: new FormControl(null, [
        Validators.required
      ]),
      dateTo: new FormControl('', [
        Validators.required
      ]),
      dateFrom: new FormControl('', [
        Validators.required
      ]),
      prize: new FormControl(null, [
        Validators.required
      ]),
      dateComplet: new FormControl(null, [
        Validators.required
      ]),
      comment: new FormControl(null),
      agreementNumber: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
      ], this.uniqAgrNumberValidator.bind(this)),
      square: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[\\d]+(\\.[\\d])$')
      ]),
      yearPostroiki: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9][0-9][0-9][0-9]'),
        this.yearValidator
      ]),
      nameSurnamePatronymic: new FormControl(null, [
        Validators.required
      ]),
      dateBorn: new FormControl(null, [
        Validators.required
      ]),
      clientPassportSeries: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
      ]),
      clientPassportNumber: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
      ]),
      indexA: new FormControl(null),
      punkt: new FormControl(null, [
        Validators.required
      ]),
      home: new FormControl(null),
      respublika: new FormControl(null, [
        Validators.required
      ]),
      street: new FormControl(null, [
        Validators.required
      ]),
      korpus: new FormControl(null),
      distrikt: new FormControl(null),
      build: new FormControl(null),
      kvartira: new FormControl(null)
    });
    // получим agreement_id  если мы выбрали открытие договора
    this.route.queryParams.subscribe((params: Params) => {
      this.agreement_id = params['agreementId'];
    });
    if (this.agreement_id !== null && this.agreement_id !== undefined) {
      this.agreements$ = this.agreementsService.getAgreementById(this.agreement_id);
      this.checkBool = true;
      this.agreements$.subscribe((data =>
          this.agreement = data),
        (error) => (this.checkBool = false,
          this._snackBar.open('Ошибка в получении данных с сервера', 'Выйти', {duration: 5000})),
        () => {
          this.forms.controls.srachSumm.setValue(this.agreement.srachSumm);
          // @ts-ignore
          this.forms.controls.dateRasheta.setValue(moment(this.agreement.dateRasheta).format('L'));
          // @ts-ignore
          this.forms.controls.dateFrom.setValue((new Date(this.agreement.dateFrom)).toISOString());
          console.log(this.agreement.dateFrom);
          console.log(this.DateFrom);
          if (this.agreement.dateFrom == null || this.agreement.dateFrom === undefined) {
            // @ts-ignore
            this.forms.controls.dateFrom.setValue((this.DateFrom).toISOString());
          } else {
            // @ts-ignore
            this.DateFrom = new Date(this.agreement.dateFrom);
          }
          // @ts-ignore
          this.forms.controls.dateTo.setValue((new Date(this.agreement.dateTo)).toISOString());
          // @ts-ignore
          if (this.agreement.dateTo == null || this.agreement.dateTo === undefined) {
           this.DateTo = new Date(this.DateFrom.setDate(this.DateFrom.getDate() + 1));
           this.forms.controls.dateTo.setValue((new Date(this.DateTo)).toISOString());
          }
          this.forms.controls.prize.setValue(this.agreement.prize);
          // @ts-ignore
          this.forms.controls.dateComplet.setValue(moment(this.agreement.dateComplet).format('L'));
          this.forms.controls.comment.setValue(this.agreement.comment);
          this.forms.controls.agreementNumber.setValue(this.agreement.agreementNumber);
          this.forms.controls.square.setValue(this.agreement.adressId.dwellingA.squareDrawelling);
          // @ts-ignore
          this.forms.controls.yearPostroiki.setValue(moment(this.agreement.adressId.dwellingA.dateDrawelling).format('YYYY'));
          // tslint:disable-next-line:max-line-length
          this.forms.controls.nameSurnamePatronymic.setValue(this.agreement.clientId.name + ' ' + this.agreement.clientId.surname + ' ' + this.agreement.clientId.patronymic);
          // @ts-ignore
          this.forms.controls.dateBorn.setValue((new Date(this.agreement.clientId.dateBorn)).toISOString());
          this.forms.controls.clientPassportSeries.setValue(this.agreement.clientId.clientPassportSeries);
          this.forms.controls.clientPassportNumber.setValue(this.agreement.clientId.clientPassportNumber);
          this.forms.controls.indexA.setValue(this.agreement.adressId.indexA);
          this.forms.controls.punkt.setValue(this.agreement.adressId.punkt);
          this.forms.controls.home.setValue(this.agreement.adressId.dwellingA.home);
          this.forms.controls.punkt.setValue(this.agreement.adressId.punkt);
          this.forms.controls.respublika.setValue(this.agreement.adressId.edge);
          this.forms.controls.street.setValue(this.agreement.adressId.street);
          this.forms.controls.korpus.setValue(this.agreement.adressId.korpus);
          this.forms.controls.distrikt.setValue(this.agreement.adressId.district);
          this.forms.controls.build.setValue(this.agreement.adressId.buld);
          this.forms.controls.kvartira.setValue(this.agreement.adressId.dwellingA.room);
        }
      );
    } else {
      this.DateTo = new Date(this.DateTo.setDate(this.DateFrom.getDate() + 1));
      this.forms.controls.dateFrom.setValue(this.DateFrom.toISOString());
      console.log(this.DateFrom.toISOString());
      this.forms.controls.dateTo.setValue(this.DateTo.toISOString());
      this.DateFromMax = this.DateTo;
      this.DateToMax.setFullYear((this.DateFromMax).getFullYear() + 1, (this.DateFromMax).getMonth(), (this.DateFromMax).getDate());
    }
    // подгрузим страну
    this.state$ = this.adressService.getState();
    this.checkBool = true;
    this.state$.subscribe((data =>
        this.states = data),
      error => (this.checkBool = false,
        this._snackBar.open('Ошибка в получении данных с сервера', 'Выйти', {duration: 5000})),
      () => {
        this.checkBool = false;
        this.selectedState = this.agreement.adressId.stateA.id;
      }
    );
    // отслеживаем изменение дат договора
    this.forms.get('dateFrom').valueChanges.subscribe(c => {
      this.DateToMax.setFullYear((new Date(c)).getFullYear() + 1, (new Date(c)).getMonth(), (new Date(c)).getDate());
      this.DateTo = this.DateFrom;
      this.DateTo.setDate((new Date(c)).getDate() + 1);
    });
    this.forms.get('dateTo').valueChanges.subscribe(c => {
      this.DateFromMax = c;
    });
  }

 public openDialog() {
    if (this.client != null || this.client.clientPassportSeries !== undefined) {
      const dialogRef = this.dialog.open(ClientEditComponent, {data: this.client});
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
    this.forms.disable();
    // подготовим объект для создания нового договора
    this.agreement.adressId.street = this.forms.controls.street.value;
    this.agreement.adressId.stateA.id = this.selectedState;
    this.agreement.adressId.dwellingA.room = null;
    this.agreement.adressId.dwellingA.apartment = null;
    this.agreement.adressId.dwellingA.home = this.forms.controls.home.value;
    this.agreement.adressId.dwellingA.dateDrawelling = (new Date(this.forms.controls.yearPostroiki.value)).toDateString();
    this.agreement.adressId.dwellingA.squareDrawelling = this.forms.controls.square.value;
    this.agreement.adressId.korpus = this.forms.controls.korpus.value;
    this.agreement.adressId.district = this.forms.controls.distrikt.value;
    this.agreement.adressId.indexA = this.forms.controls.indexA.value;
    this.agreement.adressId.buld = this.forms.controls.build.value;
    this.agreement.adressId.edge = this.forms.controls.respublika.value;
    this.agreement.adressId.punkt = this.forms.controls.punkt.value;
    //
    this.agreement.clientId.name = (this.forms.controls.nameSurnamePatronymic.value).split(' ')[0];
    this.agreement.clientId.surname = (this.forms.controls.nameSurnamePatronymic.value).split(' ')[1];
    this.agreement.clientId.patronymic = (this.forms.controls.nameSurnamePatronymic.value).split(' ')[2];
    this.agreement.clientId.dateBorn = this.forms.controls.dateBorn.value;
    this.agreement.clientId.clientPassportSeries = this.forms.controls.clientPassportSeries.value;
    this.agreement.clientId.clientPassportNumber = this.forms.controls.clientPassportNumber.value;
    //
    this.agreement.agreementNumber = this.forms.controls.agreementNumber.value;
    this.agreement.comment = this.forms.controls.comment.value;
    this.agreement.dateComplet = this.forms.controls.dateComplet.value;
    this.agreement.dateFrom = this.forms.controls.dateFrom.value;
    this.agreement.dateTo = this.forms.controls.dateTo.value;
    this.agreement.dateRasheta = this.forms.controls.dateRasheta.value;
    this.agreement.prize = this.forms.controls.prize.value;
    this.agreement.srachSumm = this.forms.controls.srachSumm.value;
    this.agreement.seriesNomer = this.forms.controls.clientPassportSeries.value + ' ' + this.forms.controls.clientPassportNumber.value;
    this.agreements$ = this.agreementsService.addAgreement(this.agreement);
    console.log(JSON.stringify(this.agreement));
    this.agreements$.subscribe((data => this.agreement = data),
      () => this._snackBar.open('Ошибка в получении данных с сервера', 'Выйти', {duration: 5000}),
      () => this._snackBar.open('Договор успешно добавлен!!!', 'Выйти', {duration: 5000})
    );
  }
  onListAgr() {
    this.router.navigate(['/agreements']);
  }
  yearValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value > (new Date()).getFullYear()) {
      return {'yearValidator': true};
    }
    return null;
  }
  uniqAgrNumberValidator(ctrl: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.agreementsService.getfindByAgreementNumber(ctrl.value).pipe(
      map(isTaken => (isTaken && this.agreement.agreementNumber !== ctrl.value ? { uniqueAlterEgo: true } : null)),
      catchError(() => null)
    );
  }
}
