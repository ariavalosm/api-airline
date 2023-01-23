import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersService } from './user.service';
import { MongooseModule } from "@nestjs/mongoose";
import { DatosSchema } from "./schema/user.schema";

@Module({
  imports: [ MongooseModule.forFeature([
    { name: "Usuarios" , schema: DatosSchema}
  ])],
  controllers: [UserController],
  providers: [UsersService]
})
export class UserModule {}
