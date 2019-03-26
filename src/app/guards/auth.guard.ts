import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastService } from '../services/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private routes: Router, private toastService: ToastService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // user already logged in
    if (localStorage.getItem("user") != null) {
      return true;
    }
    else {
      // stop unauthorised navigation
      this.toastService.show("Login First", "bg-danger")
      this.routes.navigate(['login'])
      return false;
    }
  }
}
