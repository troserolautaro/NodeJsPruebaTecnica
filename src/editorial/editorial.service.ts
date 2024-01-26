import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Editorial } from './editorial.schema';
import { Model } from 'mongoose';
import { ActualizarEditorialDto } from './dto/actualizar-editorial-dto';

@Injectable()
export class EditorialService {
    findById(editorial: string) {
        return this.EditorialModel.findById(editorial)
    }

    constructor(
        @InjectModel(Editorial.name) private EditorialModel: Model<Editorial>){}
    async create(editorial: any) {
        const editorialCreado = new this.EditorialModel(editorial);
        return editorialCreado.save();
    }

    async get(){
        try {
            const editoriales = this.EditorialModel.find()
            return editoriales
        } catch (error) {
            throw new HttpException('Error en la creacion del editorial',HttpStatus.INTERNAL_SERVER_ERROR);
        }
       
    }

    async delete(idAEliminar:string){
        try {
            const editorialEliminada = this.EditorialModel.findByIdAndDelete(idAEliminar);
            return editorialEliminada ?  {message: "Editorial eliminado correctamente",editorialEliminada} :  {message: 'No se ha encontrado la editorial para eliminar'}
        } catch (error) {
            throw new HttpException('Error en la eliminacion del editorial',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async patch(Campos: ActualizarEditorialDto,idAActualizar: string){
        try {
            const editorialActualizada = this.EditorialModel.findByIdAndUpdate(idAActualizar);
            return editorialActualizada ? {message: "Editorial actualizada correctamente", editorialActualizada} : {message: "No se ha encontrado la editorial para actualizar"}
        } catch (error) {
            throw new HttpException('Error en la actualizacion del editorial',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}
