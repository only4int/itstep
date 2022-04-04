import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { User, UserService } from '../core';

@Injectable()
export class UserResolverService implements Resolve<User> {

  constructor(private userService: UserService, route: Router){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User {
      return this.userService.getById(route.params["id"]);
  }

}
