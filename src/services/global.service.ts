import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  title: string = '聚胜财富-普惠互联网金融服务平台';
  activeMenu: string;
  pathUrl: string[] = [];  // 存储当前路由
  maskHidde: boolean;
  version: string = '2.0.0';
  channel: string = '3';
}