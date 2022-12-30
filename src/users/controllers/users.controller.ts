import { Body, Controller, Delete, Get, Param, Put, Post, UsePipes, ForbiddenException, ParseIntPipe, ValidationPipe } from "@nestjs/common";
import { UserDto } from "../dtos/user.dto";
import { UsersService } from "../services/users.service";
import { FreezePipe } from '../../pipes/freeze.pipe';

@Controller()
export class UsersController{

    constructor(private readonly usersService: UsersService){}

    @Get()
    getUsers(){
        return this.usersService.getUsers();
    }

    @Post()
    createUser(@Body(ValidationPipe) user: UserDto){
        return this.usersService.createUser(user);
    }

    @Put('/:id')
    // @UsePipes() //for multiple pipes
    updateUser(@Param('id', ParseIntPipe) id: string, @Body(new FreezePipe()) user: UserDto){
        // return this.usersService.updateUser(id, user);
        throw new ForbiddenException();
    }

    @Delete('/:id')
    deleteUser(@Param('id') id: string){
        // return this.usersService.deleteUser(id);
    }

}