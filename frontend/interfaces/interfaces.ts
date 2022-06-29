import { FunctionComponent } from "react";
import { TVote } from "./types";

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
  registerValue: TVote;
  type: string;
  label: string;
}

export interface IContext {
  spinner: boolean;
  spinnerOn?: () => void;
  spinnerOff?: () => void;
}

export interface IPrivateRouteProps {
  component: FunctionComponent;
}
