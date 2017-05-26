import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AccueilModule} from './accueil/accueil.module';
import {PlanModule} from './plan/plan.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccueilModule,
    PlanModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
