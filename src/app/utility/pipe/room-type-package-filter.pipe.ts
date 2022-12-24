import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'roomTypePackageFilter'
})
export class RoomTypePackageFilterPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {

    console.log(value, args)

    return value.filter(roomTypePackage =>  roomTypePackage.roomTypeId === args[0]);
  }

}
