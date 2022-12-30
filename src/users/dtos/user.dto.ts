import { IsInt, IsNotEmpty, IsOptional, IsString, isString } from "class-validator";

export class UserDto{
    @IsNotEmpty()
    @IsInt()
    id: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    address?: string;
    age?: number;
}


//First check if an obj is given then convert it to the nested object
//type and then validate that type
//IsObject()
//@Type(()=>TypeOfNestedObj)
//@ValidateNested()

//@IsIn()
//@ArrayMinSize()