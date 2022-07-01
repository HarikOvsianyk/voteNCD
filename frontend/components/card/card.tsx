import { FunctionComponent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CardContent } from "@mui/material";
import {
  BasicCard,
  CardTitle,
  CardName,
  CardExpDate,
  CardIdTitle,
} from "./cardComponents";
import { Button } from "../shared/button";
import { IVoteProps } from "../../interfaces/interfaces";

export const Card: FunctionComponent<IVoteProps> = ({
  voteTitle,
  voteName,
  author,
  expirationDate,
  forVote,
  against,
  id,
}) => {
  const [isVoted, setIsVoted] = useState(false);
  const date = new Date().toLocaleDateString();
  const navigate = useNavigate();

  const checkVoted = async () => {
    try {
      const vote = await window.contract.isUserVoted({
        id: id,
        accountId: window.accountId,
      });
      setIsVoted(vote);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkVoted();
  }, [isVoted]);

  return (
    <BasicCard
      onClick={() => navigate(`/vote/${id}`)}
      sx={{
        opacity: date === expirationDate ? "0.3" : "",
        pointerEvents: date === expirationDate ? "none" : "auto",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "350px",
        }}
      >
        <CardTitle sx={{ flexGrow: 3 }}>{voteTitle}</CardTitle>
        <CardIdTitle>Vote id: {id}</CardIdTitle>
        <CardName>{voteName}</CardName>
        <CardTitle>{author}</CardTitle>
        <CardExpDate>Until: {expirationDate}</CardExpDate>
        <Button>{isVoted?'Voted':'View more'}</Button>
      </CardContent>
    </BasicCard>
  );
};
