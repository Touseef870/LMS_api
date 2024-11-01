import UserModel from "../models/userSchems.js";
import jwt from "jsonwebtoken";

export default async function signup(req, res) {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const user = await UserModel.findOne({ email: email })
    if (user) {
        return res.status(403).json({ success: false, message: "User Already Exists" })
    }

    const newUser = new UserModel({
        fullName: fullName,
        email: email,
        password: password
    });
    try {
        await newUser.save();
        console.log("User created successfully");
    } catch (error) {
        if (error.name === 'ValidationError') {
            console.error("Validation Error:", error.message);
            return res.status(400).json({ success: false , message: error.message })
        } else {
            console.error("Error creating user:", error);
            return res.status(400).json({ success: false , message: error })
        }
    }


    const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_KEY);

    console.log("user=>", user)

    
    return res.status(200).json({ success: true, message: "User Added Successfully", user: newUser, token });
}
