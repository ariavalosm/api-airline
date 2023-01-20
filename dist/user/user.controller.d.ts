import { user } from "./interfaces/user";
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from "./user.service";
export declare class UserController {
    private userService;
    constructor(userService: UsersService);
    getUsers(): user[];
    createUser(user: CreateUserDto): string;
    deleteUser(id: any): string;
    updateUser(user: CreateUserDto, id: any): string;
}
