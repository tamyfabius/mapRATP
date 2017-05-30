import { Component, OnInit } from '@angular/core';
import {HoraireService} from "./horaire.service";

@Component({
  moduleId: module.id,
  selector: 'app-horaire',
  templateUrl: './horaire.component.html',
  styleUrls: ['./horaire.component.css']
})
export class HoraireComponent implements OnInit {

  bus: string = 'bus';
  code: string = '';

  dataStations: Array<any> = [];
  dataDestination: Array<any> = [];

  constructor(private _horaireService: HoraireService) {
  }

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
}

