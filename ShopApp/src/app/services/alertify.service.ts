import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  Success(message: string) {
    alertify.success(message)
  }
  Error(message: string) {
    alertify.error(message);
  }
  Warning(message: string) {
    alertify.warning(message);
  }
}
