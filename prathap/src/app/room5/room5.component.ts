import { Component, OnInit } from '@angular/core';
import { GraphService } from '../graph.service';

@Component({
  selector: 'app-room5',
  templateUrl: './room5.component.html',
  styleUrls: ['./room5.component.scss']
})
export class Room5Component implements OnInit {

  user:any;
  constructor(public graphservice:GraphService){ 
    this.user=this.graphservice.getdata()
    console.log(this.user)
  }
 

  ngOnInit() {
  }
}
