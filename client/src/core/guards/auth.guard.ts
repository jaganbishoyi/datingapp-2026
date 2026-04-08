import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account-service.service';
import { ToastService } from '../services/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private accountService: AccountService,
    private toast: ToastService,
  ) { }

  canActivate(): boolean {

    if (this.accountService.currentUser) {
      return true;
    } else {
      this.toast.error('You must be logged in to access this page.');
      return false;
    }
  }

}
