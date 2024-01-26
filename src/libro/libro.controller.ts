import { Controller,Post,Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { LibroService } from './libro.service';
import { CrearLibroDto } from './dto/crear-libro-dto';
import { ActualizarLibroDto } from './dto/actualizar-libro-dto';

@Controller('libro')
export class LibroController {
    constructor(private libroServicio: LibroService){}
  @Post()
     create(@Body() libro:CrearLibroDto){
        return this.libroServicio.create(libro);
    }
    @Get()
     get(){
        return this.libroServicio.get();
    }
    @Get(":id")
        getById(@Param("id") idABuscar:string){
            return this.libroServicio.getBy(idABuscar);
        }
    @Delete(":id")
        delete(@Param("id") idAEliminar:string){
        return this.libroServicio.delete(idAEliminar);
    }
    @Patch(":id")
        patch(@Body() Campos: ActualizarLibroDto, @Param("id") idAActualizar:string){
            return this.libroServicio.patch(Campos,idAActualizar);
        }
    
}
