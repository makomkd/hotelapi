import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';
import { v4 } from 'uuid';

@Injectable()
export class RoomsService {
  rooms: Room[] = [
    {
      roomNum: '1',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 4.5,
    },
    {
      roomNum: '2',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 3.45654,
    },
    {
      roomNum: '3',
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 15000,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 2.6,
    },
  ];
  create(createRoomDto: CreateRoomDto) {
    console.log(createRoomDto);
    createRoomDto.roomNum = v4();
    console.log(createRoomDto);
    this.rooms = [...this.rooms, createRoomDto];
    console.log(this.rooms);
    return this.rooms;
  }

  findAll() {
    return this.rooms;
  }

  findOne(id: string) {
    this.rooms.find((room) => room.roomNum === id);
  }

  update(id: string, updateRoomDto: UpdateRoomDto) {
    return this.rooms.map((room) => {
      if (room.roomNum === id) {
        return updateRoomDto;
      }
      return room;
    });
  }

  remove(id: string) {
    return this.rooms.filter((room) => room.roomNum !== id);
  }
}
