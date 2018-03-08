import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { Router, ActivatedRoute } from '@angular/router';
// import { Headers, Http } from '@angular/http';
import { GlobalService } from '../../services/global.service';
import { LocalStorage } from '../../services/local.storage';
import { FilterService } from '../../services/filter.service';
import { UrlfilterService } from '../../services/urlfilter.service';
import { HttpService } from '../../services/http.service';
import { Index } from '../../data/data';
import 'rxjs/add/operator/map';

import { Ng2DynamicDialogComponent } from 'ng2-dynamic-dialog';
import { Ng2DynamicDialogContent } from 'ng2-dynamic-dialog';
import { DefaultWithHtmlDialogComponent } from '../dialogs/default-with-html-dialog/default-with-html-dialog.component';
import { DlComponent } from '../login/dl.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  @ViewChild(DefaultWithHtmlDialogComponent) private defaultWithHtmlDialog: DefaultWithHtmlDialogComponent;
  title = '聚胜财富-普惠互联网金融服务平台';
  loginBox = true;
  showLogin = false;
  videoplay = false;
  active = 2;
  isLogin: boolean;
  user: { [propName: string]: any; }
  realInfo: string;
  newHandShow = true;
  phone: string;
  private headers = new Headers({'Content-Type': 'application/json'});
  index: Index;
  scope: Index;
  private modalDialog: Ng2DynamicDialogComponent;

  constructor(
    private titleService: Title,
    private _router: Router,
    private globalService: GlobalService,
    private localStorage: LocalStorage,
    private filterService: FilterService,
    private urlfilterService: UrlfilterService,
    private activatedRoute: ActivatedRoute
  ) {
    console.log(activatedRoute.queryParams['value']);
    globalService.activeMenu = '1';
    localStorage.set('activeMenu', globalService.activeMenu);
    filterService.isPath('main.home');
    this.isLogin = filterService.isRegister().register;
    if (this.isLogin) {
      this.user = filterService.isRegister().user.member;
      this.realInfo = this.user.realVerify == '1' ? this.user.realName : this.user.mobilephone;
    }
    if(localStorage.get("userid")){
      this.phone = localStorage.get("phone");
      this.loginBox = false;
      this.showLogin = true;
    }
    if(activatedRoute.queryParams['value'].toFrom != undefined || activatedRoute.queryParams['value'].recommCode != undefined || activatedRoute.queryParams['value'].tid != undefined || activatedRoute.queryParams['value'].utm_kw != undefined || activatedRoute.queryParams['value'].utm_campaign != undefined || activatedRoute.queryParams['value'].utm_content != undefined || activatedRoute.queryParams['value'].utm_source != undefined ){
      localStorage.set("webFormPath", activatedRoute.queryParams['value']);
    }

    // http.post(urlfilterService.getUrl('网站公告'), JSON.stringify({ 'proId': '14', 'limit': '3'} ), {headers: this.headers})
    //   .map(res => res.json())
    //   .subscribe(
    //     data => {
    //       this.index = data.map;

    //     },
    //     err => console.log(err),
    //     () => console.log('Secret Quote Complete')
    //   )

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    
  }

  requested_default_dialog() {
    this.defaultWithHtmlDialog.show(DlComponent);
  }

  goaccount():void {
    this._router.navigate(['main/myaccountHome']);
  }
  toWay():void {
    this._router.navigate(['whymeApp']);
  };
  activefn(i):void {
    this.active = i;
  }
  tomyaccount():void {
    this._router.navigate(['myaccountHome']);
  }
  goyuebiao():void {
    this._router.navigate(["cpDetail", {pid: this.index.activity.pid, wap: true}]);
  }

}