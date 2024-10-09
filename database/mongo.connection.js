import dotenv from "dotenv";
import mongoose from "mongoose";

// Configurar dotenv para usar variables de entorno
dotenv.config();

// URL de la base de datos desde MongoDB Atlas
const URLDATABASE = process.env.MONGO_URL || "mongodb+srv://jonatan:123@dbd.r6k7h5w.mongodb.net/productos?retryWrites=true&w=majority";

const mongoconnect = async () => {
    try {
        await mongoose.connect(URLDATABASE); // Elimina las opciones obsoletas
        console.log("Conexión exitosa a la base de datos MongoDB Atlas");
    } catch (error) {
        console.error("Error en la conexión a la base de datos:", error);
    }
}

export default mongoconnect;
