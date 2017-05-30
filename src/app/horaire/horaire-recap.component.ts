/**
 * Created by Ponoki on 29/05/2017.
 */
import {Component, Input} from '@angular/core';
import {HoraireStationInterface} from './horaire.station.Interface';
import {HoraireDestinationInterface} from './horaire.destination.interface';

@Component({
  moduleId: module.id,
  selector: 'app-horaire-recap',
  templateUrl: 'horaire-recap.component.html',
  styleUrls: ['horaire-recap.component.css']
})
export class HoraireRecapComponent {
  @Input () destDataBus: any;
  @Input () statDataBus: any;

  title: string = 'Géolocalisation de la station';
  lat: number = 51.678418;
  lng: number = 7.809007;



}
