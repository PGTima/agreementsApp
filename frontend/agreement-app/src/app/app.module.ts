import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients-add/clients.component';
import { AgreementsComponent } from './agreements/agreements.component';
import { AdressComponent } from './adress/adress.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AgrEditComponent } from './agr-edit/agr-edit.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientListComponent } from './client-list/client-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';

import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    AgreementsComponent,
    AdressComponent,
    AgrEditComponent,
    ClientEditComponent,
    ClientListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSnackBarModule,
    AppRoutingModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ClientsComponent, ClientEditComponent, ClientListComponent, AgrEditComponent]
})

export class AppModule { }
