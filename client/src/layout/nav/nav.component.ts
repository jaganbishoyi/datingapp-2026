import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/core/services/account-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  protected creds: any = {};

  constructor(
    protected accountService: AccountService
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.accountService.login(this.creds).subscribe({
      next: (result) => {
        this.creds = {};
      },
      error: (error) => console.error(error)
    });
  }

  logOut(): void {
    this.accountService.logout();
  }
}
