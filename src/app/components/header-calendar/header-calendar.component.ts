import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header-calendar',
  templateUrl: './header-calendar.component.html',
  styleUrls: ['./header-calendar.component.scss']
})
export class HeaderCalendarComponent implements OnInit {
  @Output() nextMonth = new EventEmitter();
  @Output() prevMonth = new EventEmitter();
  @Input() m;

  monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  d = new Date();
month = new Date().getMonth();

  _nextMonth(){
    this.nextMonth.emit();
  }
  _prevMonth(){
   this.prevMonth.emit();
  }


  constructor() { }

  ngOnInit() {
  }

}
