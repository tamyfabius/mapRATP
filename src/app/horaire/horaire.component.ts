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

  dataStations: any[] = [];
  constructor(private _horaireService: HoraireService) { }

  ngOnInit() {
    this._horaireService.getStationsByTypeCode().subscribe(result => console.log(this.dataStations = result));
  }


}

interface dataRatp {

}
