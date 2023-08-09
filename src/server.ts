import express from "express";

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => res.send("Hello, Congratualtions for completing set up!"));

app.listen(PORT, () => console.log(`⚡Server is running here 👉 https://localhost:${PORT}`));