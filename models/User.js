import mongoose, { Schema } from "mongoose";
import isEmail from "validator/lib/isEmail.js";

const userSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  name: {
    type: String,
    required: true,
    validate: {
      validator: (value) => value.length > 3,
      message: "Length must be greater than 3",
    },
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value) => isEmail(value),
      message: "Incorrect format !!",
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (value) => value.length >= 8,
      message: "Length password must be greater than 8",
    },
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;