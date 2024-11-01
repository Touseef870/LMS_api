import UserModel from "../models/userSchems.js";
import jwt from "jsonwebtoken"

export default async function login(req, res){

    const { email, password } = req.body

    if(!email, !password){
        return res.status(400).json({success: false, message: "All fields are required"})
    }

    const loginUser = await UserModel.findOne({email : email, password: password})
    console.log("loginUser=>", loginUser)

    if(!loginUser){
        return res.status(400).json({success: false, message: "User Not Found"});
    }

    const token = jwt.sign({ id : loginUser._id, role: loginUser.role }, process.env.JWT_KEY);

    return res.status(200).json({ success: true, message: "User Login Successfully", loginUser , token });
}