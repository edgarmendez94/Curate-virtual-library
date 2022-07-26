
const { Schema, model } = require('mongoose');


// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedimages` array in User.js
const imageSchema = new Schema({
    User: {
        type: Schema.Types.ObjectId,
        model: "User",
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    imageId: {
        type: String,
        required: false,
    },
    fileName: {
        type: String,
    },
    title: {
        type: String,
        required: false,
    },
    display: {
        type: Boolean,
        default: false,
    },
});
const Image = model("Image", imageSchema)
module.exports = Image;





