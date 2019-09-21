import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Service} from '../../app.component';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit, OnChanges {
  @Input() month;
  @Input() year;
  calendarArr = [];
  events: [];


  getCalendar = (month, year) => {
    function getDay(date) {
      let day = date.getDay();
      if (day === 0) day = 7;

      return day - 1;
    }

    const d = new Date(year, month);
    const result = [];

    for (let i = 1; i <= getDay(d); i++) {
      result.push('');
    }

    while (d.getMonth() === month) {
      result.push(new Date(d));

      d.setDate(d.getDate() + 1);
    }

    if (getDay(d) !== 0) {
      for (let i = getDay(d); i < 7; i++) {
        result.push('');
      }
    }

    return result;
  };

  constructor(private service: Service) {
  }

  ngOnChanges() {
    this.calendarArr = this.getCalendar(this.month, this.year);
  }

  ngOnInit() {
    this.service.getEvents()
      .subscribe(data => {
        this.events = data;
      })
  }

  getEvents(date: Date) {
    const key = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    if (this.events){
      return this.events[key]
    }
  }
}
