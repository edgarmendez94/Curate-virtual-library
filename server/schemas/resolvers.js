const { AuthenticationError } = require('apollo-server-express');
const { User, Images} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find();
      },
      },



      
module.exports = resolvers;
}