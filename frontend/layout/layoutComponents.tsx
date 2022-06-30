import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const LayoutWrapper = styled(Box)({
    display: 'flex',
    height: '100vh',
    width: '100%',
    flexDirection: 'column',
});

export const LayoutChildren = styled(Box)({
    width: '100%',
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});
