import { TLaw } from "./types";

export interface IBaseProps {
  lawTitle: string;
  author: string;
  lawName: string;
}

export interface ILawProps extends IBaseProps {
  description: string;
}

export interface ICardProps extends IBaseProps {
  expirationDate: string;
  inFavor: string;
  against: string;
  id: string | number;
}

export interface ILawFields {
  registerValue: TLaw;
  type: string;
  label: string;
}
