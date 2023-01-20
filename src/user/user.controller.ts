import { Controller, Get , Post , Put , Delete, Body } from '@nestjs/common';

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


  @Put()
  updateUsers(): string{
    return "invocando users";
  }

  @Delete()
  deleteUsers(): string{
    return "retrieving users";
  }
}
