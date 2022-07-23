const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String! 
    email: String!
    bookCount: Int
    savedBooks: [Book]
}

type Image {
    User: [User]
    description: String
    imageId: ID
    image: String
    title: String
}

type Auth {
    token: ID!
    user: User
}

input imageInput {
    User: [User]
    description: String
    bookId: String
    image:String
    title: String
}

type Mutation {
    addUser(
      username: String
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
    saveImage(imageData:imageInput!):User
    removeImage(imageId:ID!):User
  }
`;

module.exports = typeDefs;
