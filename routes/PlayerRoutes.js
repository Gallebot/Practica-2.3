import express from "express";
import PlayerModel from "../models/player.js";
const router = express.Router();

router.get("/players", async (request, response) => {
    try {
        const player = await PlayerModel.find({}); 
        response.send(player);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.post("/players", async (request, response) => {
    const player = new PlayerModel(request.body); 
    try {
        await player.save();  
        response.send(player); 
    } catch (error) {
        response.status(500).send(error);
    }
});


router.get("/players/:id", async (request, response) => {  
    try {
        const player = await PlayerModel.findOne({ _id: request.params.id }); 
        response.send(player);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;