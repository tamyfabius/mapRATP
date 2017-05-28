import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HoraireComponent} from './horaire.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HoraireComponent],
  exports: [HoraireComponent]
})
export class HoraireModule { }
