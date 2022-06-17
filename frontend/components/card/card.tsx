import { FunctionComponent } from "react";
import { useNavigate } from 'react-router-dom';
import {
  CardContent,
  Typography,
} from "@mui/material";
import { BasicCard, CardTitle, CardName, CardExpDate, WrapperVoices } from "./cardComponents";
import {Button } from '../shared/button';
import { ICardProps } from "../../interfaces/interfaces";

export const Card: FunctionComponent<ICardProps> = ({
  lawTitle,
  lawName,
  author,
  expirationDate,
  inFavor,
  against,
  id
}) => {
  const navigate = useNavigate();
  return (
    <BasicCard onClick={() => (navigate(`/law/${id}`))}>
      <CardContent sx={{ width: '275px'}}>
        <CardTitle>{lawTitle}</CardTitle>
        <CardTitle>Law id: {id}</CardTitle>
        <CardName>{lawName}</CardName>
        <CardTitle>{author}</CardTitle>
        <CardExpDate>Until: {expirationDate}</CardExpDate>
        <WrapperVoices>
          <Typography>In favor: {inFavor}</Typography>
          <Typography>Against: {against}</Typography>
        </WrapperVoices>
        <Button>View more</Button>
      </CardContent>
    </BasicCard>
  );
};
