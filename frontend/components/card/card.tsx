import { FunctionComponent } from "react";
import { useNavigate } from 'react-router-dom';
import {
  CardContent,
  Typography,
} from "@mui/material";
import { BasicCard, CardTitle, CardName, CardExpDate, WrapperVoices, CardBTN } from "./cardComponents";
import { ICardProps } from "../../interfaces/interfaces";

export const Card: FunctionComponent<ICardProps> = ({
  lawTitle,
  lawName,
  expirationDate,
  inFavor,
  against,
  id
}) => {
  const navigate = useNavigate();
  return (
    <BasicCard onClick={() => (navigate(`/law/${id}`))}>
      <CardContent>
        <CardTitle>{lawTitle}</CardTitle>
        <CardTitle>Law id: {id}</CardTitle>
        <CardName>{lawName}</CardName>
        <CardExpDate>Until: {expirationDate}</CardExpDate>
        <WrapperVoices>
          <Typography>In favor: {inFavor}</Typography>
          <Typography>Against: {against}</Typography>
        </WrapperVoices>
        <CardBTN>View more</CardBTN>
      </CardContent>
    </BasicCard>
  );
};
