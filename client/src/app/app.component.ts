import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  protected title = 'Dating App';
  protected members: any;

  constructor(private http: HttpClient) {
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
  }

  trackByMemberId(index: number, member: any): number {
    return member.id;
  }

  ngOnDestroy(): void {
    // Cleanup logic if needed
  }
}
