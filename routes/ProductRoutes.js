import express from "express";
import ProductModel from "../models/product.js"; //En la carpeta models van todas las colecciones de la base de datos. Donde se debe generar un esquema y un modelo por colección
const router = express.Router(); //Acceder al objeto de ruteo

//Obtenemos todos los registros de la colección producto que existen
router.get("/products", async (request, response) => { //La ruta se agrega /api/products/
    try {
        const products = await ProductModel.find({}); //Este objeto es importado de un archivo en la parte de arriba. El método es un método para hacer query de mongoose
        //.find Enceuntra y obtiene todos los documento que coincidan con un selector definido. Si no hya selector. Tiene forma de objeto tipo JSON
        response.send(products);
    } catch (error) {
        response.status(500).send({ error });
    }
});


//Crear un nuervo producto
router.post("/products", async (request, response) => {
    const product = new ProductModel(request.body); //Se accede al cuerpo en request.body. El body viene como un objeto de tipo json, los datos que se deben emviar vienen en el product.js

    try {
        await product.save();
        response.send(product);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/products/:id", async (request, response) => {
    try {
        const product = await ProductModel.findOne({ _id: request.params.id });
        response.send(product);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;