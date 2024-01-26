import { IsNotEmpty, IsString, Matches, isString } from "class-validator";

export class CrearEditorialDto{
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    direccion: string;

    @IsString()
    @Matches(new RegExp ("^[0-9]{2,2}-[0-9]{1,3}.?[0-9]{3,3}.?[0-9]{3,3}-[0-9]{1,1}$"),{message :'Cuit no valido'})
    @IsNotEmpty()
    cuit: string;

}