import mongoose from "mongoose";


const MatchSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
   
});

const MatchModel = mongoose.model("Match", MatchSchema); 
export default MatchModel; 