import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UsersService } from './user/user.service';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [UserModule, MongooseModule ],
  controllers: [AppController, UserController],
  providers: [AppService, UsersService],
})
export class AppModule {}
