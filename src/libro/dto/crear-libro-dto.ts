import { HttpException, HttpStatus } from "@nestjs/common";
import { Transform } from "class-transformer";
import { IsArray, IsDateString, IsMongoId, IsNotEmpty, IsOptional, IsString, Matches, matches } from "class-validator";

export class CrearLibroDto{
  
    @IsNotEmpty()
    @IsArray()
    @IsMongoId({each: true})
    autor: string[];

    @IsNotEmpty()
    @IsString()
    @IsMongoId()
    editorial: string;

    @IsNotEmpty()
    @IsString()
    titulo: string;

    @IsOptional()
    @IsString()
    categoriaLiteraria: string;

    @IsNotEmpty()
    @IsString() 
    precio: string;

    @IsNotEmpty()
    @Transform(({value})=>{

        if(!matches(value,new RegExp(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2,4}$/))){
            throw new HttpException ("Formato de fecha invalida",HttpStatus.BAD_REQUEST)
        }

        const fechaIso = new Date(value)
        if(isNaN(fechaIso.getTime())){
            throw new HttpException ("Fecha no existente",HttpStatus.BAD_REQUEST)
        }
        return fechaIso.toISOString();
    })
    fechaLanzamiento: string;

    @IsOptional()
    @IsString()
    descripcion: string;
}