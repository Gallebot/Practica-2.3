import mongoose from "mongoose";


const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    mvp: {
        type: String,
    },
    kda: {
        type: Number,
    },
    stat: {
        type: String,
    }
});

const PlayerModel = mongoose.model("Player", PlayerSchema); 
export default PlayerModel; 