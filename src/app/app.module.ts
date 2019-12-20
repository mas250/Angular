import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'

@NgModule({
  declarations: [
        EventsAppComponent,
        EventsListComponent,
      EventThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],

  bootstrap: [EventsAppComponent]
})
export class AppModule { }
