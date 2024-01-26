import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Autor } from './autor.schema';
import { ActualizarAutorDto } from './dto/actualizar-autor-dto';
import { CrearAutorDto } from './dto/crear-autor-dto';

@Injectable()
export class AutorService {
    constructor(
        @InjectModel(Autor.name) private AutorModel: Model<Autor>){}
    async create(autor: CrearAutorDto) {
        try {
            const autorCreado = new this.AutorModel(autor);
            return autorCreado.save();
        } catch (error) {
            throw new HttpException('Error en la creacion del autor',HttpStatus.INTERNAL_SERVER_ERROR);
        }
       
    }
    
    async get(){
        const autores =  await this.AutorModel.find();   
        return {autores} 
    }
 
    async delete(idaBorrar: string){
        try {
           const autorEliminado = await this.AutorModel.findByIdAndDelete(idaBorrar);
           return autorEliminado ?  {message: "Autor eliminado correctamente",autorEliminado} :  {message: 'No se ha encontrado el autor'}
        } catch (error) {
            throw new HttpException('Error en la busqueda del autor a eliminar',HttpStatus.INTERNAL_SERVER_ERROR);
        }
       
    }
    async patch(Campos: ActualizarAutorDto,idAActualizar: string){
       try {
        const autorActualizado = await this.AutorModel.findByIdAndUpdate(idAActualizar,Campos,{returnDocument:'after'});
        return autorActualizado? {message: "Autor actualizado correctamente",autorActualizado} :  {message: 'No se ha encontrado el autor'} 
       } catch (error) {
        throw new HttpException('Error en la busqueda del autor a actualizar',HttpStatus.INTERNAL_SERVER_ERROR);
       }
        
       
        
    }
    async findById(idABuscar:string){
        return this.AutorModel.findById(idABuscar)
    }
}
