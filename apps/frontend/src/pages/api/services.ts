import { gql } from "@apollo/client";

export const GET_SURGERY: any = gql`
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

export const GET_SURGERIES: any = gql`
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

export const EDIT_SURGERY: any = gql`
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

export const ADD_SURGERY: any = gql`
  mutation createSurgery($createSurgeryObject: CreateSurgeryInput!) {
    createSurgery(createSurgeryObject: $createSurgeryObject) {
      patient
      date
      doctor
      hospitalName
      typeTag
      hour
      instrumentator
      startingPoint
    }
  }
`;

export const DELETE_SURGERY: any = gql`
  mutation deleteSurgery($deleteSurgeryId: String!) {
    deleteSurgery(id: $deleteSurgeryId)
  }
`;
