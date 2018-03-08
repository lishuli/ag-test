import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRouter } from './app.router';

import { AppComponent } from './app.component';
import { PageHomeComponent } from './home/page-home.component';
import { HomeComponent } from './home/home.component';
import { MyaccountHomeComponent } from './myaccount-home/myaccount-home.component';
import { BankBillListComponent } from './bank-bill-list/bank-bill-list.component';
import { DiscoverComponent } from './discover/discover.component';
import { DlComponent } from './login/dl.component';

import { GlobalService } from '../services/global.service';
import { LocalStorage } from '../services/local.storage';
import { FilterService } from '../services/filter.service';
import { UrlfilterService } from '../services/urlfilter.service';
import { HttpService } from '../services/http.service';
import { Sha256 } from '../services/sha256';

import { Ng2DynamicDialogModule }  from 'ng2-dynamic-dialog';
import { DefaultWithHtmlDialogComponent } from './dialogs/default-with-html-dialog/default-with-html-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    HomeComponent,
    MyaccountHomeComponent,
    BankBillListComponent,
    DiscoverComponent,
    DlComponent,
    DefaultWithHtmlDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    HttpModule,
    JsonpModule,
    Ng2DynamicDialogModule
  ],
  providers: [ 
    GlobalService, 
    LocalStorage, 
    FilterService, 
    UrlfilterService,
    HttpService,
    Sha256
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
