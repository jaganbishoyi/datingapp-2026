import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './account/register/register.component';
import { FormsModule } from '@angular/forms';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailedComponent } from './members/member-detailed/member-detailed.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    MemberDetailedComponent,
    ListsComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [HomeComponent]
})
export class FeaturesModule { }
