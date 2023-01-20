import { enumBooleanBody } from '@babel/types';
import { Controller, Get , Post , Put , Delete, Body, Param } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  
  @Get()
  getUsers():{hello: string}{
    return {"hello": "world"} ;
  }

  @Post()
  createUsers(@Body() user: CreateUserDto): string{
    return "hello";
  }

  @Delete(":id")
  deleteUsers(@Param("id") id): string{
    console.log(id);
  return `deleting users: ${id}`;
  }

  @Put(":id")
  updateUsers(@Body() user: CreateUserDto , @Param("id") id): string{
    console.log(user)
    console.log(id)
    return "invocando users";
  }

  
}
