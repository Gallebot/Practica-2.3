import express from "express";
import TeamModel from "../models/team.js";
const router = express.Router();

router.get("/teams", async (request, response) => {
    try {
        const team = await TeamModel.find({}); 
        response.send(team);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.post("/teams", async (request, response) => {
    const team = new TeamModel(request.body); 
    try {
        await team.save();  
        response.send(team); 
    } catch (error) {
        response.status(500).send(error);
    }
});


router.get("/teams/:id", async (request, response) => {  
    try {
        const team = await TeamModel.findOne({ _id: request.params.id }); 
        response.send(team);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;