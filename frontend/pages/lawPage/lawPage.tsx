import { FunctionComponent, useEffect, useState, useContext } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useParams } from "react-router";
import {
  LawWrapper,
  LawTitle,
  LawName,
  LawExpDate,
  WrapperVoices,
} from "./lawPageComponents";
import { Button, Spinner } from "../../components";
import { IVoteProps } from "../../interfaces/interfaces";
import { Context } from "../../context/context";

export const LawPage: FunctionComponent = ({}) => {
  const { spinner, spinnerOn, spinnerOff } = useContext(Context);
  const { id } = useParams();
  const [
    {
      lawTitle,
      lawName,
      author,
      expirationDate,
      forVote,
      against,
      description,
    },
    setVote,
  ] = useState<IVoteProps>({
    lawTitle: "",
    author: "",
    lawName: "",
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
    <LawWrapper>
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
            <LawTitle>{lawTitle}</LawTitle>
            <LawName>{lawName}</LawName>
            <LawTitle>{author}</LawTitle>
            <LawExpDate>Until: {expirationDate}</LawExpDate>
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
    </LawWrapper>
  );
};
