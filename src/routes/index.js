import { Router } from "express";
import login from "../Authentication/login.js";
import signup from "../Authentication/signup.js";
import AddProducts from "../Products/AddProducts.js";
import GetAllProducts from "../Products/GetAllProducts.js";

const router = Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/addProducts', AddProducts)
router.get('/getAllProducts', GetAllProducts)

export default router