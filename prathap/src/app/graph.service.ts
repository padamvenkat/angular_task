import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor() { }
  getdata(){
    return [
      {"name":"venkat","age":27,"study":"btech"},
      {"name":"prakash","age":24,"study":"btech"},
      {"name":"alugunuri","age":29,"study":"btech"},
      {"name":"krishna","age":24,"study":"btech"},

    
    ];
  }
}
