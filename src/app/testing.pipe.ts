import { Pipe, PipeTransform } from '@angular/core';
import {Observable} from "rxjs";

@Pipe({
   name: 'testing'
})
export class TestingPipe implements PipeTransform {

  transform(value: Observable<any>, ...args: any[]): any {

    console.log(value)
    return value.subscribe(s => console.log(s));
  }

}
