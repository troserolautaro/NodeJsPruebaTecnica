import {Schema,Prop, SchemaFactory} from '@nestjs/mongoose'
@Schema()
export class Editorial{

    @Prop()
    nombre: string;

    @Prop()
    direccion: string;

    @Prop()
    cuit: string;

}
export const EditorialSchema = SchemaFactory.createForClass(Editorial);