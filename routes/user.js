import express from "express";
import { body, validationResult } from "express-validator";
import { userController} from "../controllers/index.js";

const userRouter = express.Router();

// Activity ---> User object

userRouter.get('/', userController.getAllUsers); 

userRouter.get('/:id', async (req, res) => {
    res.send("Get users by user Id")
})

userRouter.post('/register',
    body("email").isEmail().withMessage("Please input format your email !"),
    body("password").isLength({ min: 8 }).withMessage("Please passwords must be at least 8 characters !!"),
    userController.register
)

userRouter.post('/login',
    body("email").isEmail().withMessage("Please input format your email !"),
    body("password").isLength({ min: 5 }).withMessage("Please passwords must be at least 5 characters !!"),
    userController.login
   
    )

userRouter.put('/edit', async (req, res) => {
    res.send("Edit an User")
})

export default userRouter;
