import { FunctionComponent } from "react";
import { Box, Paper, Typography } from "@mui/material";

export const Error: FunctionComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "50vw",
          height: "30vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography> Not found any page </Typography>
      </Paper>
    </Box>
  );
};
