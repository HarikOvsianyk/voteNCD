import {
    Box,
    Typography,
    Button
  } from "@mui/material";
  import { styled } from '@mui/system';
  import { colors } from '../../constants/colors';

export const HeaderWrapper = styled(Box)({
    backgroundColor: colors.main,
    height: '64px',
});

export const HeaderTitle = styled(Typography)({
    flexGrow: 1,
    alignItems: 'center',
    color: colors.white,
    fontSize: '30px',
    margin: 0,
});

export const HeaderTitleAcc = styled(Typography)({
    backgroundColor: colors.main,
    color: colors.white,
    fontWeight: '500',
    fontSize: '1.2rem',
    lineHeight: '1.75',
    letterSpacing: '0.02857em',
    margin: '5px',
    padding: '5px',
});

export const HeaderBTN = styled(Button)({
    backgroundColor: colors.main,
    color: colors.white,
    fontWeight: '500',
    fontSize: '0.875rem',
    lineHeight: '1.75',
    letterSpacing: '0.02857em',
    textTransform: 'uppercase',
    minWidth: '64px',
    padding: '5px 15px',
    borderRadius: '4px',
    cursor: 'pointer',
    border: '1px solid #FFFFFF',
});