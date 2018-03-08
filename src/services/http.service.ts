import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { GlobalService } from './global.service';
import { FilterService } from './filter.service';
import 'rxjs/add/operator/map';
import { Md5 } from 'ts-md5/dist/md5';
import { Sha256 } from '../services/sha256';

@Injectable()
export class HttpService {
  constructor(
    private globalService: GlobalService,
    private filterService: FilterService,
    private sha256: Sha256,
    private _http: Http,
  ) {}

  get(url, data, type) {

  }

  post(scope, url, data, type): void {
    scope.submitBool = false;
    this.globalService.maskHidde = true;
    if(!data.version){
      data.version = this.globalService.version;
    }
    if (!data.channel) {
      if (this.isWeixin() == true) {
        data.channel = 5;
      }
      else {
        data.channel = this.globalService.channel;
      }
    }
    if (!data.token) {
      data.token = this.filterService.isRegister().user.token;
    }
    if (data.passWord != undefined) {
      data.passWord = this.sha256.hex_sha256(Md5.hashStr(data.passWord || ''));
    }
    if (data.tpwd != undefined) {
      data.tpwd = this.sha256.hex_sha256(Md5.hashStr(data.tpwd || ''));
    }
    if (data.tpw != undefined) {
      data.tpw = this.sha256.hex_sha256(Md5.hashStr(data.tpw || ''));
    }
    if (data.pwd != undefined) {
      data.pwd = this.sha256.hex_sha256(Md5.hashStr(data.pwd || ''));
    }
    this._http.post(url, data)
      .map(res => res.json())
      .subscribe(
        data => {
          scope.submitBool = true;
          this.globalService.maskHidde = false;
          if (data.success) {
            return data;
          } else if (data.errorCode == '9999') {
            this.filterService.errorCode(data.errorCode, scope, 'y');

          }
        },
        err => console.log(err),
        () => console.log('Secret Quote Complete')
      );
  }

  isWeixin(): boolean {
    const ua:string = window.navigator.userAgent.toLowerCase();
    if( ua.match(/MicroMessenger/i)[0] == 'micromessenger' ){
      return true;
    } else {
      return false;
    }
  }

}