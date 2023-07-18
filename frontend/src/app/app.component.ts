import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { SocketService } from './socket.service';
import { NewClubArrivedComponent } from './new-club-arrived/new-club-arrived.component';
import { LastClubArrivedComponent } from './last-club-arrived/last-club-arrived.component';
import { ChartAssociationsComponent } from './chart-associations/chart-associations.component';


@Component({
  selector: 'club-arrived-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'frontend';
  name_club: string;
  name_association: string;
  canShow_new_club: boolean = false;
  canShow_last_club_and_chart: boolean = false;

  constructor( private srv: SocketService) { }

  ngOnInit() {

    this.srv.listen('dataupdate').subscribe((res: any) => {

      if(res != "" && res.club.name != this.name_club) { 
        //Irá renderizar o novo Clube
        this.canShow_new_club = true;
        this.name_club = res.club.name;
        this.name_association = res.club.association;

      } else {
        this.canShow_new_club = false;
        this.canShow_last_club_and_chart = true;
        // Apenas esconde o novo clube e renderiza o gráfico com o último clube
      }
      

      console.log(res.club.association)
    });
  }
}
