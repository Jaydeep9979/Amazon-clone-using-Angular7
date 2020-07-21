import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import{EcomService} from './ecom.service'
import {Router,NavigationEnd} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProfauthGuard implements CanActivate {
  constructor(private myservice : EcomService,private router : Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // if(!this.myservice.isloggedIn){
      //   alert("Please Login First!");
      //    this.router.navigateByUrl('/login');
        
      //    return false;
      // }
      // return true;


      if(sessionStorage.getItem('auth')!=null)
      {
        return true;
      }
      return false;

  }
  
}
