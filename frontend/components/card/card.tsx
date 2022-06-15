import { FunctionComponent } from "react";
import {
  Box,
  Button,
  Card as BasicCard,
  CardContent,
  Typography,
} from "@mui/material";
import { ICardProps } from "../../interfaces/interfaces";
import "./card.scss";

export const Card: FunctionComponent<ICardProps> = ({
  lawTitle,
  lawName,
  expirationDate,
  inFavor,
  against,
}) => {
  return (
    <BasicCard className="card">
      <CardContent>
        <p className="card__title">{lawTitle}</p>
        <p className="card__name">{lawName}</p>
        <p className="card__expiration--date">Until: {expirationDate}</p>
        <div className="card__wrapper--voices">
          <Typography>In favor: {inFavor}</Typography>
          <Typography>Against: {against}</Typography>
        </div>
        <Button>View more</Button>
      </CardContent>
    </BasicCard>
  );
};
