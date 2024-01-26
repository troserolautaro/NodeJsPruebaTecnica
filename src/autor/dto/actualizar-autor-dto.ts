import { IsOptional, Matches } from "class-validator";

export class ActualizarAutorDto{
    @IsOptional()
    nombre: string;
    
    
    @IsOptional()
    apellido: string;

    @IsOptional()
    @Matches(new RegExp ('^[0-9]{1,3}.?[0-9]{3,3}.?[0-9]{3,3}$'),{message :'Dni no valido'})
    dni: string;


    @IsOptional()
    precio: string;

    @IsOptional()
    nacionalidad: string;
}