import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Room3Component } from './room3/room3.component';
import { Room4Component } from './room4/room4.component';
import { Room5Component } from './room5/room5.component';
import { Room2Component } from './room2/room2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SqlComponent } from './sql/sql.component';
import { GraphService } from './graph.service';
import { MatToolbarModule,MatCardModule, MatIconModule,MatInputModule, MatSidenavModule, MatListModule, MatButtonModule, } from  '@angular/material';
import { BasicComponent } from './basic/basic.component';
import { CartComponent } from './cart/cart.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { BootComponent } from './boot/boot.component';
import { FirstclassComponent } from './firstclass/firstclass.component';

@NgModule({
  declarations: [
    AppComponent,
    Room3Component,
    Room4Component,
    Room5Component,
    Room2Component,
    SqlComponent,
    BasicComponent,
    CartComponent,
    ShoppingComponent,
    BootComponent,
    FirstclassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,






  
  
  
  ],
  providers: [GraphService],
  bootstrap: [AppComponent]
})
export class AppModule { }
