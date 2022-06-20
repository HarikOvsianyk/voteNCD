import { logging, PersistentMap } from "near-sdk-as";

const VoteURL = new PersistentMap<string, string>("VoteURL");
const VoteArray = new PersistentMap<string, i32[]>("Stores votes");
const userParticipation = new PersistentMap<string, string[]>(
  "user participation record"
);

//View methods
export function getUrl(name: string): string {
  if (VoteURL.contains(name)) {
    return VoteURL.getSome(name);
  }
  logging.log('can not find that user');
  return "";
}

//Change methods
export function addUrl(name: string, url: string): void {
  VoteURL.set(name, url);
  logging.log(`Added url for ${name}`);
}
