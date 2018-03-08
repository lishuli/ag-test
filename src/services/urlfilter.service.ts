import { Injectable } from '@angular/core';

@Injectable()
export class UrlfilterService {
  /*浏览记录*/
  getUrl(name: string): string {
    const base:string = '/';
    const urls = {
      // 首页
      "shouye": base + 'index/index.dos',
      // 关于我们
      '网站公告': base + 'aboutus/newsInformationList.dos',
    };
    return urls[name];
  }
}