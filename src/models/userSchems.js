import mongoose, { Schema } from "mongoose";

const userSchemas = new Schema({
    fullName: {
        type: String,
        required: true,
        minlength: 6,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    role:{
        type: String,
        default: "user"
    }

 }, { timestamps: true }
)

const UserModel = mongoose.models.user ||  mongoose.model("user", userSchemas)

export default UserModel