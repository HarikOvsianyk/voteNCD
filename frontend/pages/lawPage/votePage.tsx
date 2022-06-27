import { FunctionComponent, useEffect, useState, useContext } from "react";
import { Box, Paper, Typography } from "@mui/material";
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
    forVote: "",
    against: "",
    description: "",
    id: "",
  });
  const getVote = async () => {
    const vote = await window.contract.getVote({ id: id });
    setVote(vote);
    spinnerOff?.();
  };
  useEffect(() => {
    spinnerOn?.();
    getVote();
  }, []);
  return (
    <VoteWrapper>
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
                <Box sx={{ textAlign: "center" }}>
                  For:{" "}
                  <Typography sx={{ color: "green" }}>{forVote}</Typography>
                </Box>
                <Button>For</Button>
              </WrapperVoices>
              <WrapperVoices>
                <Box sx={{ textAlign: "center" }}>
                  Against:{" "}
                  <Typography sx={{ color: "red" }}>{against}</Typography>
                </Box>
                <Button>Against</Button>
              </WrapperVoices>
            </Box>
            <Box sx={{ m: 2, textAlign: "justify" }}>{description}</Box>
          </Box>
        )}
      </Paper>
    </VoteWrapper>
  );
};
