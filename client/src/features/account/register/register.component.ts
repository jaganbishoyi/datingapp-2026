import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from 'src/core/services/account-service.service';
import { RegisterCreds, User } from 'src/types/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter<boolean>();

  protected creds = {} as RegisterCreds;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
  }

  register(): void {
    this.accountService.register(this.creds).subscribe({
      next: user => {
        console.log(user);
        this.cancel();
      },
      error: error => console.log(error)
    });
  }

  cancel(): void {
    this.cancelRegister.emit(false);
    this.creds = {} as RegisterCreds;
  }

}
