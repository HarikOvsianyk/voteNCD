// import { TVote } from "./types";

export interface IVoteProps {
  voteTitle: string;
  author: string;
  voteName: string;
  expirationDate: string;
  forVote: number;
  against: number;
  description: string;
  id: string;
}

export interface IVoteFields {
  registerValue: any;
  type: string;
  label: string;
}
