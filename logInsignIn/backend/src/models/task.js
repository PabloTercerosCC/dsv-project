import { Schema, model } from "mongoose";

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    user: {
        type: String,
    },
});

export default model("Task", productSchema);
