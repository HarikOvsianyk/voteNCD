import { FunctionComponent, useEffect, useState, useContext } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { toast } from 'react-toastify';
import { useParams } from "react-router";
import {
  VoteWrapper,
  VoteTitle,
  VoteName,
  VoteExpDate,
  WrapperVoices,
} from "./votePageComponents";
import { Button, Spinner } from "../../components";
import { IVoteProps } from "../../interfaces/interfaces";
import { Context } from "../../context/context";

export const VotePage: FunctionComponent = ({}) => {
  const { spinner, spinnerOn, spinnerOff } = useContext(Context);
  const [isVoted, setIsVoted] = useState(false);
  const { id } = useParams();
  const [
    {
      voteTitle,
      voteName,
      author,
      expirationDate,
      forVote,
      against,
      description,
    },
    setVote,
  ] = useState<IVoteProps>({
    voteTitle: "",
    author: "",
    voteName: "",
    expirationDate: "",
    forVote: 0,
    against: 0,
    description: "",
    id: "",
  });
  const getVote = async () => {
    const vote = await window.contract.getVote({ id: id });
    setVote(vote);
    spinnerOff?.();
  };

  const checkVoted = async() => {
    const vote = await window.contract.isUserVoted({id:id, accountId: window.accountId});
    setIsVoted(vote);
  }

  useEffect(() => {
    spinnerOn?.();
    getVote();
    checkVoted();
  }, [isVoted]);

  const setForVote = async() => {
    spinnerOn?.();
    toast.success(`You've voted for ${voteName}`);
    await window.contract.addForVote({id: id});
    await window.contract.addToParticipation({id:id, accountId: window.accountId});
    setIsVoted(true);
    spinnerOff?.();
  };

  const setAgainst = async() => {
    spinnerOn?.();
    toast.error(`You've voted against ${voteName}`);
    await window.contract.addToAgainst({id: id});
    await window.contract.addToParticipation({id:id, accountId: window.accountId});
    setIsVoted(true);
    spinnerOff?.();
  };
  return (
    <VoteWrapper >
      <Paper elevation={3} sx={{ width: "500px" }}>
        {spinner ? (
          <Box             sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
          }}>
            <Spinner/>
          </Box>
        ) : (
          <Box
            key={id}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              p: 1,
            }}
          >
            <VoteTitle>{voteTitle}</VoteTitle>
            <VoteName>{voteName}</VoteName>
            <VoteTitle>{author}</VoteTitle>
            <VoteExpDate>Until: {expirationDate}</VoteExpDate>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <WrapperVoices>
                <Box sx={{ textAlign: "center", fontWeight: 'bold' }} visibility={isVoted?'visible':'hidden'}>
                  For:{" "}
                  <Typography sx={{ color: "green", fontWeight: 'bold' }}>{forVote}</Typography>
                </Box>
                <Button sx={{display: !isVoted ? 'block': 'none'}} onClick={() => setForVote()}>For</Button>
              </WrapperVoices>
              <WrapperVoices>
                <Box sx={{ textAlign: "center", fontWeight: 'bold' }} visibility={isVoted?'visible':'hidden'}>
                  Against:{" "}
                  <Typography sx={{ color: "red", fontWeight: 'bold' }}>{against}</Typography>
                </Box>
                <Button sx={{display: !isVoted ? 'block': 'none'}} onClick={() => setAgainst()}>Against</Button>
              </WrapperVoices>
            </Box>
            <Box sx={{ m: 2, textAlign: "justify" }}>{description}</Box>
          </Box>
        )}
      </Paper>
    </VoteWrapper>
  );
};
