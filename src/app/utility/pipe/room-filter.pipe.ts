import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'roomFilter'
})
export class RoomFilterPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {

    console.log(value, args)

    if (args[0] === 'All'){
      return  value
    }

    return value.filter(rooms => rooms.buildingData.id === args[0] && rooms.roomState === args[1])
  }

}
