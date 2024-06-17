import mongoose from "mongoose";

const USerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        reqiured: true,
        unique: true
    },
    password: {
        type: String,
        reqiured: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
        reqiured: true
    },
    status: {
        type: String,
        default: "Active",
        reqiured: true
    }
})

export default mongoose.model("user", USerSchema);