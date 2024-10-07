import express from "express";
import dotenvConfig from "dotenv";
import mongoconnect from "./database/mongo.connection.js";
import Routes from "./routers/product.routes.js";

let port = 3000

const app = express()
mongoconnect()
app.use(express.json())
app.use("/api", Routes)

app.listen(port, () =>{console.log(`servidor corriendo en http://localhost:${port}`);

})
