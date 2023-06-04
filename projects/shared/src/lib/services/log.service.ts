import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor() {}

  public log() {
    console.log(
      'This is the log service and it can be used by all applications'
    );
  }
}
