import { Injectable } from '@angular/core';
import { ResetServiceContract } from 'projects/resumo/src/lib/contracts';

@Injectable({
  providedIn: 'root',
})
export class ResetService implements ResetServiceContract {
  constructor() {}

  public reset(): number {
    console.log('We are now on ResetService from chat application!!');
    console.log(
      'This is an example of dependency inversion and dependency injection for Angular modules and libs.'
    );
    console.log(
      'ResetService is used on Resumo lib, but can contain Chat logic with no need of Resumo->Chat dependency.'
    );

    return 1;
  }
}
