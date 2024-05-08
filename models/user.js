import mongoose from "mongoose";

//Esquema de la colección
const UserSchema = new mongoose.Schema({
    //Se definen los campos y el tipo de dato de cada campo y alguna validación
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

//Una vez creado el esquema se crea un modelo
//El modelo es objeto de mongoose y se va a comunicar con la base de datos
const UserModel = mongoose.model("User", UserSchema); //(Nombre de la colección, Esquema) Al nombre de la colección de la base de datos se le asigna un esquema
//Nota: El primer argumento está en mayúscula y singular, diferente al de la base de datos. Mongoose se encarga de la conversón
export default UserModel; //Uso para utilizarlo en otrs scrits y que se pueda importar el archivo