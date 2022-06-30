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
  const date = new Date().toLocaleDateString();
  const navigate = useNavigate();
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
        <Button>View more</Button>
      </CardContent>
    </BasicCard>
  );
};
