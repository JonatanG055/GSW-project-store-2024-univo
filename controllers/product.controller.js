import productModel from "../models/product.model.js";

const createNewProduct = async (req, res) => {
    const { nombre, precio, disponibilidad } = req.body;

    try {
        let crearProducto = new productModel({ nombre, precio, disponibilidad });
        await crearProducto.save();
        res.status(201).json({
            mjs: "producto creado exitosamente",
            crearProducto
        });
    } catch (error) {
        console.error("Error al crear el producto:", error);
        res.status(500).json({ mjs: "Error al crear el producto" });
    }
}

export default createNewProduct;
