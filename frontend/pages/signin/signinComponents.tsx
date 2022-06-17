import {
    Box,
    Typography,
  } from "@mui/material";
  import { styled } from '@mui/system';

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
    fontSize: '30px'
  });