import {Router} from "express";
import {readdirSync} from "fs";
const PATH_ROUTER=`${__dirname}`;//Nos va a devolver la ruta de directorio actual. Esto quiere decir que en este caso nos va a devolver lo que es src, routes, index.ts... 
const router=Router();
const cleanFileName=(fileName:string)=>{//la funcion recibe un fileName que va a ser de tipo string
    const file=fileName.split(".").shift();//Con split corto el string cuando me encuentro un punto y devuelve un array (El array resultante: ['item','ts']) a la que le aplico shift. Shift elimina el primer elemento de un array y lo devuelve, por lo que la salida sería el 'item'
    return file;
};//En la funcion cleanFileName entra, por ejemplo "item.ts" y la salida es "item". Me quita el ".ts"
readdirSync(PATH_ROUTER).filter((fileName)=>{
    const cleanName=cleanFileName(fileName);
    if(cleanName!=="index"){//No quiero tener el índex, de esta forma no lo estoy cogiendo, solo cojo el item
        import(`./${cleanName}`).then((moduleRouter)=>{//quiero que importe el archivo. Devuelve una promesa que va a devolver el router, al que le llamamos moduleRouter (router que esta dentro de la ruta)
            console.log(`Se está cargando la ruta......${cleanName}`);//Si nosotros queremos crear otra ruta, simplemente creamos otro archivo y ponemos el mismo codigo que item (el nombre del archivo es el nombre de la ruta)
            router.use(`/${cleanName}`,moduleRouter.router)//llamo al router principal "router" y le digo que haga uso del nombre de esa ruta y que implemente el moduleRouter.router. Tengo que poner el .router porque en items lo estoy exportando en un objeto, asi que aqui lo agarramos y moduleRouter es un hijo del router
        });
        //router.use(`/${cleanName}`) //Aquí le estoy diciendo al enrutador que siga la ruta de item
        //console.log(cleanName);//me devuelve el nombre de todos los archivos dentro de "routes" (menos index porque lo quite arriba)
    }
});//se encarga de leer cuantos archivos y cuales son los archivos que existen en x directorio. Esto basicamente escanea los archivos que existen dentro de un directorio (en este caso el de rutas)
export {router};


//Con este código estoy teniendo un cargador dinámico de rutas, en el que cada ruta es el nombre del archivo
//Una vez terminamos esto, nos enfocamos en cada una de las rutas