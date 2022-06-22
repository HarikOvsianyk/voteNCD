import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { CardContent, Typography, Box } from "@mui/material";
import {
  BasicCard,
  CardTitle,
  CardName,
  CardExpDate,
  WrapperVoices,
  CardIdTitle,
} from "./cardComponents";
import { Button } from "../shared/button";
import { IVoteProps } from "../../interfaces/interfaces";

export const Card: FunctionComponent<IVoteProps> = ({
  lawTitle,
  lawName,
  author,
  expirationDate,
  forVote,
  against,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <BasicCard onClick={() => navigate(`/law/${id}`)}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CardTitle>{lawTitle}</CardTitle>
        <CardIdTitle>Vote id: {id}</CardIdTitle>
        <CardName>{lawName}</CardName>
        <CardTitle>{author}</CardTitle>
        <CardExpDate>Until: {expirationDate}</CardExpDate>
        <WrapperVoices>
          <Box sx={{ textAlign: "center" }}>
            For: <Typography sx={{ color: "green" }}>{forVote}</Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            Against: <Typography sx={{ color: "red" }}>{against}</Typography>
          </Box>
        </WrapperVoices>
        <Button>View more</Button>
      </CardContent>
    </BasicCard>
  );
};
