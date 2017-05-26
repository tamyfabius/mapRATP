import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HoraireComponent} from './horaire.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HoraireComponent],
  exports: [HoraireComponent]
})
export class HoraireModule { }
