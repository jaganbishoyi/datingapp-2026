import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './account/register/register.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [HomeComponent]
})
export class FeaturesModule { }
