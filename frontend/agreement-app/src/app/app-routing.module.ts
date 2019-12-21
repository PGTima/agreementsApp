import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgreementsComponent } from 'src/app/agreements/agreements.component';
import { AgrEditComponent } from 'src/app/agr-edit/agr-edit.component';


const routes: Routes = [
  { path: 'agreements', component: AgreementsComponent },
  { path: '', redirectTo: 'agreements', pathMatch: 'full' },
  { path: 'createAgreeement', component: AgrEditComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
