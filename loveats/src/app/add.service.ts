import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  [x: string]: any;
  cart_value: number = 0;
  cart_items_list: Array<any> = [];
  


  constructor() { }
}
