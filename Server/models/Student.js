// Import modules
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create model
const studentSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true,
        },
        team: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        dateOfBirth: {
            type: String,
            required: true,
        },
        hometown: {
            type: String,
            required: true,
        },
        province: {
            type: String,
            required: true,
        },
        isVerified: {
            type: Boolean,
            required: true,
            default: false,
        },
        age: {
            type: Number,
            required: true,
        }
    },
    { versionKey: false }
);

// Export model
module.exports = mongoose.model("Student", studentSchema);