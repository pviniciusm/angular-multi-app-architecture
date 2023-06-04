import { Injectable } from '@angular/core';
import { ResetServiceContract } from '../contracts';

@Injectable({
  providedIn: 'root',
})
export class DefaultResetService implements ResetServiceContract {
  constructor() {}

  public reset(): number {
    console.log('This is the DEFAULT reset service!');

    return 1;
  }
}
