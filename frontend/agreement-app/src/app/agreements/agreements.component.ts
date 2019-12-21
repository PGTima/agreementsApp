import { Component, OnInit, OnDestroy } from '@angular/core';
import { AgreementsService } from 'src/app/Services/agreement.sevice';
import { Observable, Subscription } from 'rxjs';
import { Agreements } from 'src/app/interfaces/interfaces';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Params, Router } from '@angular/router';

@Component({
  selector: 'app-agreements',
  templateUrl: './agreements.component.html',
  styleUrls: ['./agreements.component.css']
})
export class AgreementsComponent implements OnInit, OnDestroy {
  agreements$: Observable<Agreements[]>;
  agreement: Agreements[];
  aSub: Subscription;
  flagDisabled = true;
  displayedColumns: string[] = ['agreementNumber', 'seriesNomer', 'dateFinish', 'name', 'prize', 'srokDate'];
  constructor(private agreementsService: AgreementsService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }
  dataSource;
  selection;
  favoriteSeason: string;

  ngOnInit() {
    this.agreements$ = this.agreementsService.getAllAgreements();
    this.agreements$.subscribe((data =>
      this.agreement = data),
      error => this._snackBar.open('Ошибка в получении данных с сервера', 'Выйти', { duration: 5000 }),
      () => {
        this.dataSource = new MatTableDataSource<Agreements>(this.agreement);
        this.selection = new SelectionModel<Agreements>(true, []);
      }
    );
  }

  // если выбран договор разблокируем кнопку
  checkRadio(agr: string) {
    // разблокируем кнопку
    this.flagDisabled = false;
    this.favoriteSeason = agr;
  }
  // создать договор
  createAgreement() {
    this.router.navigate(['/createAgreeement']);
  }
  // открыть договор
  openAgreement() {
    this.router.navigate(['/createAgreeement'],
      {
        queryParams: {
          agreementNumber: this.favoriteSeason
        }
      }
    );
  }
  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }
}
