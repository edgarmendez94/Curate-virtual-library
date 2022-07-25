
const { Schema } = require('mongoose');
const User = require('./User');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedimages` array in User.js
const imageSchema = new Schema({
    User: {
        type: Schema.Types.ObjectId,
        model: "User",
    },
    description: {
        type: String,
        required: false,
    },
    // saved image id from Googleimages
    imageId: {
        type: String,
        required: false,
    },
    image: {
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
<<<<<<< HEAD

module.exports = imageSchema;
=======
module.exports = imageSchema;





>>>>>>> dd1a27ed2e291629246f0b79713c7f8d9e072def
