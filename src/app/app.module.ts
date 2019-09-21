import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent, Service} from './app.component';
import {MonthComponent} from './components/month/month.component';
import {HeaderCalendarComponent} from './components/header-calendar/header-calendar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [AppComponent, MonthComponent, HeaderCalendarComponent],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule {
}
