import { Module } from '@nestjs/common';
import { EditorialService } from './editorial.service';
import { EditorialController } from './editorial.controller';
import { Editorial, EditorialSchema } from './editorial.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
    {
        name: Editorial.name,
        schema: EditorialSchema,
    },
    ]),
],
  providers: [EditorialService],
  controllers: [EditorialController],
  exports: [EditorialService]
})
export class EditorialModule {}
