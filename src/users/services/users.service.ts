import { Inject, Injectable } from "@nestjs/common";
import { UserDto } from "../dtos/user.dto";

@Injectable()
export class UsersService{
    // constructor(@Inject('CONFIG_OPTIONS') config: Record<string, string>){
    //     console.log(config.env);
    // }
    getUsers(){
        return 'Users'
    }

    createUser(user: UserDto){
        return user;
    }

    deleteUser(id: string){
        return id;
    }

    updateUser(id: string, user: UserDto){
        return `${id} with ${user.age} has been updated` ;
    }
}