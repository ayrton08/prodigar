import mongoose from "mongoose";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
