import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddService } from '../add.service';

@Component({
  selector: 'app-topic2',
  templateUrl: './topic2.component.html',
  styleUrls: ['./topic2.component.scss']
})
export class Topic2Component implements OnInit {
  searchtext:any;
  add: any;
// count=0;  
  constructor(
    public activated_params: ActivatedRoute,
    public common: AddService) { 
    this.activated_params.params.subscribe(data => {
      console.log(data['id']);
    })
  }

  category: string = "mens";
  
  // constructor() { }
//   action1(){
//     this.count+=1;
   
//   }
//   action2(){
//    this.count-=1;
  
//  }
 addToCart(item: any) {
  this.add.cart_value += 1;
  // console.log(item);
  this.add.cart_items_list.push(item);
}

  items: Array<any> = [
    {
      "item_name": "Mi",
      "image": "assets/images/tv1.jpg",
      "price": 12499
    },
    {
      "item_name": "Samsung ",
      "image": "assets/images/i1.jpg",
      "price": 17000
    },
    {
      "item_name": "LG",
      "image": "assets/images/lap.jpeg",
      "price": 37000
    },
    {
      "item_name": " LED Smart TV",
      "image": "assets/images/logo.png",
      "price": 7000
    },
    {
      "item_name": "Samsung Series 4 80cm (32) HD Ready LED Smart TV",
      "image": "assets/images/mb.jpeg",
      "price": 37000
    },
    {
      "item_name": "Samsung Series 4 80cm (32) HD Ready LED Smart TV",
      "image": "assets/images/mb1.jpeg",
      "price": 17000
    },
    {
      "item_name": "Samsung Series 4 80cm (32) HD Ready LED Smart TV",
      "image": "assets/images/mb2.jpeg",
      "price": 27000
    },
    {
      "item_name": "micromax",
      "image": "assets/images/mb3.jpeg",
      "price": 5000
    },
    {
      "item_name": "Samsung Series 4 80cm (32) HD Ready LED Smart TV",
      "image": "assets/images/mb4.jpg",
      "price": 7000
    },
    {
      "item_name": " Smart TV",
      "image": "assets/images/tv1.jpg",
      "price": 70000
    },
    {
      "item_name": "Samsung Series 4 80cm (32) HD Ready LED Smart TV",
      "image": "assets/images/tv1.jpg",
      "price": 70000
    },
    {
      "item_name": "Samsung Series 4 80cm (32) HD Ready LED Smart TV",
      "image": "assets/images/tv1.jpg",
      "price": 70000
    },
    {
      "item_name": "Samsung Series 4 80cm (32) HD Ready LED Smart TV",
      "image": "assets/images/tv1.jpg",
      "price": 70000
    }
  ]
  ngOnInit() {
  }

}
