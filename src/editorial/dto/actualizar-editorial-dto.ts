import { IsNotEmpty, IsString, Matches } from "class-validator";

export class ActualizarEditorialDto{
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    direccion: string;
    
    @IsString()
    @Matches(new RegExp (/^[0-9]{2,2}-[0-9]{1,3}.?[0-9]{3,3}.?[0-9]{3,3}-[0-9]{1,1}$/gm),{message :'Cuit no valido'})
    @IsNotEmpty()
    cuit: string;
}