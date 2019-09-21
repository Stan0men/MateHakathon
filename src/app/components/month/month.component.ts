import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements  OnChanges {
  @Input() month;
  @Input() year;
  calendarArr = [];


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
      result.push(d.getDate());

      d.setDate(d.getDate() + 1);
    }

    if (getDay(d) !== 0) {
      for (let i = getDay(d); i < 7; i++) {
        result.push('');
      }
    }

    return result;
  };



  ngOnChanges() {
    this.calendarArr = this.getCalendar(this.month, this.year);
  }
}
