import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'club-arrived-last-club-arrived',
  templateUrl: './last-club-arrived.component.html',
  styleUrls: ['./last-club-arrived.component.css']
})
export class LastClubArrivedComponent implements OnInit {
  //@Input() name: string = '';
  //@Input() association: string = '';
  @Input() canShow: boolean = false;
  @Input() association: string;
  @Input() name: string;

  constructor() {}

  ngOnInit(): void {
    
  }

}
