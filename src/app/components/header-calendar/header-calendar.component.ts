import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-header-calendar',
  templateUrl: './header-calendar.component.html',
  styleUrls: ['./header-calendar.component.scss']
})
export class HeaderCalendarComponent implements OnInit {
  @Output() nextMonth = new EventEmitter();
  @Output() prevMonth = new EventEmitter();
  @Output() curentMonth = new EventEmitter();
  @Input() month;

  monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];


  _nextMonth() {
    this.nextMonth.emit();
  }

  _prevMonth() {
    this.prevMonth.emit();
  }
  _currentMonth() {
    this.curentMonth.emit();
  }


  constructor() {
  }

  ngOnInit() {
  }

}

