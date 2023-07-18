import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'club-arrived-chart-associations',
  templateUrl: './chart-associations.component.html',
  styleUrls: ['./chart-associations.component.css']
})
export class ChartAssociationsComponent implements OnInit {
  //@Input() name: string = '';
  //@Input() association: string = '';
  @Input() canShow: boolean = false;

  constructor() {}

  ngOnInit(): void {
    
  }
  
}
