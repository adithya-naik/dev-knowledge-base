import bcrypt from "bcryptjs"
import User from "../models/user.model.js"
import { generateToken } from "../config/tokenGenerate.js"

export const signUp = async (req, res) => {
  try {

    const { firstName, lastName, userName, email, password } = req.body

    if (!firstName || !lastName || !userName || !email || !password) {
      return res.status(400).json({ success: false, msg: "All input feilds are required" })
    }

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ success: false, msg: "User already Exists" })
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({ firstName, lastName, userName, email, password: hashPassword })
    const token = generateToken(newUser._id)

    // so to set this into a cookie this requires a package named cookie-parse middleware
    res.cookie("token", token, {
      // basically these options enables us to prevent others to stead this cookie via inspect
      // this is for http access only
      httpOnly: true,
      // this is to add s for http to become https
      // for localhost 
      // secure:false,
      // for production
      // secure:true,
      secure: process.env.NODE_ENV == "dev" ? false : true,
      // can be none,strict
      // none in production
      sameSite: "strict",
      // 7 days in milliseconds
      maxAge: 7 * 24 * 60 * 60 * 1000

    })
    return res.status(201).json({
      status: true,
      msg: "User Created  Successfully",
      user: {
        firstName, lastName, userName, email
      }
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false })
  }
}

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body
    let existingUser = await User.findOne({ email })

    if (!existingUser) {
      return res.status(400).json({
        success: false, msg: "No User found"
      })
    }

    let match = await bcrypt.compare(password, existingUser.password)

    if (!match) {
      return res.status(400).json({
        success: false, msg: "Credentials Invalid !"
      })
    }

    const token = generateToken(existingUser._id)

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV == "dev" ? false : true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    })

    res.status(200).json({
      status: true,
      msg: "User Logged in  Successfully",
      user: {
        firstName: existingUser.firstName, lastName: existingUser.lastName, userName: existingUser.userName, email: existingUser.email
      }
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false })

  }
}

export const Logout = async (req, res) => {
  try {
    res.clearCookie("token")
    res.status(200).json({
      success:true,
      msg:"Logged out successfully"
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false })

  }
}