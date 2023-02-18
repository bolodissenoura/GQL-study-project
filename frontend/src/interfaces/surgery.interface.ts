export interface SurgeryInterface {
  date: string;
  hour: string;
  patient: string;
  instrumentator: string;
  doctor: string;
  startingPoint: AdressInterface;
  hospital: AdressInterface;
  typeTag: string;
  distance: number;
  toll: TollInterface;
}

interface AdressInterface {
  title: string;
  fullAdress: string;
}

interface TollInterface {
  totalTolls: number;
  totalTollsPrice: number;
}
