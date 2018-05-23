import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StateService {
  data = new Subject<Object>();
  private data$ = this.data.asObservable();
  private subscriptions = new Map<string, Array<Function>>();

  constructor() {
    this.data$.subscribe((data: any) => this.onEvent(data));
  }

  notifyDataChanged(event: string, value: any): void {
    // tslint:disable-next-line:curly
    if (value === this.data[event]) return; // If data doesn't change, do nothing
    this.data[event] = value;
    this.data.next({ event, data: this.data[event] });
  }

  subscribe(event: string, callback: Function): void {
    const subscribers = this.subscriptions.get(event) || [];
    subscribers.push(callback);
    this.subscriptions.set(event, subscribers);
  }

  private onEvent(data: any): void {
    const subscribers = this.subscriptions.get(data.event) || [];
    subscribers.forEach(callback => callback.call(null, data.data));
  }
}
