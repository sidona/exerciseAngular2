/**
 * Created by sdonose on 9/16/2016.
 */
import {NgModule} from "@angular/core";
import {SimpleService} from "./simple.service";
@NgModule({})
export  class ServicesModule{
  static forRoot(){
    return{
      ngModule:ServicesModule,
      providers:[SimpleService]
    }
  }
}

export{
  SimpleService
}
