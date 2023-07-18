import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'club-arrived-new-club-arrived',
  templateUrl: './new-club-arrived.component.html',
  styleUrls: ['./new-club-arrived.component.css']
})
export class NewClubArrivedComponent implements OnInit {
  @Input() name: string = '';
  @Input() association: string = '';
  @Input() canShow: boolean = false;

  constructor() {}

  ngOnInit(): void {
    
  }
}
