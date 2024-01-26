import { IsNotEmpty, IsString, Matches } from "class-validator";

export class CrearAutorDto{     
    @IsString()
    nombre: string;
    
    @IsString()
    @IsNotEmpty()
    apellido: string;

    @IsNotEmpty()
    @Matches(new RegExp ('^[0-9]{1,3}.?[0-9]{3,3}.?[0-9]{3,3}$'),{message :'Dni no valido'})
    dni: string;

    @IsString()
    @IsNotEmpty()
    precio: string;

    @IsString()
    nacionalidad: string;
}
