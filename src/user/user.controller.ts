import { Controller, Get , Post , Put , Delete, Body } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  
  @Get()
  getUsers(): string{
    return "hello users";
  }

  @Post()
  createUsers(@Body() user: CreateUserDto): string{
    console.log(user)
    return "creating users";
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
