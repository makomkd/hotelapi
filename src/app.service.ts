import { Injectable } from '@nestjs/common';

import { Rooms } from './rooms';

@Injectable()
export class AppService {
  getRoomsList(): Rooms[] {
    return [
      {
        roomNum: 32,
        roomType: 'DeLuxe Room',
        amenities: 'A/C, Cable, Wi-fi',
        price: 500,
        rating: 3.5232,
        photos: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e',
        checkInTime: new Date('11-02-2023'),
        checkOutTime: new Date('18-02-2023')
      },
      {
        roomNum: 12,
        roomType: 'Two - bed Room',
        amenities: 'A/C, Cable, Wi-fi asdasdasdadadasdasd',
        price: 320,
        rating: 2.7896,
        photos: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39',
        checkInTime: new Date('11-02-2023'),
        checkOutTime: new Date('18-02-2023')
      },
      {
        roomNum: 5,
        roomType: 'Single - bed Room',
        amenities: 'A/C, Cable, Wi-fi, Kitchen, Balcony',
        price: 200,
        rating: 6.5,
        photos: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a',
        checkInTime: new Date('11-02-2023'),
        checkOutTime: new Date('18-02-2023')
      }
    ];
  }

  addRooms(rooms: Rooms): Rooms[] {
    return [
      ...this.getRoomsList(),
      rooms,
    ];
  }

  deleteRooms(roomNum: number): Rooms[] {
    return this.getRoomsList().filter(room => room.roomNum !== roomNum);
  }

  editRooms(rooms: Rooms): Rooms[] {
    return this.getRoomsList().map(room => {
      if (room.roomNum === rooms.roomNum) {
        return rooms;
      }
      return room;
    });
  }
}
