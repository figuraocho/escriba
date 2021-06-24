import {
  Injectable
} from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {
  Observable
} from "rxjs";
import {
  UsersService
} from "../services/users.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements AuthGuard {

  constructor(private user: UsersService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | Promise < boolean > | Observable < boolean > | UrlTree {
    if (this.user.token!== null && this.user.token.length !== 0) {
      return true;
    } else {
      return this.router.createUrlTree(['/']);
    };
  }
}
