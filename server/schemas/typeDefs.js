const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: Int!
    firstName: String
    lastName: String
    email: String
  }

  type Images {
    id: Int!
    title: String
    description: String
    onDisplay: Boolean
    posterId: [user]!
    votes: Int
  }

  type Votes {
    id: Int!
    images: [Images]!
    authorId: ID!
    votes: Int
  }
  type Auth {
    token: ID
    user: User
  }
`;

module.exports = typeDefs;
