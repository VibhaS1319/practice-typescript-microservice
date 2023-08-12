import express from "express";
import bookRoute from './router/bookRoute';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 4000;
const databaseUrl: string = 'mongodb://127.0.0.1:27017/test';

app.use('/api', bookRoute);

app.get("/", (req, res) => res.send("Hey, Congratualtions for completing set up!"));
mongoose.connect(databaseUrl).then(()=>{
    console.log("mongo DB connected successfully");
    }).catch((err)=>{
        console.log(err);
    });
app.listen(PORT, () => console.log(`⚡Server is running at 👉 http://localhost:${PORT}`));
