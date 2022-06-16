import { FunctionComponent } from "react";
import {
  Button,
  CardContent,
  Typography,
} from "@mui/material";
import { BasicCard, CardTitle, CardName, CardExpDate, WrapperVoices } from "./cardComponents";
import { ICardProps } from "../../interfaces/interfaces";

export const Card: FunctionComponent<ICardProps> = ({
  lawTitle,
  lawName,
  expirationDate,
  inFavor,
  against,
}) => {
  return (
    <BasicCard>
      <CardContent>
        <CardTitle>{lawTitle}</CardTitle>
        <CardName>{lawName}</CardName>
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
