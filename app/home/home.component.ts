/**
 * Created by sdonose on 9/16/2016.
 */
import {Component} from "@angular/core";
import {SimpleService} from "../services/service.module";

@Component({
  selector:'home',
  template:`<div>a component</div>
  <div>{{simpleService.message}}</div>
  <widget-one [message]="simpleService.message"></widget-one>
  <widget-one [message]="'hello world'"></widget-one>
  <widget-two></widget-two>`
})

export class HomeComponent{
  constructor(private simpleService:SimpleService){

  }
}
