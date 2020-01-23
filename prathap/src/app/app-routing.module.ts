import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Room2Component } from './room2/room2.component';
import { Room3Component } from './room3/room3.component';
import { Room4Component } from './room4/room4.component';
import { Room5Component } from './room5/room5.component';
import { BasicComponent } from './basic/basic.component';
import { CartComponent } from './cart/cart.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { BootComponent } from './boot/boot.component';
import { FirstclassComponent } from './firstclass/firstclass.component';

const routes: Routes = [
  {path:'room2',component:Room2Component},
  {path:'room3',component:Room3Component},
  {path:'room4',component:Room4Component},
  {path:'room5',component:Room5Component},
  {path:'basic',component:BasicComponent},
  {path:'cart',component:CartComponent},
  {path:'shopping',component:ShoppingComponent},
  {path:'boot',component:BootComponent},
  {path:'firstclass',component:FirstclassComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
