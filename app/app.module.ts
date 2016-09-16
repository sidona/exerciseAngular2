import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HomeModule} from "./home/home.module";

import { AppComponent }  from './app.component';
import {ServicesModule} from "./services/service.module";

@NgModule({
  imports: [ BrowserModule, HomeModule, ServicesModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
