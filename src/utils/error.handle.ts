//Manejador de errores
import { Response } from "express";
const handleHttp=(res:Response,error:string)=>{
    res.status(500);
    res.send({error});//devuelvo un objeto error, sería como poner error:error, pero como tienen el mismo nombre puedo simplificarlo
};
export{handleHttp};