import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cart';
items:Array<any>=[
  {
    "item1":"relame5s",
    "image":"assets/mb.jpeg",
    "price":7000,
  },
  {
    "item1":"redmi",
    "image":"assets/mb.jpeg",
    "price":6000,
  },
  {
    "item1":"micromax",
    "image":"assets/mb1.jpeg",
    "price":8000,
  },
  {
    "item1":"samsung",
    "image":"assets/mb2.jpeg",
    "price":10000,
  },
  {
    "item1":"nokia",
    "image":"assets/mb3.jpeg",
    "price":7500,
  },
  {
    "item1":"iphone6",
    "image":"assets/mb4.jpg",
    "price":17500,
  },
  {
    "item1":"iphone6",
    "image":"assets/mb5.jpg",
    "price":17500,
  },
  {
    "item1":"iphone6",
    "image":"assets/mb6.jpeg",
    "price":17500,
  },
  {
    "item1":"iphone6",
    "image":"assets/mb7.jpeg",
    "price":17500,
  },
  {
    "item1":"iphone6",
    "image":"assets/real.jpeg",
    "price":17500,
  },
  {
    "item1":"z",
    "image":"assets/real.jpeg",
    "price":175000000000,
  }
]

}
