import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HoraireComponent} from './horaire.component';
import {HoraireService} from './horaire.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HoraireComponent],
  exports: [HoraireComponent],
  providers: [HoraireService]
})
export class HoraireModule {}
