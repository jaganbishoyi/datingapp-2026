import { MemberListComponent } from './../features/members/member-list/member-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { HomeComponent } from 'src/features/home/home.component';
import { ListsComponent } from 'src/features/lists/lists.component';
import { MemberDetailedComponent } from 'src/features/members/member-detailed/member-detailed.component';
import { MessagesComponent } from 'src/features/messages/messages.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children: [
      { path: "members", component: MemberListComponent },
      { path: "members/:id", component: MemberDetailedComponent },
      { path: "lists", component: ListsComponent },
      { path: "messages", component: MessagesComponent },
     ]
  },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
