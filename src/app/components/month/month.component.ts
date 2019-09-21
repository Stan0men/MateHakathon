import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {
  monthsMap = [
   {name: 'January',
    amountDays:30
  }
  ]
  constructor() { }

  ngOnInit() {
    console.log(this.monthsMap)
  }

}
