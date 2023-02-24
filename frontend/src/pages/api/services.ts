import { gql } from "@apollo/client";

export const GET_SURGERY = gql`
  query surgery($surgeryId: String!) {
    Surgery(id: $surgeryId) {
      id
      date
      doctor
      hospitalName
      hour
      instrumentator
      startingPoint
      typeTag
      patient
    }
  }
`;

export const GET_SURGERIES = gql`
  query surgeries {
    Surgeries {
      id
      date
      doctor
      hospitalName
      hour
      instrumentator
      startingPoint
      typeTag
      patient
    }
  }
`;

export const EDIT_SURGERY = gql`
  mutation editSurgery($editSurgeryObject: EditSurgeryInput!) {
    editSurgery(editSurgeryObject: $editSurgeryObject) {
      id
      date
      doctor
      hospitalName
      hour
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
