import { Injectable } from '@angular/core';
import { Iservice } from '../generic/iservice';
import { Albums } from './albums';

@Injectable({
  providedIn: 'root'
})
export class AlgumsService implements Iservice<Albums> {
  get(): any[] {
    throw new Error("Method not implemented.");
  }
  post(data: any): import("rxjs").Observable<any> {
    throw new Error("Method not implemented.");
  }
  put(data: any): import("rxjs").Observable<any> {
    throw new Error("Method not implemented.");
  }
  patch(data: any): import("rxjs").Observable<any> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): void {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
