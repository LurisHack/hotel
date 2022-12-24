import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'buildingFilterPipe'
})
export class BuildingFilterPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {

    console.log(value, args)
    let tempAry: any = []

    if (args[0] === 'All'){
      tempAry = value
    }else {
      tempAry = value.filter(rooms => rooms.roomState === args[0])
    }

    console.log(tempAry)

    return  Array.from(new Set(tempAry.map((m: any) => m.buildingData.id)))
      .map((id: any) => {

        console.log(id)
        console.log((<any>Array.from(new Set(tempAry.filter((m: any) => m.buildingData.id === id)))[0]).buildingData.name)

        return {
        buildingName:  (<any>Array.from(new Set(tempAry.filter((m: any) => m.buildingData.id === id)))[0]).buildingData.name,
        rooms: value.filter(rooms => rooms.buildingData.id === id)
      }
      })
   }

}
