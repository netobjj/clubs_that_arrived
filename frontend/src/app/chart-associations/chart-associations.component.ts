import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { single } from '../../../../backend/data_chart';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Color, ColorHelper, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'club-arrived-chart-associations',
  templateUrl: './chart-associations.component.html',
  styleUrls: ['./chart-associations.component.css']
})
export class ChartAssociationsComponent {
  @Input() name: string = '';
  @Input() association: string = '';
  @Input() canShow: boolean = false;
  @Input() chart: any;

  single: any[];
  view: any = [700, 400]; // Dimensões do gráfico
  showXAxis = true; // Exibir eixo X
  showYAxis = false; // Exibir eixo Y
  showXAxisLabel = true; // Exibir rótulo do eixo X
  showYAxisLabel = false; // Exibir rótulo do eixo Y
  xAxisLabel = 'Associações'; // Rótulo do eixo X
  yAxisLabel = 'População'; // Rótulo do eixo Y
  colorScheme: Color = {
    name: 'myScheme',
    selectable: false,
    group: ScaleType.Quantile,
    domain: ["#0f0"]
  };

  animations = true;
  gradient = false; // Habilitar gradiente nas barras

  constructor() {
    Object.assign(this, { single }); // Dados para o gráfico
  }

  ngOnInit(): void { }

  /* barCustomColors() {
    let result: any[] = [];
    for (let i = 0; i < this.single.length; i++) {
      if (this.single[i].value <= 30) {
        result.push({ "name": this.single[i].name, "value": "#f00" }); // Red
      } else if (this.single[i].value > 30 && this.single[i].value <= 60) {
        result.push({ "name": this.single[i].name, "value": "#ff0" }); // Yellow
      } else if (this.single[i].value > 60 && this.single[i].value <= 99) {
        result.push({ "name": this.single[i].name, "value": "#00f" }); // blue
      } else if (this.single[i].value > 99) {
        result.push({ "name": this.single[i].name, "value": "#0f0" }); // green
      }
    }
    return result;
  } */
}
