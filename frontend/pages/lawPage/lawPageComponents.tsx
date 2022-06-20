import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { colors } from "../../constants/colors";

export const LawWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

export const LawTitle = styled(Typography)({
  fontSize: "20px",
});

export const LawName = styled(Typography)({
  color: colors.main,
  fontSize: "30px",
});

export const LawExpDate = styled(Typography)({
  margin: "15px",
});

export const WrapperVoices = styled(Box)({
  width: '45%',
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around"
});
