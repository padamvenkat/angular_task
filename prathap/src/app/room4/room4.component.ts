import { Component, OnInit } from '@angular/core';
import { GraphService } from '../graph.service';

@Component({
  selector: 'app-room4',
  templateUrl: './room4.component.html',
  styleUrls: ['./room4.component.scss']
})
export class Room4Component implements OnInit {
   data:any;
  constructor( public graphservice:GraphService) { 
    this.data=this.graphservice.getdata()
    console.log(this.data)
  }

  ngOnInit() {
  }

}
