const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
<<<<<<< HEAD

// import schema from Images.js
const imagesSchema = require('./Images');

=======
const imagesSchema = require('./Images');
>>>>>>> dd1a27ed2e291629246f0b79713c7f8d9e072def
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    // set storedimages to be an array of data that adheres to the imageSchema
    storedImages: [imagesSchema],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);
<<<<<<< HEAD

=======
>>>>>>> dd1a27ed2e291629246f0b79713c7f8d9e072def
// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});
<<<<<<< HEAD

=======
>>>>>>> dd1a27ed2e291629246f0b79713c7f8d9e072def
// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
<<<<<<< HEAD

=======
>>>>>>> dd1a27ed2e291629246f0b79713c7f8d9e072def
// when we query a user, we'll also get another field called `imageCount` with the number of stored images we have
userSchema.virtual('imageCount').get(function () {
  return this.storedimages.length;
});
<<<<<<< HEAD


const User = model('User', userSchema);

module.exports = User;

=======
const User = model('User', userSchema);
module.exports = User;
>>>>>>> dd1a27ed2e291629246f0b79713c7f8d9e072def
