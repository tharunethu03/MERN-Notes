import mongoose from "mongoose";

// create a Schema
const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        }
    },
    {timestamps: true} // createdAt, updatedAt
);

// create a Model based off the schema
const Note = mongoose.model("Note", noteSchema);

export default Note;