import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'buildingFilterPipe'
})
export class BuildingFilterPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {

    console.log(value, args)

    return  Array.from(new Set(value.map(m => m.buildingData.id)))
      .map(id => {

        console.log(Array.from(new Set(value.filter(m => m.buildingData.id === id)))[0].buildingData.name)

      return {
        buildingName:  Array.from(new Set(value.filter(m => m.buildingData.id === id)))[0].buildingData.name,
        rooms: value.filter(rooms => rooms.buildingData.id === id)
      }
      })
   }

}
