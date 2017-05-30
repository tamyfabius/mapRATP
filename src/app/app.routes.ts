/**
 * Created by fabius on 27/05/17.
 */
import {Type} from '@angular/core';

import {AccueilComponent} from './accueil/accueil.component';
import {PlanComponent} from './plan/plan.component';
import {HoraireComponent} from './horaire/horaire.component';
import {HoraireRecapComponent} from './horaire/horaire-recap.component';
import {ContactComponent} from './contact/contact.component';

interface Route {
  path?: string;
  component?: Type<any>;
  pathMatch?: string;
  redirectTo?: string;
}

export const AppRoutes: Route[] = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'plan', component: PlanComponent},
  {path: 'horaire', component: HoraireComponent},
  {path: 'horaire-recap', component: HoraireRecapComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: 'accueil', pathMatch: 'full'}
];
