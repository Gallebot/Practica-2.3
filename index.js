import express from "express";
import dotenv from 'dotenv';
import DB from "./config/db.js";
import ProductRouter from "./routes/ProductRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
console.log(port);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Funcionamiento correcto de postman 
app.use("/api", ProductRouter);  //archivos y clases de ruteo. Se crea una ruta base. Se le pasa como parámetro los archivo de rutas que segeneran para cada una de las entidades
                                    
DB.connectDB(process.env.DB_URI);

app.get("/", (req,res) => {
    res.send("Hola bienvenidos")
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
