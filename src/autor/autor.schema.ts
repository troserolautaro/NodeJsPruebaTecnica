import {Schema,Prop, SchemaFactory} from '@nestjs/mongoose'
@Schema()
export class Autor{

    @Prop()
    nombre: string;

    @Prop()
    apellido: string;

    @Prop()
    dni: string;

    @Prop()
    nacionalidad: string;

}
export const AutorSchema = SchemaFactory.createForClass(Autor);