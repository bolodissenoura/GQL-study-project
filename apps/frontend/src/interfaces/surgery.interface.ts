export interface SurgeryInterface {
  id: string;
  date: string;
  hour: string;
  patient: string;
  instrumentator: string;
  doctor: string;
  startingPoint: string;
  hospitalName: string;
  typeTag: string;
}

export type SurgeryWithoutId = Omit<SurgeryInterface, "id">;
