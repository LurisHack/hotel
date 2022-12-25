export interface RoomDataModel {
  buildingData: {
    id: string;
    name: string;
  }
  id: string;
  name: string;
  roomState: string;
  roomType: {
    id: string;
    name: string;
  }
  stayData: {
    stayTimeLength:  {
      roomTypeId: string;
      packageType: string;
      price: number;
      hour?: number;
      startHour?: any;
      endHour?: any;
    },
  }[],
  usedData: {
    store: any[];
    restaurant: any[];
    foc: any[];
    damage: any[]
  },
  startTime: number;
  endTime: number
}
