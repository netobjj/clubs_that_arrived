import { Component, OnInit, Input } from '@angular/core';
import { single } from '../../../../backend/data_chart';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'club-arrived-chart-associations',
  templateUrl: './chart-associations.component.html',
  styleUrls: ['./chart-associations.component.css']
})
export class ChartAssociationsComponent {
  //@Input() name: string = '';
  //@Input() association: string = '';
  @Input() canShow: boolean = false;

  single: any[];
  view: any = [700, 400]; // Dimensões do gráfico
  showXAxis = true; // Exibir eixo X
  showYAxis = true; // Exibir eixo Y
  showXAxisLabel = true; // Exibir rótulo do eixo X
  showYAxisLabel = true; // Exibir rótulo do eixo Y
  xAxisLabel = 'Países'; // Rótulo do eixo X
  yAxisLabel = 'População'; // Rótulo do eixo Y
  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#f00', '#0f0', '#0ff'],
  }; // Cores das barras
  gradient = false; // Habilitar gradiente nas barras

  constructor() {
    this.single = single; // Dados para o gráfico
  }

  ngOnInit(): void {
    
  }
  
}
