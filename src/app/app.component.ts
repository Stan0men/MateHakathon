import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";


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
  currentMonth(){
    this.month = (new Date()).getMonth();
  }


  ngOnInit() {

  }
}



export class Service {
  constructor(private http: HttpClient){}
  getEvents(): Observable<any> {
    return this.http.get('http://192.168.66.219:3000/events');
  }
}
