import express from "express";

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => res.send("Hey, Congratualtions for completing set up!"));

app.listen(PORT, () => console.log(`⚡Server is running at 👉 https://localhost:${PORT}`));
