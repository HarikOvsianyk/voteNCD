import {
    Box,
    Card,
    Typography,
  } from "@mui/material";
  import { styled } from '@mui/system';
  import { colors } from '../../constants/colors';

  export const BasicCard = styled(Card)({
    maxWidth: '275px',
    margin: '10px',
    padding: '10px',
    flexGrow: 1,
  });

  export const CardTitle = styled(Typography)({
    fontSize: '20px',
  });
  
  export const CardName = styled(Typography)({
    color: colors.main,
    fontSize: '30px',
  });

  export const CardExpDate = styled(Typography)({
    margin: '15px',
  });

  export const WrapperVoices = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  });

  export const CardBTN = styled('button')({
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
    border: 'none',
  });


