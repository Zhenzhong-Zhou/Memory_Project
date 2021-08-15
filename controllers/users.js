import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user";

export const signin = async (req, res) => {
   const { email, password } = req.body;

   try {
       const exitingUser = await  User.findOne({ email });
       if (!exitingUser) return res.status(404).json({ message: "User doesn't exist." });

       const isPasswordCorrect = await  bcrypt.compare(password, exitingUser.password);
       if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });

       const token = jwt.sign({ email: exitingUser.email, id: exitingUser._id }, "test", { expiresIn: "1h" });

       res.status(200).json({ result: exitingUser, token});
   } catch (error) {
       res.status(500).json({ message: "Something went wrong." });
   }
};

export const signup = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
    }
};