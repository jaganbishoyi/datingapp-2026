import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountService } from 'src/core/services/account-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  protected title = 'Dating App';
  protected members: any;

  constructor(private http: HttpClient, private accountService: AccountService) {
    console.log('AppComponent initialized');
  }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/members').subscribe({
      next: (response: any) => {
        this.members = response;
      },
      error: (error: HttpErrorResponse) => {
        console.error('API Error:', error)
      },
      complete: () => {
        console.log('API call completed');
      }
    });
    this.setCurrentUser();
  }

  trackByMemberId(_: number, member: any): number {
    return member.id;
  }

  setCurrentUser(): void {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      this.accountService.currentUser = JSON.parse(userJson);
    }
  }

  ngOnDestroy(): void {
    // Cleanup logic if needed
  }
}
