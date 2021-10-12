import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: {  type: String,
      required: [true, "Username is required"],
      validate: {
        // check if the username is unique
        validator: async (value) => {
          const User = mongoose.model("User");
          const user = await User.findOne({ username: value });
          if (user) return false;
          else return true;
        },
        message: (props) => `${props.value} is taken!`,
      }
    },
    email: { type: String, required: true, 
      validate: {
  
      validator: async (value) => {
        const User = mongoose.model("User");
        const user = await User.findOne({ email: value });
        if (user) return false;
        else return true;
      },
      message: (props) => `${props.value} is taken!`,
    } },
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
