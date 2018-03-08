import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { GlobalService } from '../services/global.service';
import { LocalStorage } from '../services/local.storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = '聚胜财富-普惠互联网金融服务平台';

  constructor(
    private titleService: Title,
    private globalService: GlobalService,
    private localStorage: LocalStorage
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.localStorage.setObject('pathUrl', this.globalService.pathUrl);
  }

}
