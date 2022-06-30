import {
    TextField,
  } from '@mui/material';
  import { styled } from '@mui/system';

  export const Form = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    width: '100%',
    marginTop: '16px',
    height: '90%',
  });

  export const FormField = styled(TextField)(({ theme }) => ({
    height: '75px',
    width: '45%'
  }));