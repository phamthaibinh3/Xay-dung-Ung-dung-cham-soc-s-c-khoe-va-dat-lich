import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from "./config/viewEngine";
import initWebRouter from './route/web';
import connectDB from '../src/config/connectDB'
import cors from 'cors'
require('dotenv').config();

let app = express();
app.use(cors({ credentials: true, origin: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRouter(app);

connectDB();

let port = process.env.PORT;
app.listen(port, () => {
    console.log("backend nodejs ddang chay tren port: " + port);
})