import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profileImage: {
    type: String,
    default: "https://imgs.search.brave.com/nQf325QgVpPE0qw9fcxbiuMJeczO-uGvrxMwi4AVorA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS12/ZWN0b3IvcHJvZmls/ZS1wbGFjZWhvbGRl/ci1pbWFnZS1ncmF5/LXNpbGhvdWV0dGUt/MjYwbnctMTE5MDM4/NjMyNC5qcGc",
    required: false
  }
}, { timestamps: true })

const User = mongoose.model("User", userSchema)
export default User