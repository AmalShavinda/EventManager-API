import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    expectedDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    coordinator: {
        type: String,
        default: ''
    }
})

export default mongoose.model("event", EventSchema);