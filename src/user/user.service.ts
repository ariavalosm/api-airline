import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./interfaces/user"

@Injectable()
export class UsersService {

  constructor(@InjectModel("datos")  userModel: Model<User>) {}

  getUsers(){
   
  }
  
}
