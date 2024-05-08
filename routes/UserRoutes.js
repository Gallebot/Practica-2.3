import express from "express";
import UserModel from "../models/user.js";
const router = express.Router();

//
router.get("/users", async (request, response) => { 
    try {
        const users = await UserModel.find({}); 
        response.send(users);
    } catch (error) {
        response.status(500).send({ error });
    }
});

//Crear un nuervo usuario
router.post("/users", async (request, response) => {
    const user = new UserModel(request.body); 

    try {
        await user.save();  
        response.send(user); 
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/users/:id", async (request, response) => { 
    try {
        const user = await UserModel.findOne({ _id: request.params.id }); 
        response.send(user)
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;