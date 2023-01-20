import { user } from "./interfaces/user";
export declare class UsersService {
    users: user[];
    getUsers(): user[];
    getUser(id: any): user;
}
