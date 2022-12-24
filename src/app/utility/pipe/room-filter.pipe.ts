import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'roomFilter'
})
export class RoomFilterPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {
    console.log(value, args)
    return value.filter(rooms => rooms.buildingId === args[0]);
  }

}
