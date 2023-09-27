import User from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const login = async ({ email, password }) => {
    const userExisting = await User.findOne({ email }).exec()
    if (userExisting != null) {
        //SO SANH password dung de dang nhap voiw password cua email đang đăng nhap
        const isMatch = await bcrypt.compare(password, userExisting.password)
        if (isMatch == true) {
            // Tạo access token bằng JWT la key gom 3 thanh phan: 1-header 2-payload 3-secret_key
            const accessToken = jwt.sign(
                {
                    data: userExisting
                },
                process.env.SECRET_KEY_JWT,
                {
                    expiresIn: '2 Days'
                }
            )
            
            return {
                ...userExisting.toObject(),
                password: "Not show ~~~",
                token: accessToken
            }
        } else {
            throw new Error('Wrong email and password !!!')
        }



    } else {
        throw new Error("User does not exist !!!")
    }
}

const register = async ({
    name,
    email,
    password,
    phoneNumber,
    address
}) => {
    debugger
    const userExisting = await User.findOne({ email }).exec()
    if (userExisting != null) {
        throw new Error("User already exists")
    }

    // Encrypt the password
    const hashPassword = await bcrypt.hash(password, parseInt(process.env.SECRET_KEY))

    const newUser = await User.create({
        name,
        email,
        password: hashPassword,
        phoneNumber,
        address
    })

    // Clone a new user
    return {
        ...newUser._doc,
        password: "Not show !!!"
    }
}

const getAllUsers = async () => {
    try {
        const users = await User.find().exec();
        return users;
    } catch (error) {
        throw new Error(error.toString());
    }
};



export default { login, register, getAllUsers }
