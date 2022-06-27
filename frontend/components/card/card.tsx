import { FunctionComponent } from "react";
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
  const navigate = useNavigate();
  return (
    <BasicCard onClick={() => navigate(`/vote/${id}`)}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <CardTitle>{voteTitle}</CardTitle>
        <CardIdTitle>Vote id: {id}</CardIdTitle>
        <CardName>{voteName}</CardName>
        <CardTitle>{author}</CardTitle>
        <CardExpDate>Until: {expirationDate}</CardExpDate>
        <Button>View more</Button>
      </CardContent>
    </BasicCard>
  );
};
