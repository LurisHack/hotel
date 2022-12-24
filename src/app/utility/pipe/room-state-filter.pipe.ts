import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'roomStateFilter'
})
export class RoomStateFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value;
  }

}
