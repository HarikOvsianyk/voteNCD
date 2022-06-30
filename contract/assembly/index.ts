import { logging, PersistentUnorderedMap } from "near-sdk-as";
import { IVoteProps } from "./model";

const VotesMAP = new PersistentUnorderedMap<string, IVoteProps>("Vote");
const UserArray = new PersistentUnorderedMap<string, string[]>("UserArray");

//View methods

export function getAllVotes(): IVoteProps[] {
  return VotesMAP.values();
}

export function getVote(id: string): IVoteProps {
  return VotesMAP.getSome(id);
}

export function isUserVoted(id: string, accountId: string): bool {
  if (UserArray.contains(id)) {
    let getArray = UserArray.getSome(id);
    return getArray.includes(accountId);
  } else {
    logging.log("Vote not found");
    return false;
  }
}

//Change methods

export function addToVotesMap(vote: IVoteProps): void {
  logging.log("Added to votes array");
  VotesMAP.set(vote.id, vote);
}

export function addToParticipation(id: string, accountId: string): void {
  logging.log("You've voted!");
  if (UserArray.contains(id)) {
    let tempArray = UserArray.getSome(id);
    tempArray.push(accountId);
    UserArray.set(id, tempArray);
  } else {
    UserArray.set(id, [accountId]);
  }
}

export function addForVote(id: string): void {
  let vote = VotesMAP.getSome(id);
  vote.forVote += 1;
  VotesMAP.set(vote.id, vote);
}

export function addToAgainst(id: string): void {
  let vote = VotesMAP.getSome(id);
  vote.against += 1;
  VotesMAP.set(vote.id, vote);
}

export function clearVotesMAP(id: string): void {
  logging.log(`Clear Vote id:${id}`);
  VotesMAP.delete(id);
}
