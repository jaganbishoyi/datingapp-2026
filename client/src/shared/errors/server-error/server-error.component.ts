import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiError } from 'src/types/error';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css']
})
export class ServerErrorComponent implements OnInit {
  protected error: ApiError | null = null;
  protected showDetails = false;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.error = navigation?.extras?.state?.['error'];
  }

  ngOnInit(): void {
  }

  detailsToggle() {
    this.showDetails = !this.showDetails;
  }

}
