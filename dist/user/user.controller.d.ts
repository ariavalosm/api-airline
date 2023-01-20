import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    getUsers(): {
        hello: string;
    };
    createUser(user: CreateUserDto): string;
    deleteUser(id: any): string;
    updateUser(user: CreateUserDto, id: any): string;
}
