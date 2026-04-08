import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [NavComponent]
})
export class LayoutModule { }
