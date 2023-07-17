import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { SocketService } from './socket.service';

@Component({
  selector: 'club-arrived-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  club: string;

  constructor( private srv: SocketService) { }

  ngOnInit() {

    this.srv.listen('dataupdate').subscribe((res: any) => {
      this.club = res;
      console.log(res)
    });
  }
}
