import mongoose from "mongoose";

const replySchema = new mongoose.Schema({
  text: { type: String, required: true },
  admin: { type: Boolean, default: true }, // true if reply is from admin
  createdAt: { type: Date, default: Date.now },
});

const postSchema = new mongoose.Schema({
  text: { type: String, required: true },
  media: { image: String, audio: String, video: String },
  anonymous: { type: Boolean, default: true },
  authorRef: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
  status: { type: String, enum: ["pending", "done"], default: "pending" },
  replies: [replySchema],
}, { timestamps: true });


export default mongoose.model("Post", postSchema);
