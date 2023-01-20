import { Injectable } from '@nestjs/common';
import { user } from "./interfaces/user"

@Injectable()
export class UserService {

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

  getUsers(){
    return this.users;
  }

  getUser(id){
    return this.users.find(user => user.id === id);

  }
}
