import {Component, OnInit} from '@angular/core';
import {HoraireService} from './horaire.service';
import { HoraireStationInterface} from './horaire.station.Interface';
import {HoraireDestinationInterface} from './horaire.destination.interface';


@Component({
  moduleId: module.id,
  selector: 'app-horaire',
  templateUrl: './horaire.component.html',
  styleUrls: ['./horaire.component.css']
})
export class HoraireComponent implements OnInit {

  dataStations: HoraireStationInterface[]= [];
  dataDestination: HoraireDestinationInterface[] = [];

  dataStat: any = '';
  dataDest: any = '';

  constructor(private _horaireService: HoraireService) {}

  ngOnInit() {
    this.getListStations();
    this.getDestination();
  }

  getDestination() {
    this._horaireService
      .getDestinationsByTypeCode()
      .subscribe(result => this.dataDestination = result.result.destinations);
  }

  getListStations() {
    this._horaireService
      .getStationsByTypeCode()
      .subscribe(result => this.dataStations = result.result);
  }

  getDestBus(event: any){
    this.dataDest = event.target.value;
  }

  // getStationBus(event: any){
  //   this.dataStat = event.target.value;
  // }
}



