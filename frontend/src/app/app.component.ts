import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { SocketService } from './socket.service';
import { NewClubArrivedComponent } from './new-club-arrived/new-club-arrived.component';
import { LastClubArrivedComponent } from './last-club-arrived/last-club-arrived.component';
import { ChartAssociationsComponent } from './chart-associations/chart-associations.component';
import { FactoryTarget } from '@angular/compiler';


@Component({
  selector: 'club-arrived-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'frontend';
  canShow_new_club: boolean = false;
  new_name_club: string;
  new_name_association: string;

  canShow_last_club_and_chart: boolean = false;
  last_name_association: string;
  last_name_club: string;
  chart: any;

  constructor(private srv: SocketService) { }

  ngOnInit() {

    this.srv.listen('dataupdate').subscribe((res: any) => {
      
      if (res != "" && res.club.name != this.new_name_club) {
        //Irá renderizar o novo Clube
        this.canShow_new_club = true;
        this.new_name_club = res.club.name;
        this.new_name_association = res.club.association;

        this.canShow_last_club_and_chart = false;
        this.last_name_association = res.club.association;
        this.last_name_club = res.club.name;

      } else {
        this.canShow_new_club = false;
        this.canShow_last_club_and_chart = true;
        this.chart = res.chart;
        // Apenas esconde o novo clube e renderiza o gráfico com o último clube
      }


      console.log(res.club.association)
    });
  }
}
