import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Libro,LibroSchema} from './libro.schema';
import { LibroService } from './libro.service';
import { LibroController } from './libro.controller';
import { EditorialService } from 'src/editorial/editorial.service';
import { AutorService } from 'src/autor/autor.service';
import { Autor, AutorSchema } from 'src/autor/autor.schema';
import { EditorialSchema,Editorial } from 'src/editorial/editorial.schema';
@Module({
    imports: [
        MongooseModule.forFeature([
        {
            name: Libro.name,
            schema: LibroSchema,

        },
        {
            name: Autor.name,
            schema: AutorSchema,
        },
        {
            name: Editorial.name,
            schema: EditorialSchema,
        }
        ]),
    ],
    providers: [LibroService,AutorService,EditorialService],
    controllers: [LibroController],
})
export class LibroModule {}
