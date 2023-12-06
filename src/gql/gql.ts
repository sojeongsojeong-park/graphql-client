import { gql } from "@apollo/client";

export const GET_MEMBERS = gql`
  query GetMembers {
    members {
      no
      name
      birthday
      gender
      jobStartYear
      joinedYear
      profileImg
      jobGrade {
        id
        name
      }
      role {
        id
        name
      }
    }
  }
`;
