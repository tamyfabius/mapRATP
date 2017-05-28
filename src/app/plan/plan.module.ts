import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlanComponent} from './plan.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PlanComponent],
  exports: [PlanComponent]
})

export class PlanModule { }
