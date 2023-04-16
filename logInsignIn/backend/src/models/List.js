import { Schema, model } from "mongoose";

const userSchema = new Schema({
    title: {
        type: String,
        required: true,
        min: 4,
    },
    tasks: {
        type: Array,
        min: 4,
    },
    user: {
        type: String,
        required: true,
    },
});

export default model("List", userSchema);
