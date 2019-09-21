import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonthComponent } from './components/month/month.component';
import { HeaderCalendarComponent } from './components/header-calendar/header-calendar.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,   ],
  declarations: [ AppComponent, MonthComponent, HeaderCalendarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
