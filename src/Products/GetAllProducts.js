import AddProductsModel from "../models/productsAddSchemas.js"

export default async function GetAllProducts(req, res) {

    const allProducts = await AddProductsModel.find()
    if (!allProducts) {
       return res.status(400).json({ success: false, message: "Not Get Products" })
    } 

    return res.status(200).json({ success: true, message: "Successfully Get All Products", product: allProducts })
}