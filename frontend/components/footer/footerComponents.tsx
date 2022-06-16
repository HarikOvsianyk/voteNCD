import {
    Box,
    Typography,
  } from "@mui/material";
  import { styled } from '@mui/system';
  import { colors } from '../../constants/colors';

  export const FooterWrapper = styled(Box)({
    backgroundColor: colors.main,
    height: '64px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  export const FooterTitle = styled(Typography)({
    color: colors.white,
    fontSize: '30px',
  });