import { Injectable } from '@angular/core';
import { LocalStorage } from './local.storage';
import { GlobalService } from './global.service';
import { Index } from '../data/data';

@Injectable()
export class FilterService {
  constructor(
    private localStorage: LocalStorage,
    private globalService: GlobalService
  ) {}
  /*浏览记录*/
  isPath(url: string): void {
    if(this.localStorage.getObject('pathUrl')[this.localStorage.getObject('pathUrl').length - 1] != url ){
      this.globalService.pathUrl = this.localStorage.getObject('pathUrl');
      this.globalService.pathUrl.push(url);
      this.localStorage.setObject('pathUrl', this.globalService.pathUrl);
    }
  }
  /*投资账户当前登录状态*/
  isRegister(certification?) {
    class ObjUser {
      userName: string;
      [propName: string]: any;
    }
    class Obj {
      register: boolean;
      user = new ObjUser();
    };
    let obj = new Obj();
    
    obj.register = false;
    if(this.localStorage.get('user')){
      obj.register = true;
      obj.user = this.localStorage.getObject('user');
      if(certification){
        obj.user.certification = certification;
        obj.user.userName = obj.user.realName;
      } else {
        obj.user.userName = '亲爱的用户';
      }
      this.localStorage.setObject('user', obj.user);
    } else {
      obj.register = false;
      obj.user.userName = '亲爱的用户';
    }
    return obj;
  }
  /*服务器-errorCode*/
  errorCode(code: string, scope: Index, YorN: string) {
    let error = {
      1001: "账号或密码为空",
      1002: "验证码错误",
      1003: "账号或密码错误",
      1004: "收货信息已存在",
      2001: "当前已有地址",
      9998: "请重新登录",
      9999: "系统错误，请稍后刷新重试",
      10001: "当日用户无分享记录",
      test: "网络错误"
    }
    // scope.msg = {};
    // scope.msg['text'] = error[code];
  
    if (YorN == 'y') {
      scope.msg = {};
      scope.msg['btnYes'] = '确定';
      scope.msg.title = '通知：';
      scope.msg['text'] = error[code];
    } else {
      return error[code];
    }
  }
  /*根据用户状态提示跳转页面方向*/
  promptPageForward(templateurl: string, scope: Index) {

  }
}