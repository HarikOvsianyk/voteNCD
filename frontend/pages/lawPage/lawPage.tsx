import { FunctionComponent } from "react";
import { Box, Paper, Typography } from "@mui/material";
import {
  LawWrapper,
  LawTitle,
  LawName,
  LawExpDate,
  WrapperVoices
} from "./lawPageComponents";
import { Button } from '../../components';
import { ICardProps } from "../../interfaces/interfaces";

interface ILawProps extends ICardProps {
  description: string;
} // ask about union type ICardProps and ILawProps

export const LawPage: FunctionComponent<ILawProps> = ({
  lawTitle,
  lawName,
  expirationDate,
  inFavor,
  against,
  description
}) => {
  return (
    <LawWrapper>
      <Paper elevation={3} sx={{ width: '500px', height: '40vh'}}>
        <Box sx={{display: 'flex',flexDirection: 'column', justifyContent: 'space-between', alignItems:'center', p:1}}>
          <LawTitle>{lawTitle}</LawTitle>
          <LawName>{lawName}</LawName>
          <LawExpDate>Until: {expirationDate}</LawExpDate>
          <WrapperVoices>
            <Typography>In favor: {inFavor}</Typography>
            <Typography>Against: {against}</Typography>
          </WrapperVoices>
          <WrapperVoices>
          <Button>Favor</Button>
          <Button>Against</Button>
          </WrapperVoices>
          <Box sx={{width: '500px', height: '500px'}}>
            {description}
          </Box>
        </Box>
      </Paper>
    </LawWrapper>
  );
};
