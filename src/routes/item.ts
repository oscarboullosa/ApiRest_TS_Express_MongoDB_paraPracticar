import { Request, Response, Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";

const router = Router();//Es el manejador de las rutas, el que las interpreta, el que gestiona GET;POST...
/**
//  * esto significa que una persona tendría que visitar mi Endpoint como localhost:8001/items [GET]
//  */
//router.get("/", (req: Request, res: Response) => {//Antes después de la barra tenia /items. Se lo quite porque ahora el prefijo va a seguir el nombre del archivo de manera dinamica
 // res.send({ data: "AQUI_VAN_LOS_MODELOS" });
//});//el primer argumento es la ruta, el segundo argumento es una función. El request y el response sirven para tipar los datos req y res
//Ahora cambiamos un poco la funcion comentada de arriba pq ya hemos implementado los controladores
router.get("/",getItems);
router.get("/:id",getItem);//Aquí le estoy diciendo que me pase el id por parametro y le devuelvo el item. El nombre es muy importante, ya que tengo que usar el mismo nombre de id aquí que en el controlador!!
router.post("/",postItem);
router.put("/:id",updateItem);
router.delete("/:id",deleteItem);
export { router };
