import {
    Box,
    Typography,
    Button,
  } from "@mui/material";
  import { styled } from '@mui/system';
  import { colors } from '../../constants/colors';

  export const SignInWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  });

  export const SignInDescr = styled(Typography)({
    display: 'block',
    width: '50%',
    margin: '5px',
    padding: '5px',
  });

  export const SignInTitle = styled(Typography)({
    backgroundImage: 'url(../../assets//img/vote-logo.png)',
    backgroundPosition: 'center 1em',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 1.5em',
    marginTop: 0,
    padding: '3.5em 0 0.5em',
    textAlign: 'center',
    color: '#00bfb2',
  });

  export const SingInButton = styled(Button)({
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
  });