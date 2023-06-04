import { Injectable, forwardRef } from '@angular/core';
import { DefaultResetService } from '../services/default-reset.service';

@Injectable({
  providedIn: 'root',
  useClass: forwardRef(() => DefaultResetService),
})
export abstract class ResetServiceContract {
  public abstract reset(): number;
}
