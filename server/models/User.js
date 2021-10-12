import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    isAdmin: {type: Boolean, default: false }
  },
  {
    versionKey: false,
    timestamps: true,
    id: true,
    toJSON: {
      virtuals: true,
    },
  }
);

UserSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

const User = model("User", UserSchema);

export default User;
