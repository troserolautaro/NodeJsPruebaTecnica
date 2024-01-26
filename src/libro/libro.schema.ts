import {Schema,Prop, SchemaFactory} from '@nestjs/mongoose'
import { Exclude } from 'class-transformer';

@Schema()
export class Libro{


    @Prop()
    autor: string[];


    @Prop()
    editorial: string;
    
    @Prop()
    titulo: string;

    @Prop()
    categoriaLiteraria: string;

    @Prop()
    precio: string;

    @Prop()
    fechaLanzamiento: string;

    @Prop()
    descripcion: string;


}
export const LibroSchema = SchemaFactory.createForClass(Libro);