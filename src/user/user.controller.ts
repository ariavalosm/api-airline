import { Controller, Get , Post , Put , Delete, Body, Param , Req , Res} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';


@Controller('user')
export class UserController {
  
  @Get()
  getUsers():{hello: string}{
    return {"hello": "world"} ;
  }
   
  

  @Post()
  createUser(@Body() user: CreateUserDto): string{
    return "hello";
  }

  @Delete(":id")
  deleteUser(@Param("id") id): string{
    console.log(id);
  return `deleting users: ${id}`;
  }

  @Put(":id")
  updateUser(@Body() user: CreateUserDto , @Param("id") id): string{
    console.log(user)
    console.log(id)
    return "invocando users";
  }

  
}
