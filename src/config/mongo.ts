import "dotenv/config";//Importamos las variables de entorno
import {connect} from "mongoose";//la función de connect viene de mongoose

async function dbConnect(): Promise<void>{
    const DB_URI=<string>process.env.DB_URI;//Necesitamos una variable nueva que se llama DB_URI. Esta variable hace referencia a lo que es el string para conectarnos al Mongo. Tenemos que ir al archivo .env y crear la misma variable
    await connect(DB_URI);
}

export default dbConnect;

//mongoose funciona a traves de esquemas. Un es una representacion de los datos que se van almacenar en la BBDD