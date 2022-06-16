import { FunctionComponent } from "react";
import { Box, Paper, Typography } from "@mui/material";
import {
  LawWrapper,
  LawTitle,
  LawName,
  LawExpDate,
  WrapperVoices,
  LawBTN,
} from "./lawPageComponents";
import { ILawProps } from "../../interfaces/interfaces";

export const LawPage: FunctionComponent<ILawProps> = ({
  lawTitle,
  lawName,
  expirationDate,
  inFavor,
  against,
}) => {
  return (
    <LawWrapper>
      <Paper elevation={3} sx={{ width: '500px', height: '100%'}}>
        <Box sx={{display: 'flex',flexDirection: 'column', justifyContent: 'space-between', alignItems:'center', p:1}}>
          <LawTitle>{lawTitle}</LawTitle>
          <LawName>{lawName}</LawName>
          <LawExpDate>Until: {expirationDate}</LawExpDate>
          <WrapperVoices>
            <Typography>In favor: {inFavor}</Typography>
            <Typography>Against: {against}</Typography>
          </WrapperVoices>
          <WrapperVoices>
          <LawBTN>Favor</LawBTN>
          <LawBTN>Against</LawBTN>
          </WrapperVoices>
        </Box>
      </Paper>
    </LawWrapper>
  );
};
