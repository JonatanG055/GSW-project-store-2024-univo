import dotenv from "dotenv"; // Cambiado de require a import
import express from "express"; // Cambiado de require a import
import mongoconnect from "./database/mongo.connection.js"; // Cambiado de require a import
import Routes from "./routers/product.routes.js"; // Cambiado de require a import

// Configurar dotenv para usar variables de entorno
dotenv.config();

let port = process.env.PORT || 3000;

const app = express();
mongoconnect();

// Middleware para manejar JSON
app.use(express.json());
app.use("/api", Routes);

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente");
});
