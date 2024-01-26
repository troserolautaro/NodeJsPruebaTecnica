import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AutorService } from './autor.service';
import { CrearAutorDto } from './dto/crear-autor-dto';
import { ActualizarAutorDto} from './dto/actualizar-autor-dto';

@Controller('autor')
export class AutorController {
    constructor(private autorServicio: AutorService){}
    @Post()
    create(@Body() Autor: CrearAutorDto){
          return this.autorServicio.create(Autor);
        }
    @Get()
        get(){
            return this.autorServicio.get();
        }

    @Delete(':id')
        delete(@Param('id') idABorrar: string){
            return this.autorServicio.delete(idABorrar);
        }
    @Patch(':id')
        patch(@Body() Campos: ActualizarAutorDto,@Param("id") idAActualizar: string){
            return this.autorServicio.patch(Campos,idAActualizar);
        }
    
    
}

