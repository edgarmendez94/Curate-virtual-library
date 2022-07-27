const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String! 
    email: String!
    imageCount: Int
    savedImages: [Image]
}

type Image {
    User: [User]
    description: String
    imageId: ID
    fileName: String
    title: String
    display: Boolean
}

type Auth {
    token: ID!
    user: User
}
type Query {
    me: User
    images: [Image]!
    image(imageId:ID!):Image
}


input imageInput {
    description: String
    imageId: String!
    image: String!
    title: String!
}

type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
    saveImage(imageData:imageInput!):User
    removeImage(imageId:ID!):User

  }
`;

module.exports = typeDefs;
