import { gql } from '@apollo/client';

export const GET_ME = gql`
query Me {
    me {
      username
      email
      savedImages {
        description
        imageId
        image
        title
      }
    }
  }`;


export const QUERY_IMAGES = gql`
    query allImages {
      profiles {
        fileName
        title
      }
    }
  `;
