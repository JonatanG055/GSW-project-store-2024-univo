import mongoose from "mongoose";


let URLDATABASE = "mongodb+srv://ezequielcampos:ztS6lmMktAWn62sO@cluster0.06meydb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


const mongoconnect = async () => {
    
    try {
        
        await mongoose.connect(URLDATABASE)

        console.log("conexion exitosa a la base de datos");
        

    } catch (error) {
        console.error(error);
        
    }

}

export default mongoconnect