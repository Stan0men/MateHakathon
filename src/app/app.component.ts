import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  month = new Date().getMonth();
  year = new Date().getFullYear();

  nextMonth() {
     this.month++;
  }

  prevMonth() {
     this.month--
  }
  ngOnInit() {

  }
}



