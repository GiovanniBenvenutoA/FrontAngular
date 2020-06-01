import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { IndicatorDateComponent } from './indicator-date/indicator-date.component';
import { IndicatorLastComponent } from './indicator-last/indicator-last.component';
import { IndicatorValuesComponent } from './indicator-values/indicator-values.component';
import { FooterComponent }  from  './footer/footercomponent';
import {MatTableModule} from '@angular/material/table';
import {MaterialModule} from './material.module';
import {TableComponent } from './indicator-last/table/table.component';
import {DatepickerComponent } from './indicator-date/datepicker/datepicker.component';
import {IndicatorLastService} from './indicator-last/indicator-last.service';
import {HttpClientModule} from '@angular/common/http'; 
import {TableValuesComponent} from './indicator-values/selector-values/table-values/table-values.component';
import {SelectorValuesComponent} from './indicator-values/selector-values/selector-values.component';
import { SelectorDateComponent } from './indicator-date/datepicker/selector-date/selector-date.component';
import { TableDateComponent } from './indicator-date/datepicker/table-date/table-date.component';

@NgModule({
  declarations: [
    AppComponent,
    RootNavComponent,
    IndicatorDateComponent,
    IndicatorLastComponent,
    IndicatorValuesComponent,
    FooterComponent,
    TableComponent,
    DatepickerComponent,
    TableValuesComponent,
    SelectorValuesComponent,
    SelectorDateComponent,
    TableDateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MaterialModule
  ],
  providers: [IndicatorLastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
