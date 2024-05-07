import express from "express";
import dotenv from 'dotenv';
//import DB from "./config/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
console.log(port);