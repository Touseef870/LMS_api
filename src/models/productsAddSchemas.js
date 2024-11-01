import mongoose, { Schema } from "mongoose";

const AddProductsSchemas = new Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
        minlength: 10
    },
    image:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        default: 1
    },
    category:{
        type: String,
        required: true
    }
}, { timestamps: true })


const AddProductsModel = mongoose.model.Add_Products || mongoose.model("Add_Products", AddProductsSchemas)

export default AddProductsModel