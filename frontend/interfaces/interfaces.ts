// import { TLaw } from "./types";

export interface IVoteProps {
  lawTitle: string;
  author: string;
  lawName: string;
  // expirationDate: Date | null;
  forVote: string;
  against: string;
  description: string;
  id: string;
}

export interface IVoteFields {
  registerValue: any;
  type: string;
  label: string;
}
