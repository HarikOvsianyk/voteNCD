import { FunctionComponent } from "react";
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
        <CardBTN>View more</CardBTN>
      </CardContent>
    </BasicCard>
  );
};
