import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndicatorDateComponent } from './indicator-date/indicator-date.component';
import { IndicatorLastComponent } from './indicator-last/indicator-last.component';
import { IndicatorValuesComponent } from './indicator-values/indicator-values.component';


const routes: Routes = [
  {
    path:'indicator-date',
    component:IndicatorDateComponent
  },
  {
    path:'indicator-last',
    component:IndicatorLastComponent
  },
  {
    path:'indicator-values',
    component:IndicatorValuesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
