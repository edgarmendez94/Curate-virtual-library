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
        voters {
          voteId
        }
      }
      votedImages {
        voteId
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
