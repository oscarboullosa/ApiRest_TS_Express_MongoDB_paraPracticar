//Este archivo va a ser el encargado de la logica de negocio. Es el encargado de que se conecte con la BBDD
import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const insertCar=async(item:Car)=>{//Aquí recibimos los datos que nosotros queremos (los datos que nos pasa el controlador)
    const responseInsert=await ItemModel.create(item);
    return responseInsert;
    
};//Estamos cogiendo los datos que deben cumplir con la interfaz de car, estamos insertando los datos en la BBDD y devolvemos la respuesta

const getCars=async()=>{
    const responseItem=await ItemModel.find({});
        return responseItem;
};

const getCar=async(id:string)=>{
    const responseItem=await ItemModel.findOne({_id:id});//Findone es para decirle que quiero obtener uno y que quiero obtenerlo por el id
        return responseItem;
};

const updateCar=async(id:string,data:Car)=>{//Evidentemente necesito el id del coche que quiero actualizar y todos los datos de ese coche
    const responseItem=await ItemModel.findOneAndUpdate(//FindoneAndUpdate es para decirle que quiero obtener uno y que quiero obtenerlo por el id, y actualizarlo. Hay mas funciones de este estilo (findOneAndDelete...)
        {_id:id},//Query, condicion de busqueda
        data,//datos que vamos a actualizar
        {
            new:true,//por defecto la funcion findOneAndUpdate retorna el documento que está ANTES de actualizarse (antes de que la actualización se aplique). Si tu pones new:true te da el documento DESPUES de actualizarse
        }
        );
        return responseItem;
};
const deleteCar=async(id:string)=>{
    const responseItem=await ItemModel.remove({_id:id});//Con esto le estoy diciendo que borre cuando el _id sea igual al id
        return responseItem;
}
export {insertCar,getCars,getCar,updateCar,deleteCar};