//Este va a ser nuestro archivo principal, nuestro archivo "index" de toda la aplicación
import "dotenv/config"//lo ponemos de primero para que nuestro proyecto empiece a aplicar las variables de entorno
import express from "express"
import cors from "cors";
import {router} from "./routes";
import db from "./config/mongo";
const PORT= process.env.PORT || 8000;//La express, como infraestructura/paquete/librería, tiene que inicializar en un puerto TCP, en concreto en el puerto que nosotros le especifiquemos
//En la fila 5 lo que estamos diciendo es que asigne el puerto a una variable de entorno que se llama PORT o de lo contrario, si no existe, que le asigne el puerto 3001.
//Para que esa variable de entorno exista, tenemos que crear un archivo en raíz que se llame .env 
//Le voy a poner un puerto fijo pq yo creo que es mas sencillo
const app=express();
app.use(cors());//le decimos a la app que haga uso de los cors. Esto es para evitar el problema de los cors. Básicamente es el origen cruzado de los cursos. Si se quiere saber más ver: https://www.youtube.com/watch?v=YfN9hElekuM&ab_channel=LeiferMendez
//Si lo hacemos de esta manera, le estamos indicando a nuestra API que puede ser consumida por cualquier origen. Esto es básicamente un tema de seguridad, porque también se podrían especificar orígenes concretos como por ejemplo:
//origin:['http://localhost:4200]
app.use(express.json()); //Sin esto no funcionarían los controladores, es para que se reciban datos en formato json por el body
app.use(router);
//Una vez hecho esto, le vamos a decir a nuestra aplicación que viva en el puerto que hemos configurado
db().then(()=> console.log("Conexion Ready"));//Una vez funciona la conexion con la BBDD, vamos a las interfaces
app.listen(PORT, ()=>console.log(`Listo por el puerto: ${PORT}`));