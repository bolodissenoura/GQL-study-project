import { gql } from "@apollo/client";

export const GET_SURGERY = gql`
  query surgeries {
    Surgeries {
      date
      doctor
      hospitalName
      hour
      id
      instrumentator
      startingPoint
      typeTag
      patient
    }
  }
`;

export const DELETE_SURGERY = gql`
  mutation deleteSurgery($deleteSurgeryId: String!) {
    deleteSurgery(id: $deleteSurgeryId)
  }
`;
