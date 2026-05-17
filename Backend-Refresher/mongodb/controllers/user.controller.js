import User from "../models/user.model.js"

// CREATE USER
export const createUser = async (req, res) => {
  try {
    const { name, age, email, username } = req.body

    const user = await User.findOne({ email, username })

    if (user) {
      return res.status(400).json({
        success: false,
        msg: "User already exists"
      })
    }

    const newUser = await User.create({
      name,
      age,
      email,
      username
    })

    res.status(201).json({
      success: true,
      data: newUser
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false })
  }
}

// GET USERS
export const getUsers = async (req, res) => {
  try {
    const users = await User.find()

    res.status(200).json({
      success: true,
      data: users
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      msg: "Error fetching users"
    })
  }
}

// UPDATE USER
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    res.json({
      success: true,
      data: updatedUser
    })

  } catch (error) {
    console.log(error)
    res.json({ success: false })
  }
}

// DELETE USER
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)

    res.json({
      success: true,
      msg: "User deleted successfully"
    })

  } catch (error) {
    console.log(error)
    res.json({ success: false })
  }
}