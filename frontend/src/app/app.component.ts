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
  club: string;
  name_association: string;
  canShow: boolean = false;

  constructor( private srv: SocketService) { }

  ngOnInit() {

    this.srv.listen('dataupdate').subscribe((res: any) => {

      if(res != "") { 
        //Irá renderizar o novo Clube
        this.canShow = true;
        this.club = res.name;
        this.name_association = res.association;

      } else {
        // Apenas esconde o novo clube e renderiza o gráfico com o último clube
      }
      

      console.log(res)
    });
  }
}
