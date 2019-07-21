import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BooklistComponent } from './booklist/booklist.component';
import { AnimvariableService } from './services/animvariable.service';
import { BookitemComponent } from './bookitem/bookitem.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BooklistComponent,
    BookitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AnimvariableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
