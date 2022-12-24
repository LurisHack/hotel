import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'roomListCreationPipe'
})
export class RoomListCreationPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {
    console.log(value)
    return value.filter(roomTypePackage =>  roomTypePackage.buildingData.id === args[0]);
  }

}
