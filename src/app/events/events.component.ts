import { Component, OnInit } from '@angular/core';

import { EventService } from '../services/event.service';

import { IEvent } from '../models/event';

@Component({
  //selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  events: IEvent[];
  filteredEvents: IEvent[];
  errorMessage: string;
  pageTitle: string = 'Events Schedule';
  private sortDirection: boolean = false;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredEvents = this.listFilter ? this.performFilter(this.listFilter) : this.events;
  }

  constructor(private _eventService: EventService) {
  }

  ngOnInit() {
    this.sortDirection = !this.sortDirection;

    //Getting all the events from the service..
    this._eventService.getEvents()
      .subscribe(events => {
        this.events = events;
        this.filteredEvents = this.events;
      },
      error => this.errorMessage = <any>error);
  }

  performFilter(filterBy: string): IEvent[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.events.filter((event: IEvent) =>
      event.eventName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Event List: ' + message;
  }

  performSort(key: string): void {
    this.listFilter = '';
    let tempArray: Array<any> = this.events;
    this.sortDirection = !this.sortDirection;

    tempArray.sort((a, b) => {
      let str1 = a[key];
      let str2 = b[key];
      if (this.sortDirection) {
        if (str1 <= str2) {
          return -1;
        }
        else if (str1 > str2) {
          return 1;
        }
      }
      else {
        if (str1 >= str2) {
          return -1;
        }
        else if (str1 < str2) {
          return 1;
        }
      }
      return 0;
    });
    this.filteredEvents = tempArray;
  }
}
