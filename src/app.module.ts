import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UsersService } from './user/user.service';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [UserModule, MongooseModule.forRoot(
    'mongodb+srv://ari-airline:xfPxLw6YxpYG2Nj0@airline-api.byb9q0b.mongodb.net/airlines-api?retryWrites=true&w=majority'
    ),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UsersService],
})
export class AppModule {}
