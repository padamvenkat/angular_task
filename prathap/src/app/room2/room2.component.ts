import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-room2',
  templateUrl: './room2.component.html',
  styleUrls: ['./room2.component.scss']
})
export class Room2Component implements OnInit {

  user:any;

  constructor() { 
    this.user={
      name:'venkat',
      disgnation:'softwareenginner',
      age:28,
      address:'macherla ,kothapall ,guntur',
      phone:[
        8464017141,
        9848022338,
        5241036987,
      ]
    };
  }


  ngOnInit() {
  }

}
