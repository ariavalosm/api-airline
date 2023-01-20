import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    getUsers(): {
        hello: string;
    };
    createUsers(user: CreateUserDto): string;
    deleteUsers(id: any): string;
    updateUsers(user: CreateUserDto, id: any): string;
}
