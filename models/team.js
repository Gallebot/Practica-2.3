import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    about: {
        type: String,
    },
});

const TeamModel = mongoose.model("Team", TeamSchema); 
export default TeamModel; 