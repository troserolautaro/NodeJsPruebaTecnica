import { Controller,Post,Body, Patch, Delete, Param, Get } from '@nestjs/common';
import { EditorialService } from './editorial.service';
import { ActualizarAutorDto } from 'src/autor/dto/actualizar-autor-dto';
import { ActualizarEditorialDto } from './dto/actualizar-editorial-dto';
import { CrearAutorDto } from 'src/autor/dto/crear-autor-dto';
import { CrearEditorialDto } from './dto/crear-editorial-dto';

@Controller('editorial')
export class EditorialController {
    constructor(private editorialServicio: EditorialService){}
    @Post()
         create(@Body() editorial:CrearEditorialDto){
            return this.editorialServicio.create(editorial);
        }
    @Get()
         get(){
            return this.editorialServicio.get();
        }

    @Delete(':id')
        delete(@Param('id') idABorrar: string){
            return this.editorialServicio.delete(idABorrar);
        }
    @Patch(':id')
        patch(@Body() Campos: ActualizarEditorialDto,@Param("id") idAActualizar: string){
            return this.editorialServicio.patch(Campos,idAActualizar);
        }
}