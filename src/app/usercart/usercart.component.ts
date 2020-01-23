import { Component, OnInit } from '@angular/core';
import { AddService } from '../add.service';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.scss']
})
export class UsercartComponent implements OnInit {
  [x: string]: any;
  cart_list : Array<any> = [];
  constructor(public add: AddService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.cart_list = this.add.cart_items_list;
  }

  

}
