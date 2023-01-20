import { Controller, Get , Post , Put , Delete } from '@nestjs/common';

@Controller('user')
export class UserController {
  
  @Get()
  getUsers(): string{
    return "hello users";
  }

  @Post()
  createUsers(): string{
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
