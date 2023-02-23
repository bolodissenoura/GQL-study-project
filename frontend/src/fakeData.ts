import {
  OptionsInterface,
  SurgeryInterface,
  TagsInterface,
} from "./interfaces";

export const fakeData: OptionsInterface[] = [
  { id: "xaxsxs", label: "Daniel" },
  { id: "xasasdxsxs", label: "Rafaella" },
  { id: "xaxaasxs", label: "marcao" },
  { id: "xaddsxsxs", label: " Fabi" },
];

export const fakeDataRows: SurgeryInterface[] = [
  {
    date: "04/02/2023",
    hour: "9:30",
    patient: "Ilda Lima",
    instrumentator: "Vinicin Malvadeza",
    doctor: "Daniel Lima",
    hospitalName: "Vivalle",
    startingPoint: "Paulista Avenue",
    typeTag: "ORT",
    distance: 20,
  },
];

export const fakeDataTags: TagsInterface[] = [
  {
    title: "ORT",
    color: "red",
    id: "elonmusk69420",
  },
  {
    title: "ATM",
    color: "green",
    id: "elonmusk6820",
  },
  {
    title: "REC",
    color: "blue",
    id: "elonmusk67420",
  },
];
