import { Component, OnInit } from '@angular/core';
import { AddService } from '../add.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchvalue: string;
  constructor(public router: Router, 
    public add: AddService) { }

  cart_value: number = this.add.cart_value;
  
  ngDoCheck() {
    this.cart_value = this.add.cart_value;
  }

  rote_to_home_page() {
    this.router.navigate(['/itemDetail']);
  }

  ngOnInit() {
    // console.log("cart value is: ", this.add.get_cart_value());
  }

}
