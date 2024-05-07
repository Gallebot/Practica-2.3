import express from "express";
import dotenv from 'dotenv';
//import DB from "./config/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
console.log(port);

app.get("/", (req,res) => {
    res.send("Hola bienvenidos")
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


/*
import express from "express";
import dotenv from 'dotenv';
import DB from "./config/db.js";
import ProductRouter from "./routes/ProductRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
console.log(port);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", ProductRouter);  //Archivos de rutas para cada una de las entidades. Modelado por cada uno de los registros. rimer punto de mi ruta, se va concatenando
                                    
DB.connectDB(process.env.DB_URI);

app.listen(port, () => {
    console.log(Server running at http://localhost:${port});
});
*/