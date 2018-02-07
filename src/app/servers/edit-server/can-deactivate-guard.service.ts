import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot, CanDeactivate, RouterLinkActive, RouterStateSnapshot} from '@angular/router';

export interface CanDeactivateGuardService {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
export class CanDeactivateGuard implements CanDeactivate<CanDeactivateGuardService> {
  canDeactivate(component: CanDeactivateGuardService,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}
