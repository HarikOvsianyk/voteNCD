import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { colors } from "../../constants/colors";

export const VoteWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

export const VoteTitle = styled(Typography)({
  textAlign:'center',
  fontSize: "20px",
});

export const VoteName = styled(Typography)({
  textAlign:'center',
  color: colors.main,
  fontSize: "30px",
});

export const VoteExpDate = styled(Typography)({
  margin: "15px",
  fontStyle: 'italic',
});

export const VotedDescr = styled(Typography)({
  backgroundColor: colors.main,
  color: colors.white,
  borderRadius: '5px',
  position:'absolute',
  top: '0',
  right: '0',
  padding: '3px',
  margin: '3px',
})

export const WrapperVoices = styled(Box)({
  width: '45%',
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around"
});
