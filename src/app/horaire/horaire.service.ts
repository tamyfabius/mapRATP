import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';


/**
 * Created by tamyfabius on 29/05/2017.
 */

@Injectable()
export class HoraireService {

  private urlApi: string = "https://api-ratp.pierre-grimaud.fr/v3/";

  constructor(private _http: Http) {}

  /*************************************
   *  Permet de récupérer la liste ddes transport RATP:
   *  - destination : way = A or B
   *  - type : metro , rer , bus , tramway
   *  - Code: 1 , 2, 3 ect...
   *  - stations
   *  - Horaires
   * @param type
   * @param code
   * @returns {Observable<R|T>}
   */
  // getDestinationsByTypeCode(type: string, code: string){
  //   return this._http
  //     .get(this.urlApi+"destinations/"+type+"/"+code)
  //     .do(x => console.log(x))
  //     .map(destinations => destinations.json())
  //     .catch(error => {
  //       let errorMessage = `Une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
  //       return Observable.throw(errorMessage);
  //     });
  // }
  //
  // getLinesByType(type: string){
  //   return this._http
  //     .get(this.urlApi+"lines"+type)
  //     .do(x => console.log(x))
  //     .map(lines => lines.json())
  //     .catch(error => {
  //       let errorMessage = `Une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
  //       return Observable.throw(errorMessage);
  //     });
  // }
  //
  // getLineByTypeCode(type: string, code: string){
  //   return this._http
  //     .get(this.urlApi+"lines"+type+"/"+code)
  //     .do(x => console.log(x))
  //     .map(line => line.json())
  //     .catch(error => {
  //       let errorMessage = `Une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
  //       return Observable.throw(errorMessage);
  //     });
  // }
  //
  // getSchedulesByTypeCodeStationWay(type: string, code: string, station: string, way: string){
  //   return this._http
  //     .get(this.urlApi+"schedules"+type+"/"+code+"/"+station+"/"+way)
  //     .do(x => console.log(x))
  //     .map(schedules => schedules.json())
  //     .catch(error => {
  //       let errorMessage = `Une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
  //       return Observable.throw(errorMessage);
  //     });
  // }
  //
  // getStationsByTypeCode(type: string, code: string){
  //   return this._http
  //     .get(this.urlApi+"stations"+type+"/"+code)
  //     .do(x => console.log(x))
  //     .map(stations => stations.json())
  //     .catch(error => {
  //       let errorMessage = `Une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
  //       return Observable.throw(errorMessage);
  //     });
  // }

  /*************************************************
   *  LIGNE BUS 108
   * @returns {Observable<R|T>}
   */
  getDestinationsByTypeCode(){
    return this._http
      .get(this.urlApi+"destinations/bus/108")
      .map(destinations => destinations.json())
      .catch(error => {
        let errorMessage = `Une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
        return Observable.throw(errorMessage);
      });
  }

  getLineByTypeCode(){
    return this._http
      .get(this.urlApi+"lines/bus/108")
      .do(x => console.log(x))
      .map(line => line.json())
      .catch(error => {
        let errorMessage = `Une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
        return Observable.throw(errorMessage);
      });
  }

  getSchedulesByTypeCodeStationWay(){
    return this._http
      .get(this.urlApi+"schedules/bus/108")
      .do(x => console.log(x))
      .map(schedules => schedules.json())
      .catch(error => {
        let errorMessage = `Une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
        return Observable.throw(errorMessage);
      });
  }

  getStationsByTypeCode(){
    return this._http
      .get(this.urlApi+"stations/bus/108")
      .do(x => console.log(x))
      .map(stations => stations.json())
      .catch(error => {
        let errorMessage = `Une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
        return Observable.throw(errorMessage);
      });
  }
}
