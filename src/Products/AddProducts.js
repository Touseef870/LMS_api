import AddProductsModel from "../models/productsAddSchemas.js";

async function AddProducts(req, res) {

    const { title, description, image, amount, quantity, category } = req.body

    if (!title || !description || !image || !amount || !quantity || !category) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    let products = new AddProductsModel({
        title,
        description,
        image,
        amount,
        quantity,
        category
    })
    try {
        await products.save()
    }catch(e){
        return res.status(400).json({success: false, message: e.message})
    }

    return res.status(200).json({ success: true, message: "Products Added Successfully", products });
}

export default AddProducts;
