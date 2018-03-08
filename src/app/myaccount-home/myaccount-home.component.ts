import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { GlobalService } from '../../services/global.service';
import { LocalStorage } from '../../services/local.storage';

@Component({
  selector: 'myaccount-home',
  templateUrl: './myaccount-home.component.html'
})

export class MyaccountHomeComponent implements OnInit {
  title = '我的账户';
  changeLog: string[] = [];

  constructor(
    private titleService: Title,
    private globalService: GlobalService,
    private localStorage: LocalStorage
  ) { 
    this.localStorage.set("activeMenu", '4');
    this.globalService.activeMenu = '4';
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);    
  }

}