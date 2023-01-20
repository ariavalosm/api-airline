import { Injectable } from '@nestjs/common';
import { user } from "./interfaces/user"

@Injectable()
export class UsersService {

  users : user[] = [
    {
      id: 1,
      name: "Arianna",
      lastname: "Avalos",
      nationality: "Peruana",
      doctype: "DNI",
      docnumber: 1234567
    },
    {
      id: 2,
      name: "Arianna",
      lastname: "Avalos",
      nationality: "Peruana",
      doctype: "DNI",
      docnumber: 1234567
    },
    {
      id: 3,
      name: "Arianna",
      lastname: "Avalos",
      nationality: "Peruana",
      doctype: "DNI",
      docnumber: 1234567
    },
  ];

  getUsers() :user[]{
    return this.users;
  }

  getUser(id) :user{
    return this.users.find(user => user.id === id);

  }
}
