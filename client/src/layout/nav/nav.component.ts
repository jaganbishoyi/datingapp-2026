import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/core/services/account-service.service';
import { ToastService } from 'src/core/services/toast.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  protected creds: any = {};

  constructor(
    protected accountService: AccountService,
    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.accountService.login(this.creds).subscribe({
      next: () => {
        this.creds = {};
        this.toast.success('Logged in successfully!');
        this.router.navigate(['/members']);
      },
      error: (error) => {
        this.toast.error(error.error);
      }
    });
  }

  logOut(): void {
    this.accountService.logout();
    this.router.navigate(['/']);
  }
}
