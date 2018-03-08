import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { GlobalService } from '../../services/global.service';
import { LocalStorage } from '../../services/local.storage';
import { MyaccountHomeComponent } from '../myaccount-home/myaccount-home.component';

@Component({
  selector: 'page-home',
  templateUrl: './page-home.component.html'
})

export class PageHomeComponent implements OnInit {
  title = '聚胜财富-普惠互联网金融服务平台';

  constructor(
    private titleService: Title,
    private globalService: GlobalService,
    private localStorage: LocalStorage
  ) {
    if(this.localStorage.get("activeMenu") != undefined){
      this.globalService.activeMenu = this.localStorage.get("activeMenu");
    }

    this.actived(this.globalService.activeMenu);
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

  actived(menu): void {
    this.globalService.activeMenu = menu;
    this.localStorage.set('activeMenu', menu);
  }
}