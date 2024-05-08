import express from "express";
import MatchModel from "../models/match.js";
const router = express.Router();

router.get("/matches", async (request, response) => {
    try {
        const match = await MatchModel.find({}); 
        response.send(match);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.post("/matches", async (request, response) => {
    const match = new MatchModel(request.body); 
    try {
        await match.save();  
        response.send(match); 
    } catch (error) {
        response.status(500).send(error);
    }
});


router.get("/matches/:id", async (request, response) => {  
    try {
        const match = await MatchModel.findOne({ _id: request.params.id }); 
        response.send(match);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;