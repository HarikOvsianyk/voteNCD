import { ILawFields } from "../interfaces/interfaces";

export const LAW_FIELDS: ILawFields[] = [
  { label: "title", type: "text", registerValue: "lawTitle" },
  { label: "law name", type: "text", registerValue: "lawName" },
  { label: "author", type: "text", registerValue: "author" },
  { label: "expiration date", type: "date", registerValue: "date" },
  { label: "law description", type: "text", registerValue: "description" },
];
