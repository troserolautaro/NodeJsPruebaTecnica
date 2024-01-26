import { Module } from '@nestjs/common';
import { AutorService } from './autor.service';
import { AutorController } from './autor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Autor, AutorSchema } from './autor.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
    {
        name: Autor.name,
        schema: AutorSchema,
    },
    ]),],
  providers: [AutorService],
  controllers: [AutorController],
  exports:[AutorService]
})
export class AutorModule {}
