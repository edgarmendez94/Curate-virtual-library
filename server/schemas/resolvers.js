const { AuthenticationError } = require('apollo-server-express');
const { User, Images } = require('../models');
const { signToken } = require('../utils/auth');

const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).select("-__v -password")
                return user;
            }
            throw new AuthenticationError('Not logged in');
        },
        // add image as a query
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        saveImage: async (parent, { imageData }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate({ _id: context.user._id }, { $push: { savedImages: imageData } }, { new: true })
                return updatedUser;
            }
            throw new AuthenticationError('Not logged in');
        },
        removeImage: async (parent, { imageId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate({ _id: context.user._id }, { $pull: { savedImages: { imageId } } }, { new: true })
                return updatedUser;
            }
            throw new AuthenticationError('Not logged in');
        },
    },
};