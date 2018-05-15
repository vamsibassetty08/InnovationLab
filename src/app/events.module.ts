import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EventsComponent } from './events/events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

import { EventGuardService } from './services/event-guard.service';
import { SharedModule } from './shared.module';

@NgModule({
  imports: [
    
    RouterModule.forChild([
      { path: 'events', component: EventsComponent },
      { path: 'events/:id', canActivate: [EventGuardService], component: EventDetailComponent }
    ]),
    SharedModule
  ],
  declarations: [
    EventsComponent,
    EventDetailComponent
  ],
  providers: [EventGuardService]
})
export class EventsModule { }
