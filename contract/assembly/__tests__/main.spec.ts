import {
  getAllVotes,
  getVote,
  isUserVoted,
  addToVotesMap,
  addToParticipation,
  addForVote,
  addToAgainst
} from "../index";

describe("Contract methods ", () => {
  it("GetAllVotes - should return votes", () => {
    addToVotesMap({
      voteTitle: "title",
      author: "author",
      voteName: "name",
      expirationDate: "date",
      forVote: 0,
      against: 0,
      description: "description",
      id: "id",
    });
    const votesArray = getAllVotes();
    expect(votesArray.length).toBe(1);
  });

  it("GetVote - should return vote", () => {
    addToVotesMap({
      voteTitle: "title",
      author: "author",
      voteName: "name",
      expirationDate: "date",
      forVote: 0,
      against: 0,
      description: "description",
      id: "id",
    });
    const vote = getVote("id");
    expect(vote).toStrictEqual({
      voteTitle: "title",
      author: "author",
      voteName: "name",
      expirationDate: "date",
      forVote: 0,
      against: 0,
      description: "description",
      id: "id",
    });
  });

  it("IsUserVoted - should return boolean", () => {
    addToParticipation("id", "accountId");
    const isVoted = isUserVoted("id", "accountId");
    expect(isVoted).toBe(true);
  });

  it("AddToVotesMap - should create vote ", () => {
    addToVotesMap({
      voteTitle: "title",
      author: "author",
      voteName: "name",
      expirationDate: "date",
      forVote: 0,
      against: 0,
      description: "description",
      id: "id",
    });
    expect(getVote("id")).toStrictEqual({
      voteTitle: "title",
      author: "author",
      voteName: "name",
      expirationDate: "date",
      forVote: 0,
      against: 0,
      description: "description",
      id: "id",
    });
  });

  it("addToParticipation - should record user id", () => {
    addToParticipation("id", "accountId");
    const isVoted = isUserVoted("id", "accountId");
    expect(isVoted).toBe(true);
  });

  it("addForVote - should add user vote for", () => {
    addToVotesMap({
      voteTitle: "title",
      author: "author",
      voteName: "name",
      expirationDate: "date",
      forVote: 0,
      against: 0,
      description: "description",
      id: "id",
    });
    addForVote("id");
    const vote = getVote("id");
    expect(vote.forVote).toBe(1);
  });

  it("addToAgainst - should add user vote against", () => {
    addToVotesMap({
      voteTitle: "title",
      author: "author",
      voteName: "name",
      expirationDate: "date",
      forVote: 0,
      against: 0,
      description: "description",
      id: "id",
    });
    addToAgainst("id");
    const vote = getVote("id");
    expect(vote.against).toBe(1);
  });
});
