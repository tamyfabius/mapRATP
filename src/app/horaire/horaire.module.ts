import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {AgmCoreModule} from 'angular2-google-maps/core';

import {HoraireComponent} from './horaire.component';
import {HoraireRecapComponent} from './horaire-recap.component';
import {HoraireService} from './horaire.service';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCMLMf1D0RAqxHbhgpJezndP6gnILB5Bt4'
    })
  ],
  declarations: [HoraireComponent, HoraireRecapComponent],
  exports: [HoraireComponent],
  providers: [HoraireService]
})
export class HoraireModule {}
