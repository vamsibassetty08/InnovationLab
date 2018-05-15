import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IEvent } from '../models/event';
import { EventService } from '../services/event.service';

@Component({
  //selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  pageTitle: string = 'Event Details';
  errorMessage: string ;
  event: IEvent;

  constructor(private _route: ActivatedRoute,
    private _router: Router, private _eventService: EventService) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    //this.pageTitle += `: ${id}`;
    //Getting all the events from the service..
    this._eventService.getEvents()
      .subscribe(events => {
        this.event = events.find( item => item.eventId == id);
      },
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/events']);
  }

}
