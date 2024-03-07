import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibroModule } from './libro/libro.module';
import { AutorModule } from './autor/autor.module';
import { EditorialModule } from './editorial/editorial.module';


@Module({
  imports: [MongooseModule.forRoot(
    'mongodb+srv://troserolautaro:password@cluster.s2d8u8m.mongodb.net/Libreria?retryWrites=true&w=majority'),
    LibroModule,
    AutorModule,
    EditorialModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
