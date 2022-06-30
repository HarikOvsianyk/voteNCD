import { WalletConnection } from "near-api-js";
import { IVoteProps } from "./interfaces/interfaces";

declare module "*.png" {
  const value: any;
  export = value;
}

declare global {
  interface Window {
    accountId: string;
    walletConnection: WalletConnection;
    contract: {
      getAllVotes: () => Promise<IVoteProps[]>;
      getVote: ({ id: string }) => Promise<IVoteProps>;
      isUserVoted: ({ id: string, accountId: string }) => Promise<bool>;
      addToVotesMap: ({ vote: IVoteProps }) => Promise<void>;
      addToParticipation: ({ id: string, accountId: string }) => Promise<void>;
      addForVote: ({ id: string }) => Promise<void>;
      addToAgainst: ({ id: string }) => Promise<void>;
      clearVotesMAP: ({ id: string }) => Promise<void>;
    };
  }
}
