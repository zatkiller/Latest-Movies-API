import "core-js/stable";
import "regenerator-runtime/runtime";

import express from "express";
import cors from "cors";
import movies from "./routes/movies";
import search from "./routes/search";

const app = express();
app.use(cors());

app.use("/movies", movies);
app.use("/search", search);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(5000, () => console.log("Server running on port 5000!"));
