import {Component, Input} from "@angular/core";

@Component({
  selector:'widget-one',
  styles:[`
  :host{
  display:block;
  border:3px dashed black;
  font-family:"Times New Roman";
  }
`],
  template:'<div>one widget' +
  '<h2>one message:</h2>' +
  '<h3>{{message}}</h3></div>'
})

export class WidgetOne{
  @Input() message;


}
