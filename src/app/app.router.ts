import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageHomeComponent } from './home/page-home.component';
import { MyaccountHomeComponent } from './myaccount-home/myaccount-home.component';
import { BankBillListComponent } from './bank-bill-list/bank-bill-list.component';
import { DiscoverComponent } from './discover/discover.component';
import { DlComponent } from './login/dl.component';

const routes: Routes = [
  { path: '', redirectTo: '/main/home', pathMatch: 'full' },
  {
    path: 'main',
    component: PageHomeComponent,
    children: [{
      path: 'home',
      component: HomeComponent
    },{
      path: 'bankBillList',
      component: BankBillListComponent
    },{
      path: 'discover',
      component: DiscoverComponent
    },{
      path: 'myaccountHome',
      component: MyaccountHomeComponent
    }]
  },
  { path: 'dl', component: DlComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouter {}