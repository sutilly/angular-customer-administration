import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersTableComponent } from './customers-table/customers-table.component';
import { CustomerInputComponent } from './customer-input/customer-input.component';
import { CustomersAdministrationComponent } from './customers-administration/customers-administration.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService} from "primeng/api";
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from "primeng/calendar";
import {SelectButtonModule} from 'primeng/selectbutton';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    CustomersTableComponent,
    CustomerInputComponent,
    CustomersAdministrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ConfirmDialogModule,
    ButtonModule,
    CalendarModule,
    SelectButtonModule,
    BrowserAnimationsModule,
    CheckboxModule
  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
