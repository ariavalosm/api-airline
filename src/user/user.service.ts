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
    }

  ];
}
