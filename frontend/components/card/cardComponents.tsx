import { Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { colors } from "../../constants/colors";

export const BasicCard = styled(Card)({
  width: "300px",
  margin: "10px",
  padding: "10px",
});

export const CardTitle = styled(Typography)({
  fontSize: "20px",
});

export const CardIdTitle = styled(Typography)({
  fontSize: "15px",
  color: "#D7D7D7",
});

export const CardName = styled("p")({
  color: colors.main,
  fontSize: "22px",
  width: "100%",
});

export const CardExpDate = styled(Typography)({
  margin: "15px",
  textAlign: 'center',
  fontStyle: 'italic'
});

export const WrapperVoices = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});
