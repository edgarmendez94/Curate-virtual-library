import { gql } from '@apollo/client';

export const GET_ME = gql`
query Me {
  me {
    username
    email
    savedImages {
      description
      imageId
      fileName
      title
    }
  }
}`;


export const QUERY_IMAGES = gql`
    query allImages {
      images {
        fileName
        title
      }
    }
  `;
