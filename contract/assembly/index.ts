import { logging, PersistentMap } from "near-sdk-as";
import { IVoteProps } from "./model";

const VoteArray = new PersistentMap<string, IVoteProps[]>("Array of prompts");
const VotingArray = new PersistentMap<string, i32[]>("Stores votes");
const userParticipation = new PersistentMap<string, string[]>(
  "User participation record"
);

//View methods

export function didParticipate(prompt: string, user:string):bool{
  if(userParticipation.contains(prompt)){
    let getArray = userParticipation.getSome(prompt);
    return getArray.includes(user);
  }
  logging.log('Prompt not found');
  return false;
}

export function getAllPrompt():IVoteProps[]{
  if(VoteArray.contains('AllArrays')){
    return VoteArray.getSome('AllArrays');
  }
  logging.log('No prompts found')
  return []
}

export function getVotes(prompt:string):i32[]{
  if(VotingArray.contains(prompt)){
    return VotingArray.getSome(prompt);
  }
  logging.log('Prompt not found for this vote')
  return [0,0]
}

//Change methods

export function addToVoteArray(vote:IVoteProps):void{
  logging.log('Added to prompt array')
  if(VoteArray.contains('AllArrays')){
    let tempArray = VoteArray.getSome('AllArrays');
    tempArray.push(vote);
    VoteArray.set('AllArrays', tempArray)
  }
  VoteArray.set('AllArrays', [vote]);
}

export function addVote(prompt: string, index: i32): void {
  if (VotingArray.contains(prompt)) {
    let tempArray = VotingArray.getSome(prompt);
    let tempValue = tempArray[index];
    let newValue = tempValue + 1;
    tempArray[index] = newValue;
    VotingArray.set(prompt, tempArray);
  }
  let newArray = [0, 0];
  newArray[index] = 1;
  VotingArray.set(prompt, newArray);
}

export function recordUser(prompt: string, user:string):void{
  if(userParticipation.contains(prompt)){
    let tempArray = userParticipation.getSome(prompt);
    tempArray.push(user);
    userParticipation.set(prompt, tempArray);
  }
  userParticipation.set(prompt, [user]);
}