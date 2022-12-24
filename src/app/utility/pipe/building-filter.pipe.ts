import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'buildingFilterPipe'
})
export class BuildingFilterPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {

    console.log(value, args)

    const building = Array.from(new Set(value.map(m => m.buildingData.id)))
      .map(id => {
      return {
        buildingName:  Array.from(new Set(value.filter(m => m.buildingData.id === id)))[0],
        rooms: value.filter(rooms => rooms.buildingData.id === id)
      }
      })

    console.log(building)


    return value.filter(rooms => rooms.buildingData.id === args[0] && rooms.roomState === args[1])
  }

}
