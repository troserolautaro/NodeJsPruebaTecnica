import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Libro } from './libro.schema';
import mongoose, { Model } from 'mongoose';
import { ActualizarLibroDto } from './dto/actualizar-libro-dto';
import { CrearLibroDto } from './dto/crear-libro-dto';
import { AutorService } from 'src/autor/autor.service';

import { EditorialService } from 'src/editorial/editorial.service';
@Injectable()
export class LibroService {
    constructor(
        @InjectModel(Libro.name) private libroModel: Model<Libro>,
        private autorServicio: AutorService,
        private editorialServicio: EditorialService){}
        
    async create(libro: CrearLibroDto) {
        for(const autor of libro.autor){
            const autorEncontrado = await this.autorServicio.findById(autor);
            if (!autorEncontrado){
                throw new HttpException('Un autor ingresado no se ha encontrado en la base de datos',HttpStatus.NOT_FOUND);
            }
        }
        const editorialEncontrada = await this.editorialServicio.findById(libro.editorial)
        if (!editorialEncontrada){
            throw new HttpException('La editorial ingresada no se ha encontrado en la base de datos',HttpStatus.NOT_FOUND);
        }
    

        const librocreado = new this.libroModel(libro);
        return librocreado.save();
    }

    async get(){
        const libros = await this.libroModel.find()
        return {libros}
    }
    // https://stackoverflow.com/questions/41093647/mongodb-join-on-id-field-from-string-to-objectid
    //https://stackoverflow.com/questions/55404207/toobjectid-for-arrrays-of-string-to-be-used-with-lookup-and-aggregate
    async getBy(idABuscar:string){
        const libroBuscado = await this.libroModel.aggregate([
            {$match: {_id: new mongoose.Types.ObjectId(idABuscar)}},
            {$project: {"editorial": {$toObjectId:"$editorial"},"titulo":1,"precio":1,"fechaLanzamiento":1,
            "autor":  {"$map": {
                "input": "$autor",
                "in": { "$toObjectId": "$$this" }
              }}}},
            {$lookup:{from: "autors",localField:"autor",foreignField:"_id", as: "Autores"}},
            {$lookup:{from: "editorials",localField:"editorial",foreignField:"_id",as:"Editorial"}}])
            return libroBuscado
    }

    async delete(idAEliminar: string){
        try {
            const libroEliminado = await this.libroModel.findByIdAndDelete(idAEliminar)
            return {libroEliminado}  
        } catch (error) {
            throw new HttpException('Error en la busqueda del libro a eliminar',HttpStatus.INTERNAL_SERVER_ERROR);
        }
       
    }

    async patch(Campos: ActualizarLibroDto,idAActualizar:string){
        try {
            const libroActualizado = await this.libroModel.findByIdAndUpdate(idAActualizar)
            return {libroActualizado}  
        } catch (error) {
             throw new HttpException('Error en la busqueda del libro a actualizar',HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
