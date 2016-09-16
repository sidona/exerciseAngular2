/**
 * Created by sdonose on 9/16/2016.
 */
import {NgModule} from "@angular/core";
import {WidgetOne} from "./widget-one.component";
import {CommonModule} from "@angular/common";
import {WidgetTwo} from "./widget-two.component";

@NgModule({
  imports:[CommonModule],
  declarations:[WidgetOne,WidgetTwo],
  exports:[WidgetOne,WidgetTwo,CommonModule]
})

export class WidgetModule{}
