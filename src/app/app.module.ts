import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BooklistComponent } from './booklist/booklist.component';
import { AnimvariableService } from './services/animvariable.service';
import { BookitemComponent } from './bookitem/bookitem.component';
import { ShortdescPipe } from './pipes/shortdesc.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BooklistComponent,
    BookitemComponent,
    ShortdescPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AnimvariableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
