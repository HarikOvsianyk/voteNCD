import { logging, PersistentMap } from "near-sdk-as";

const VoteURL = new PersistentMap<string, string>("VoteURL");
const PromptArray = new PersistentMap<string, string[]>("Array of prompts");
const VoteArray = new PersistentMap<string, i32[]>("Stores votes");
const userParticipation = new PersistentMap<string, string[]>(
  "user participation record"
);

//View methods
export function getUrl(name: string): string {
  if (VoteURL.contains(name)) {
    return VoteURL.getSome(name);
  }
  logging.log("can not find that user");
  return "";
}

export function didParticipate(prompt: string, user:string):bool{
  if(userParticipation.contains(prompt)){
    let getArray = userParticipation.getSome(prompt);
    return getArray.includes(user);
  }
  logging.log('Prompt not found');
  return false;
}

export function getAllPrompt():string[]{
  if(PromptArray.contains('AllArrays')){
    return PromptArray.getSome('AllArrays');
  }
  logging.log('No prompts found')
  return []
}

export function getVotes(prompt:string):i32[]{
  if(VoteArray.contains(prompt)){
    return VoteArray.getSome(prompt);
  }
  logging.log('Prompt not found for this vote')
  return [0,0]
}

//Change methods
export function addUrl(name: string, url: string): void {
  VoteURL.set(name, url);
  logging.log(`Added url for ${name}`);
}

export function addToPromptArray(prompt:string):void{
  logging.log('Added to prompt array')
  if(PromptArray.contains('AllArrays')){
    let tempArray = PromptArray.getSome('AllArrays');
    tempArray.push(prompt);
  }
  PromptArray.set('AllArrays', [prompt]);
}

export function addVote(prompt: string, index: i32): void {
  if (VoteArray.contains(prompt)) {
    let tempArray = VoteArray.getSome(prompt);
    let tempValue = tempArray[index];
    let newValue = tempValue + 1;
    tempArray[index] = newValue;
    VoteArray.set(prompt, tempArray);
  }
  let newArray = [0, 0];
  newArray[index] = 1;
  VoteArray.set(prompt, newArray);
}

export function recordUser(prompt: string, user:string):void{
  if(userParticipation.contains(prompt)){
    let tempArray = userParticipation.getSome(prompt);
    tempArray.push(user);
    userParticipation.set(prompt, tempArray);
  }
  userParticipation.set(prompt, [user]);
}