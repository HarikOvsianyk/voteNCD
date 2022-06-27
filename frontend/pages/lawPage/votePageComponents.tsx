import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { colors } from "../../constants/colors";

export const VoteWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

export const VoteTitle = styled(Typography)({
  fontSize: "20px",
});

export const VoteName = styled(Typography)({
  color: colors.main,
  fontSize: "30px",
});

export const VoteExpDate = styled(Typography)({
  margin: "15px",
});

export const WrapperVoices = styled(Box)({
  width: '45%',
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around"
});
