import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Observable, map, tap } from 'rxjs';

@Injectable()
class UserToken {
}

@Injectable()
class PermissionsService {
  canActivate(currentUser: UserToken, userId: string): boolean {
    return true;
  }
  canMatch(currentUser: UserToken): boolean {
    return true;
  }
}

export const AuthGuardService: CanActivateFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return inject(PermissionsService).canActivate(inject(UserToken), route.params['id']);
    };


// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuardService implements CanActivate{
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
//   Observable<boolean | UrlTree> 
//   | Promise<boolean | UrlTree> {
    
//   }
//   constructor(private router: Router,
//     private socialAuthService: SocialAuthService) {
// }
// CanActivateFn(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
//   return this.socialAuthService.authState.pipe(
//     map((socialUser: SocialUser) => !!socialUser),
//     tap((isLoggedIn: boolean) => {
//       if (!isLoggedIn) {
//         this.router.navigate(['login']);
//       }
//     })
//   );
// }
// }


// export const AuthGuard: CanActivateFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ):
//   Observable<boolean | UrlTree> 
//   | Promise<boolean | UrlTree> 
//   | boolean 
//   | UrlTree=> {

//   return inject(TokenService).authenticated()
//     ? true
//     : inject(Router).createUrlTree(['/auth/login']);

// };
