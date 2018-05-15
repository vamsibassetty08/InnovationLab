import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IEvent } from '../models/event';

@Injectable()
export class EventService {

  private _eventServiceUrl = 'assets/stubs/events.json';

  constructor(private _httpClient: HttpClient) { }

  getEvents(): Observable<IEvent[]> {
    return this._httpClient.get<IEvent[]>(this._eventServiceUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getEventById(eventId: number): IEvent {
    return null;
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }
}
