import { logging, PersistentUnorderedMap } from "near-sdk-as";
import { IVoteProps } from "./model";

const VotesMAP = new PersistentUnorderedMap<string, IVoteProps>('Vote');
// const VotesArray = new PersistentUnorderedMap<string, IVoteProps>("Array of prompts");
// const VotingArray = new PersistentMap<string, i32[]>("Stores votes");
// const userParticipation = new PersistentMap<string, string[]>(
//   "User participation record"
// );

//View methods

// export function didParticipate(prompt: string, user: string): bool {
//   if (userParticipation.contains(prompt)) {
//     let getArray = userParticipation.getSome(prompt);
//     return getArray.includes(user);
//   }
//   logging.log("Prompt not found");
//   return false;
// }

export function getAllVotes(): IVoteProps[] {
    return VotesMAP.values();
  }

// export function getVotes(prompt:string):i32[]{
//   if(VotingArray.contains(prompt)){
//     return VotingArray.getSome(prompt);
//   }
//   logging.log('Prompt not found for this vote')
//   return [0,0]
// }

export function getVote(id:string): IVoteProps{
  return VotesMAP.getSome(id)
}

//Change methods

export function addToVotesMap(vote: IVoteProps): void {
  logging.log("Added to prompt array");
  VotesMAP.set(vote.id, vote);
}

// export function addVote(prompt: string, index: i32): void {
//   if (VotingArray.contains(prompt)) {
//     let tempArray = VotingArray.getSome(prompt);
//     let tempValue = tempArray[index];
//     let newValue = tempValue + 1;
//     tempArray[index] = newValue;
//     VotingArray.set(prompt, tempArray);
//   }
//   let newArray = [0, 0];
//   newArray[index] = 1;
//   VotingArray.set(prompt, newArray);
// }

// export function recordUser(prompt: string, user: string): void {
//   if (userParticipation.contains(prompt)) {
//     let tempArray = userParticipation.getSome(prompt);
//     tempArray.push(user);
//     userParticipation.set(prompt, tempArray);
//   }
//   userParticipation.set(prompt, [user]);
// }

export function clearVotesMAP(id: string):void{
  logging.log(`Clear Vote id:${id}`);
  VotesMAP.delete(id)
} 