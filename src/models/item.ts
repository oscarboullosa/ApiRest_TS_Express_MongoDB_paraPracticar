import{Schema,Types,model,Model} from "mongoose";
import { Car } from "../interfaces/car.interface";

const ItemSchema=new Schema<Car>(
    {//en este primer objeto defino las propiedades que voy a utilizar
        name:{
            type:String,
            required:true,
        },
        color:{
            type:String,
        },
        gas:{
            type:String,
            enum:["gasoline","electric"],//Con esto le estoy diciendo que solo acepta datos de tipo string, pero además los dos unicos strings que admite son gasoline y electric
        },
        year:{
            type:Number,
        },
        description:{
            type:String
        },
        price:{
            type:Number,
        },
    },//Pero este esquema no se está implementando en ningún sitio. Para implementarlo vamos a crear un modelo
    {
        timestamps:true,//cuando se guarde un dato en la BBDD (un documento en la colección), automáticamente se crearán dos propiedades. Una es la fecha de creación y otra es la fecha de actualización
        versionKey:false, //mongoose guarda el dato por version (como dato version 1, dato version 2...). En este caso le digo que no lo voy a utilizar
    }
);

const ItemModel=model("items",ItemSchema);//Un modelo recibe de entrada dos datos: Un string y un esquema. El string que debemos poner es el nombre del modelo en la base de datos. El nombre que va a tener la colección en la BBDD
export default ItemModel;