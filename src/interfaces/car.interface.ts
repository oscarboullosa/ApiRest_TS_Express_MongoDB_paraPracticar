//Una interfaz es básicamente como un contrato. No tiene lógica de programación, es simplemente la declaración de una propiedad y un tipo de dato
export interface Car{
    color:string;
    gas:"gasoline"|"electric";
    year:number;
    description:string;
    price:number;
    name:String;
}//Después de esto vamos a los controladores