import { Injectable } from '@angular/core';
import { AccountService } from './account-service.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor(private accountService: AccountService) { }

  init():Observable<null> {
    const userJson = localStorage.getItem('user');
    if (!userJson) {
      console.log('App initialization Failed: No user found in localStorage');
      return of(null);
    }
    console.log('App initialization completed');
    this.accountService.currentUser = JSON.parse(userJson);
    return of(null)
  }
}
