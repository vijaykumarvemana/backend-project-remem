import mongoose from "mongoose";


// create a schema for the messagePost model
const messagePostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    message: { type: String, required: true },
    name: { type: String, required: true },
    creator: { type: String, required: true },
    tags: [String],
    selectedFile: { type: String },
    likes: { type :[String], default: [] },
    comments: { type :[String], default: [] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model("MessagePost", messagePostSchema);
