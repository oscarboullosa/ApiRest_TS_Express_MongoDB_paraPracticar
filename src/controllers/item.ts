//¿Qué es un controlador y cuál es la función de un controlador?
//Un controlador forma la orquestación entre infraestructura y lógica de negocio. Es decir, el controlador solo debe enterarse de las cosas que vienen por http (Request y response)
//El controlador no es un elemento al que haya que aplicar lógica, simplemente actúa como petición-respuesta


import { Request,Response } from "express";
import { insertCar,getCars,getCar,updateCar,deleteCar} from "../services/item";
import { handleHttp } from "../utils/error.handle";
const getItem=async({params}:Request,res:Response)=>{//Estas funciones reciben los argumentos de nuestro express
    try{
        const {id}=params;
        const response=await getCar(id);//Acordarse de que tengo que pasarle un parametro!!!
        const data=response ? response:"NOT_FOUND";//Si existe, vamos a devolver response o de lo contrario, devolveremos response="NOT_FOUND"
        res.send(data);
    } catch(e){
        //res.status(500);
        //res.send("ERROR_GET_ITEM");//Esto estaría bien, pero lo podríamos hacer de una forma mejor. Para ello, creamos la carpeta Handle y el archivo error.handle.ts
        handleHttp(res,"ERROR_GET_ITEM");//a la función handleHttp le tengo que pasar una respuesta y un error (de tipo string)
    }
};

const getItems=async(req:Request,res:Response)=>{
    try{
        const response=await getCars();
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_ITEMS");
    }
};

const updateItem=async ({params,body}:Request,res:Response)=>{//Le paso el id (params) y el Car (body)
    try{
        const {id}=params;
        const response=await updateCar(id,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_ITEM");
    }
};

const postItem=async ({body}:Request,res:Response)=>{//con esto digo que quiero agarrar un dato que viene de body
    try{
        const responseItem=await insertCar(body);
        res.send(responseItem);//es para asegurarnos de que todo funciona bien. Ahora mismo no funcionaría, falta que le indiquemos los controladores a nuestra ruta
    } catch(e){
        handleHttp(res,"ERROR_POST_ITEM");
    }
};

const deleteItem=async ({params}:Request,res:Response)=>{
    try{
        const {id}=params;
        const response=await deleteCar(id);//Acordarse de que tengo que pasarle un parametro!!!
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_ITEM");
    }
};
export{getItem,getItems,postItem,updateItem,deleteItem};